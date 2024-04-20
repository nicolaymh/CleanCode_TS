

export class Tesla {

    constructor( private numberOfSeats: number ) {}

    getNumberOfTeslaSeats() {
        return this.numberOfSeats;
    }
}

export class Audi {

    constructor( private numberOfSeats: number ) {}

    getNumberOfAudiSeats() {
        return this.numberOfSeats;
    }
}

export class Toyota {

    constructor( private numberOfSeats: number ) {}

    getNumberOfToyotaSeats() {
        return this.numberOfSeats;
    }
}

export class Honda {

    constructor( private numberOfSeats: number ) {}

    getNumberOfHondaSeats() {
        return this.numberOfSeats;
    }
}

/*

    ! Not LSP.

    ? The Liskov Substitution Principle states that instances of a base class should be replaceable with instances of its derived classes without altering the program's behavior. In other words, when inheriting from a base class, the derived class is expected to be usable in place of the base class seamlessly.

    * In this case, you have several concrete classes like Tesla, Audi, Toyota, and Honda, each with a method that returns the specific number of seats for that car brand. This violates the Liskov Substitution Principle because if you try to use an object of the base class (e.g., an object of the Tesla class) where an object of the base class is expected (e.g., a method that works with any type of car), the program's behavior will change as you won't be able to call the specific Tesla method.

    * In summary, the Liskov Substitution Principle is violated here because the derived classes (Tesla, Audi, Toyota, Honda) cannot be fully substituted for their base class without changing the program's behavior. Each derived class has specific behavior that is not present in the base class.

*/


