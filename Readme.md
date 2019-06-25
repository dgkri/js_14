Q1.What is Object Oriented Programming?
Ans: It is a programming style in which we combine group of related functions and 
    variables into a single unit. We call this variables as properties and functions as methods.
    There are four principles of OOP:
    a. Encapsulation
    b. Abstraction
    c. Inheritance
    d. Polymorphism

Q2. Why use it?
Ans: It provides a clear modular structure for programs which makes it good for defining abstract            datatypes in which implementation details are hidden. Objects can also be reused within an across        applications. The reuse of software also lowers the cost of development.

Example Project:
A Racing Game:
    In this type of project we can make use of OOP alot.
    This game will contain lots of vehicle type such as Bykes and car, so we can define an constructor for each type of vehicles. such as car constructor and bike constructor.
    In generally all cars and bikes will have name and milage, top speed, range etc.
    So we can define this in a constructor for car and bikes etc.

    We can also add meathods, to increase the speed, decrease the speed etc.

    In this game, we can also add special functionality to some cars, such as boost etc.
    we can also create a constructor of special functionality and this will be inherited by only those cars, which are special.
    And we can do many more things with it...

Pseudo Code:(a small example of above, though this is not complete, just to give you a small hint)

// general vehicle constructor

function vehicle(name, color, top_speed, range){
    this.name = name;
    this.color = color;
    this.topSpeed = top_speed;
    this.range = range;
}

// this car constructor inherits vehicle with one addition of distance, its present location

const car(name, color, top_speed, range, distance){
    vehicle.call(this, name, color, top_speed, range);
    this.distance = distance;
}

// method for car... moved to increment dist..

car.prototype.moved(x){
    this.distance += 5;
}

// bike is another vehicle which inherits from car...

const bike(name, color, top_speed, range, distance){
    car.call(this, name, top_speed, range, distance);
}

// to also get the the moved method in its prototype

bike.prototype = object.create(car.prototype);
bike.prototype.constructor = bike;


This is just an unsolved but crude example just to explain you what was my understanding of oop.
This also helped a lot in reuse of code..