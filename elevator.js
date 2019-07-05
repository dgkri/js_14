// this is my elevator project (:D

var elevator_state = {
    stopped: 0,
    goingUp: 1,
    goingDown: -1,
    emergency: null,
};


class elevator {
    constructor(){
        this.upArr = [];
        this.downArr = [];
        this.current_floor = 0;
        this.next_floor = null;
        this.state = elevator_state.stopped;
        this.egcy = 0;
    }

    reset(){
        this.upArr = [];
        this.downArr = [];
        this.state = elevator_state.stopped;
        this.next_floor = null;
        this.egcy = 0;
        console.log(`Close Door`);
    }

    emergency(){
        this.state = elevator_state.emergency;
    }

    run(timer){
        if(this.state){
            this.current_floor += this.state;
            if(this.current_floor = this.next_floor){
                console.log(`Reached ${this.current_floor}`);
                console.log(`Open Door`);
                console.log(`Close Door`);
                this.next_floor = this.pop_it();
            }
        }
        else if(this.state === elevator_state.emergency){
            this.current_floor += this.egcy;
            
            console.log(`Emergency, Reached floor ${this.current_floor}`);
            console.log(`Open Door`);
            Console.log(`Reset needed`);
            clearTimeout(timer);
        }
    }

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
                return temp;
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
                return temp;
            }
            else{
                this.state = elevator_state.stopped;
                this.egcy = 0;
                return null;
            }
        }        


    }

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


