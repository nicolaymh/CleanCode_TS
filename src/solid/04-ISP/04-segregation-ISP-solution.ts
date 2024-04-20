
//! Implementation of Interface Segregation Principle (ISP).

(() => {

    ////////////////////////////////*
    ////////////////////////////////*

    interface Bird {
        eat(): void;
    }

    interface flyingBird {
        fly(): void;
    }

    interface runningBird {
        run(): number;
    }

    interface swimmingBird {
        swim(): void;
    }

    ////////////////////////////////*
    ////////////////////////////////*

    class Tucan implements Bird, flyingBird {
        eat() {}
        fly() {}
    }

    class Hummingbird implements Bird, flyingBird {
        eat() {}
        fly() {}
    }

    class Ostrich implements Bird, runningBird {
        eat() {}
        run(): number { return 20; }
    }

    class Penguin implements Bird, swimmingBird {
        eat() {}
        swim() {}
    }

    ////////////////////////////////*
    ////////////////////////////////*

})();

/*

    ! ISP implemented.

    * This implementation effectively adheres to the Interface Segregation Principle (ISP) by dividing the Bird interface into smaller, more specific interfaces (flyingBird, runningBird, swimmingBird). This approach ensures that each class implements only the methods it requires, avoiding the need to implement irrelevant methods or throw unwanted exceptions.

    * By using these more specific interfaces, the code becomes more modular, flexible, and easier to maintain. It also reduces coupling between classes and enhances code readability.

    * In summary, this implementation represents a significant improvement over the previous version and aligns well with solid design principles.

*/

