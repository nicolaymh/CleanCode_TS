(() => {

    //////////////////////////////////////////////////////*
    //! We are not yet applying the single responsibility principle, but we already know how to send objects to our classes.
    //////////////////////////////////////////////////////*

    /*********************************************************** */
    /*********************************************************** */
    type Gender = "M" | "F";

    interface PersonProps {
        birthdate: Date,
        gender:  Gender,
        name: string,
    }

    class Person {

        public birthdate: Date;
        public gender: Gender;
        public name: string;

        constructor({ name, gender, birthdate }: PersonProps){
            this.birthdate = birthdate;
            this.gender = gender;
            this.name = name;
        }
    }
    /*********************************************************** */
    /*********************************************************** */


    /*********************************************************** */
    /*********************************************************** */
    interface UserProps {
        birthdate: Date,
        email: string,
        gender:  Gender,
        name: string,
        role: string,
    }

    class User extends Person {

        public email: string;
        public lastAccess: Date;
        public role: string;

        constructor({ birthdate, email, gender, name, role }: UserProps){
            super({ name, gender, birthdate })

            this.email = email;
            this.lastAccess = new Date();
            this.role = role;
        }

        checkCredentials(){
            return true;
        }
    }
    /*********************************************************** */
    /*********************************************************** */


    /*********************************************************** */
    /*********************************************************** */
    interface UserSettingsProps {
        birthdate: Date,
        email: string,
        gender: Gender,
        lastOpenFolder  : string,
        name: string,
        role: string,
        workingDirectory: string,
    }

    class UserSettings extends User {

        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor( { workingDirectory, lastOpenFolder, email, role, name, gender, birthdate }: UserSettingsProps){
            super({ email, role, name, gender, birthdate });

            this.lastOpenFolder = lastOpenFolder;
            this.workingDirectory = workingDirectory;

        }
    }
    /*********************************************************** */
    /*********************************************************** */

    const userSettings = new UserSettings({
        workingDirectory: "/usr/home",
        lastOpenFolder: "/home",
        email: "example@example.com",
        role: "admin",
        name: "John Doe",
        gender: "M",
        birthdate: new Date("1990-01-01")
    })


    console.log(userSettings);

    //////////////////////////////////////////////////////*
    //! We are not yet applying the single responsibility principle, but we already know how to send objects to our classes.
    //////////////////////////////////////////////////////*

})();


//! The single responsibility principle (SRP):
//? The SRP states that a class should have only one reason to change. This means that a class should be responsible for only one aspect or functionality of the system. By adhering to this principle, classes become more maintainable, reusable, and easier to understand.