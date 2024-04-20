import { Tesla, Audi, Toyota, Honda, Vehicle, Volvo, Ford } from './03-liskov-b-solution';


(() => {

    //////////////////////////////////////////////////////*
    //////////////////////////////////////////////////////*

    //! Applying SRP.

    const printCarSeats = ( cars: Vehicle[] ) => {

        cars.forEach( car => {
            console.log( car.constructor.name, car.getNumberOfSeats() );
        });
    }

    //////////////////////////////////////////////////////*
    //////////////////////////////////////////////////////*

    /*

    ? The code is designed to be easily extensible. Thanks to the Liskov Substitution Principle (LSP), new vehicle classes can be added by simply extending the existing abstract class. Then, by instantiating these new classes and adding them to the `cars` array, they seamlessly integrate into the existing functionality without requiring additional changes to the code. This ensures that the code is flexible and capable of handling new vehicle additions smoothly and seamlessly.

    */

    const cars = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
        new Volvo(2),
        new Ford(2),
    ];

    printCarSeats( cars );

})();