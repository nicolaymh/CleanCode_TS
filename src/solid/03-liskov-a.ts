import { Tesla, Audi, Toyota, Honda } from './03-liskov-b';


(() => {

    ////////////////////////////////////////////////////////////////////////*
    ////////////////////////////////////////////////////////////////////////*

    /*
    ?This code violates the Open/Closed Principle (OCP) in software design. The OCP principle states that software entities (classes, modules, functions, etc.) should be open for extension but closed for modification.

    ? In the provided code, each time a new type of car needs to be added (for example, a Ford), the printCarSeats function must be modified to include a new conditional check. This goes against the OCP principle, as the function should be open for extension (able to handle new types of cars) without the need to modify its existing code.
    */
    const printCarSeats = ( cars: (Tesla | Audi | Toyota | Honda)[] ) => {

        for (const car of cars) {

            if( car instanceof Tesla ) {
                console.log( 'Tesla', car.getNumberOfTeslaSeats() )
                continue;
            }
            if( car instanceof Audi ) {
                console.log( 'Audi', car.getNumberOfAudiSeats() )
                continue;
            }
            if( car instanceof Toyota ) {
                console.log( 'Toyota', car.getNumberOfToyotaSeats() )
                continue;
            }
            if( car instanceof Honda ) {
                console.log( 'Honda', car.getNumberOfHondaSeats() )
                continue;
            }

        }
    }

    ////////////////////////////////////////////////////////////////////////*
    ////////////////////////////////////////////////////////////////////////*

    const cars = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
    ];


    printCarSeats( cars );

})();

/*

    ! The Liskov Substitution Principle LSP

    * The Liskov Substitution Principle is a design rule in object-oriented programming that states that objects of a base class should be replaceable with objects of its derived classes without affecting the correctness of the program. In other words, if S is a subtype of T, then objects of type T can be substituted with objects of type S without altering the program's properties. This principle ensures that inheritance is used consistently and that derived classes can extend the behavior of base classes without breaking existing code.

*/