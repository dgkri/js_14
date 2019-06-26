
class Vehicle {
    constructor(Make, Model, Year, Weight){
        this.Make = Make;
        this.Model = Model;
        this.Year = Year;
        this.Weight = Weight;
        this.NeedsMaintenance = false;
        this.TripsSinceMaintenance = 0;
    }

    Repair(){
        this.NeedsMaintenance = false;
        this.TripsSinceMaintenance = 0;
    }

    logStatus(){
        return `Make: ${this.Make}, 
        Model: ${this.Model}, 
        Year: ${this.Year}, 
        Weight: ${this.Weight}, 
        NeedsMaintenance: ${this.NeedsMaintenance}, 
        TripsSinceMaintenance: ${this.TripsSinceMaintenance}`;
    }
}



class Cars extends Vehicle{
    constructor(Make, Model, Year, Weight){
        super(Make, Model, Year, Weight);
        this.isDriving = false;
    }

    Drive(){
        if(this.TripsSinceMaintenance < 100){
            this.isDriving = true;
        }
        else{
            console.log(`trip no. reached 100, need repair before another trip`);
        }
    }

    Stop(){
        if(this.isDriving){
            this.isDriving = false;
            this.TripsSinceMaintenance += 1;
            if(this.TripsSinceMaintenance >=100){
                this.NeedsMaintenance = true;
            }
        }
    }
}


const car1 = new Cars("Honda", "city", 2010, 997);
const car2 = new Cars("Hyundai", "Verna", 2012, 920);
const car3 = new Cars("Skoda", "Rapid", 2013, 890);


for(let i=0; i<=100;i++){
    if(i%2 == 0){
        car2.Drive();
        car2.Stop();
    }
    if(i%3 == 0){
        car1.Drive();
        car1.Stop();
    }
    car3.Drive();
    car3.Stop();
}


console.log(`Status of car1
 ${car1.logStatus()}

status of car2 
${car2.logStatus()}

status of car3 
${car3.logStatus()}
`);


// Planes================================================================
console.log("Planes-----------------------------------------------------");

class Planes extends Vehicle{
    constructor(Make, Model, Year, Weight){
        super(Make, Model, Year, Weight);
        this.isFlying = false;
    }

    Fly(){
        if(this.TripsSinceMaintenance < 100){
            this.isFlying = true;
        }
        else{
            console.log(`trip no. reached 100, need repair before another trip`);
        }
    }

    Land(){
        if(this.isFlying){
            this.isFlying = false;
            this.TripsSinceMaintenance += 1;
            if(this.TripsSinceMaintenance >=100){
                this.NeedsMaintenance = true;
            }
        }
    }
}

const plane1 = new Planes("Boing", "737", 2010, 42000);
const plane2 = new Planes("Airbus", "A3-80", 2012, 560000);

for(let i=0; i<=100;i++){
    if(i%2 == 0){
        plane1.Fly();
        plane2.Land();
    }
    plane2.Fly();
    plane2.Land();
}

console.log(`Status of plane1
 ${plane1.logStatus()}

status of plane2 
${plane2.logStatus()}

`);