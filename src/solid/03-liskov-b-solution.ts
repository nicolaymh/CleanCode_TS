

//! Applying LSP.

export abstract class Vehicle {

    abstract getNumberOfSeats(): number;
}


export class Tesla extends Vehicle {

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Audi extends Vehicle {

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Toyota extends Vehicle {

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Honda extends Vehicle {

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Volvo extends Vehicle {

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Ford extends Vehicle {

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

/*

    ! Applying LSP.

    * In this set of classes, the Liskov Substitution Principle (LSP) has been applied. Each of the concrete classes (Tesla, Audi, Toyota, Honda, Volvo, Ford) extends the abstract class Vehicle and provides its own implementation of the `getNumberOfSeats()` method, as required by inheritance. This means that all of these classes can be uniformly treated as instances of the base class Vehicle, which complies with the principle that instances of a base class should be replaceable by instances of its derived classes without altering the program's behavior.

*/