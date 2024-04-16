(() => {

    //////////////////////////////////////////////////////*
    //////////////////////////////////////////////////////*

    //! Not applying the single responsibility principle.

    type Gender = "M" | "F";

    class Person {
        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ){}
    }

    class User extends Person {

        public lastAccess: Date;

        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ){
            super(name, gender, birthdate)
            this.lastAccess = new Date();
        }

        checkCredentials(){
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder  : string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ){
            super(email, role, name, gender, birthdate)
        }
    }

    const userSettings = new UserSettings(
        "/usr/home",
        "/home",
        "nicolay@correo.com",
        "Admin",
        "Nicolay",
        "M",
        new Date("1987-03-14")
    )

    console.log(userSettings);

    //! Not applying the single responsibility principle.

    //////////////////////////////////////////////////////*
    //////////////////////////////////////////////////////*

})();

//! The single responsibility principle (SRP):
//? The SRP states that a class should have only one reason to change. This means that a class should be responsible for only one aspect or functionality of the system. By adhering to this principle, classes become more maintainable, reusable, and easier to understand.

//* In the provided code:

//* Person Class: This class represents a person with attributes such as name, gender, and birthdate. It seems to follow the SRP as it only encapsulates the properties of a person.

//* User Class: This class inherits from the Person class but introduces additional attributes such as email, role, and last access. While managing user-related data is a valid responsibility, the User class also includes a method checkCredentials(), which is responsible for user authentication. This mixes two distinct responsibilities: managing user data and handling authentication logic.

//* UserSettings Class: Similar to the User class, this class also inherits from Person but adds attributes related to user settings like workingDirectory and lastOpenFolder. However, it also manages user-related data such as email and role. Thus, it mixes the responsibility of managing user settings with handling user data.

//* By combining multiple responsibilities within these classes, any change to one aspect of the system (e.g., user data structure or authentication logic) may require modifications in multiple classes. This violates the SRP, as each class should ideally have a single, well-defined responsibility. To adhere to the SRP, these responsibilities should be separated into distinct classes, each focused on a specific aspect of the system, such as user authentication, user data management, or user settings management.