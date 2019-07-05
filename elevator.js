// this is my elevator project (:D

// this is like an object(like enum in c++).. 
// for defining state of the elevator..
var elevator_state = {
    stopped: 0,
    goingUp: 1,
    goingDown: -1,
    emergency: null,
};

// this is an elevator class...
// it have following variables in the constructor..
class elevator {
    constructor(){
        this.upArr = [];// Que when elevators goes up
        this.nextUpArr = [];// this is the request of going up from those floors which are less than
                            // the current floor of elevator... 
        this.downArr = [];// Que when elevator goes down ..
        this.nextDownArr = [];// similar function as next up arr
        this.current_floor = 0;// Denotes the current floor
        this.next_floor = null; // determines the next floor... when there is no floors in the que
                                // the value is null and also defaultvalue is also null
        this.state = elevator_state.stopped; // Determines the state of elevator..
        this.egcy = 0; // used when elevators is in emergency state...
    }

    // this reset function is called to reset the elevator..
    // this is the function for reset but it does not calls the timer function..
    // we will see the timer (setTimeout function later) later...
    reset(){
        this.upArr = [];
        this.downArr = [];
        this.state = elevator_state.stopped;
        this.next_floor = null;
        this.egcy = 0;
        console.log(`Close Door`);
    }

    // this function is called when emergency button in an elevator is pressed
    emergency(){
        this.state = elevator_state.emergency;
    }

    // this run function is called every milisecond
    // this takes care of the elevator movement... next floor.. status etc, depending on various conditions 
    run(timer){
        // this. state is only true when elevator is going up or down
        // this increments the current floor, checks if the floor reached the next floor,
        // and also sets the value of next floor..
        // the value of next floor is set by using pop_it() function.. which also does lots of stuff.. which we will look
        if(this.state){
            this.current_floor += this.state;
            if(this.current_floor = this.next_floor){
                console.log(`Reached ${this.current_floor}`);
                console.log(`Open Door`);
                console.log(`Close Door`);
                this.next_floor = this.pop_it();
            }
        }
        // this is only true when state is emergency
        // this here we used the egcy variable
        // it also clears the timer which is calling the elevator..
        // implies the elevator stopped and needed to reset..
        else if(this.state === elevator_state.emergency){
            this.current_floor += this.egcy;
            
            console.log(`Emergency, Reached floor ${this.current_floor}`);
            console.log(`Open Door`);
            Console.log(`Reset needed`);
            clearTimeout(timer);// here in the emergency state we are removing the timer and stopping the 
                                // elevator from further use.. it will be reset first...
        }
    }


    // this is the pop_it() method, which is use to set the next_floor variable..
    // this also sets many other variable..
    // this also takes care of the elevator state, chaeks if the que is empty and changes the state accordingly
    pop_it(){
        
        if(this.state === elevator_state.goingUp){
            if(this.upArr.length > 0){
                let temp = this.upArr.pop();
                return temp;
            }
            else if(this.downArr.length > 0){
                let temp = this.downArr.pop();
                this.state = elevator_state.goingDown;
                this.egcy = -1;
                this.upArr = this.nextUpArr;
                this.nextUpArr = [];
                return temp;
            }
            else if(this.nextUpArr.length > 0){
                this.state = elevator_state.goingDown;
                this.egcy = -1;
                this.upArr = this.nextUpArr;
                this.nextUpArr = [];
                return 0;
            }
            else{
                this.state = elevator_state.stopped;
                this.egcy = 0;
                return null;
            }
            
        }
        else{
            if(this.downArr.length > 0){
                let temp = this.downArr.pop();
                return temp;
            }
            else if(this.upArr.length > 0){
                let temp = this.upArr.pop();
                this.state = elevator_state.goingUp;
                this.egcy = 1;
                this.downArr = this.nextDownArr;
                this.nextDownArr = [];
                return temp;
            }
            else if(this.nextDownArr.length > 0){
                this.state = elevator_state.goingUp;
                this.egcy = 1;
                this.downArr = this.nextDownArr;
                this.nextDownArr = [];
                return 9;
            }
            else{
                this.state = elevator_state.stopped;
                this.egcy = 0;
                return null;
            }
        }        


    }


    // this is called whenever a button is pressed inside an elevator and x is the floor no.
    // which the button represents..
    // this takes care of many things also the state of the elevator.. 
    // and  some needed stuffs..
    floor_btn(x){
        if(this.state === elevator_state.goingUp){
            if(x > this.current_floor){
                this.upArr.push(x);
                this.upArr.push(this.next_floor);
                this.upArr.sort();
                this.upArr.reverse();
                this.next_floor = this.upArr.pop();
            }
            else{
                this.downArr.push(x);
                this.downArr.sort();
            }
        }
        else if(this.state === elevator_state.goingDown){
            if(x < this.current_floor){
                this.downArr.push(x);
                this.downArr.push(this.next_floor);
                this.downArr.sort();
                this.next_floor = this.downArr.pop();
            }
            else{
                this.upArr.push(x);
                this.upArr.sort();
                this.upArr.reverse();
            }
        }
        else if( this.state === elevator_state.stopped){
            this.next_floor = x;
            if(x<this.current_floor){
                this.state = elevator_state.goingDown;
                this.egcy = -1;
            }
            if(x>this.current_floor){
                this.state = elevator_state.goingUp;
                this.egcy = 1;
            }
        }
    }


}

// defining two elevators
const A = new elevator(); //rage from 0 - 10
const B = new elevator(); // range from -1 to 9


// this function calculates which elevator will reach the that floor first which pressed the going up button
function upCal(C, x){
    if(C.state === elevator_state.stopped){
        if(C.current_floor < x){
            return Math.abs(C.current_floor - x);
        }
        else{
            return C.current_floor + x;
        }
        
    }
    else if(C.state === elevator_state.goingUp && C.current_floor <= x ){
        return x - C.current_floor;
    }  
    else{
        return (x + 10) - C.state*(C.current_floor - 10);
    }
}

// this function inserts the require floor in the desired queue of the selected elevator
// after checking many conditions..
function upinsert(C,x){
    if(C.state === elevator_state.stopped){
        if(C.current_floor > x){
            C.state = elevator_state.goingDown;
            C.egcy =-1;
            C.next_floor = 0;
            C.upArr.push(x);
        }
        else{
            C.state = elevator_state.goingUp;
            C.egcy = 1;
            C.next_floor = x;
        }
    }
    else if(C.state === elevator_state.goingUp){
        if(C.current_floor > x){
            C.nextUpArr.push(x);
            C.nextUpArr.sort();
            C.nextUpArr.reverse();
        }
        else{
            C.upArr.push(x);
            C.upArr.push(C.next_floor);
            C.upArr.sort();
            C.upArr.reverse();
            C.next_floor = C.upArr.pop();
        }
        
    }
    else{
        C.upArr.push(x);
        C.upArr.sort();
        C.upArr.reverse();
    }

}

// any up arrow button is pressed in any floor this function is called..
// this function uses the above two functions, upCal and upInsert and selects which elevator will
// serve that floor... after checking many conditions..
function up(x){
    if(x === -1){
        if(B.state === elevator_state.emergency){
            console.log(`Elevator B is unavailable
            need to reset`);
        }
        else{
            upinsert(B, x);
        }
        
    }
    else if(A.state === elevator_state.emergency || B.state === elevator_state.emergency){
        if(A.state === B.state){
            console.log(`Both elevator is unavailable, Need to reset both`);
        }
        else if(A.state === elevator_state.emergency){
            upinsert(B, x);
        }
        else{
            upinsert(A, x);
        }
    }
    else{
        Atime = upCal(A, x);
        Btime = upCal(B, x);
        if(Atime < Btime){
            upinsert(A, x);
        }
        else{
            upinsert(B, x);
        }
    }

}

// this downCal function is similar to the upCal function but calculated for the down request..
function downCal(C, x){
    if(C.state === elevator_state.stopped){
        if(C.current_floor > x){
            return Math.abs(C.current_floor - x);
        }
        else{
            return C.current_floor + x;
        }
        
    }
    else if(C.state === elevator_state.goingDown && C.current_floor >= x ){
        return C.current_floor - x;
    }  
    else{
        return (20-x) - C.state*(C.current_floor);
    }
}

// similar to upinsert but used for down request...
function downinsert(C, x){
    if(C.state === elevator_state.stopped){
        if(C.current_floor > x){
            C.state = elevator_state.goingDown;
            C.egcy = -1;
            C.next_floor = x;
        }
        else{
            C.state = elevator_state.goingUp;
            C.egcy = 1;
            C.next_floor = 9;
            C.downArr.push(x);
        }
    }
    else if(C.state === elevator_state.goingDown){
        if(C.current_floor < x){
            C.nextDownArr.push(x);
            C.nextDownArr.sort();
        }
        else{
            C.downArr.push(x);
            C.downArr.push(C.next_floor);
            C.downArr.sort();
            C.next_floor = C.upArr.pop();
        }
       
    }
    else{
        C.downArr.push(x);
        C.downArr.sort();
    }
}

// this function is called whenever the down arraow is pressed in any floor,
// and this function decides which elevator will serve the  floor.. after checking many conditions..
// this function used two helper function downCal and downinsert
function down(x){
    if(x === 10){
        if(A.state === elevator_state.emergency){
            console.log(`Elevator A is unavailable
            need to reset`);
        }
        else{
            downinsert(A, x);
        }
        
    }
    else if(A.state === elevator_state.emergency || B.state === elevator_state.emergency){
        if(A.state === B.state){
            console.log(`Both elevator is unavailable, Need to reset both`);
        }
        else if(A.state === elevator_state.emergency){
            downinsert(B, x);
        }
        else{
            downinsert(A, x);
        }
    }
    else{
        Atime = downCal(A, x);
        Btime = downCal(B, x);
        if(Atime < Btime){
            downinsert(A, x);
        }
        else{
            downinsert(B, x);
        }
    }
}

// this function is used to start the elevator..
// look here we used the setTimeout which calls the run method after every one second..
// and the run function does the rest..
function START(){
    let At = setTimeout(A.run(At), 1000);// here in the run function we are passing the timer as argument
    let Bt = setTimeout(B.run(Bt), 1000);// this is to tackel the emergency button..
}

// this function is used to reset the elevators..
function RESET(){
    A.reset();
    B.reset();
    START();
}