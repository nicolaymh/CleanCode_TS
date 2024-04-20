
//! ISP not implemented.

(() => {

    interface Bird {
        fly(): void;
        eat(): void;
        run(): void;
        swim(): void;
    }

    class Tucan implements Bird {
        public fly() {}
        public eat() {}
        public run() {}
        public swim() {}
    }

    class Hummingbird implements Bird {
        public fly() {}
        public eat() {}
        public run() {}
        public swim() {}
    }

    class Ostrich implements Bird {
        public fly() {
            throw new Error('This bird does not fly');
        }
        public eat() {}
        public run() {}
        public swim() {}
    }

    class Penguin implements Bird {
        public fly() {
            throw new Error('This bird does not fly');
        }
        public eat() {}
        public run() {}
        public swim() {}
    }

})();

/*

    ! ISP not implemented.

    ? This code violates the Interface Segregation Principle (ISP) because the `Bird` interface is too broad and contains methods that not all implementing classes need. For example, the `Ostrich` and `Penguin` classes do not need to implement the `fly()` method, as these birds cannot fly. However, they are forced to provide an implementation of this method due to the `Bird` interface, resulting in either an empty implementation or a thrown exception, which is undesirable.

    ? To comply with the ISP, the `Bird` interface should be divided into smaller, more specific interfaces that represent relevant behaviors for each type of bird. This way, classes would only implement the interfaces they need, avoiding the implementation of unnecessary methods.

    * See example 04-segregation-ISP-solution.ts

*/

