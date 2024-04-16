(() => {

    //////////////////////////////////////////////////////*
    //! Applying the single responsibility principle.
    //! Prioritize composition over inheritance!
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
        email: string,
        role: string,
    }

    class User {

        public email: string;
        public lastAccess: Date;
        public role: string;

        constructor({email, role}: UserProps){

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
    interface SettingsProps {
        lastOpenFolder  : string,
        workingDirectory: string,
    }

    class Settings {

        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor( { workingDirectory, lastOpenFolder }: SettingsProps){

            this.lastOpenFolder = lastOpenFolder;
            this.workingDirectory = workingDirectory;

        }
    }
    /*********************************************************** */
    /*********************************************************** */


    /*********************************************************** */
    //! We make a class to be able to use the composition of the three user classes as objects in the latter.
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

    class UserSettings {
        public person: Person;
        public user: User;
        public settings: Settings;

        constructor({
            name, gender, birthdate,
            email, role,
            lastOpenFolder, workingDirectory,
        }: UserSettingsProps){

            this.person = new Person({ name, gender, birthdate });
            this.settings = new Settings({ lastOpenFolder, workingDirectory });
            this.user = new User({ email, role });
        }
    }
    /*********************************************************** */
    /*********************************************************** */


    //! Use
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
    console.log(userSettings.person);
    console.log(userSettings.user);
    console.log(userSettings.settings);
    console.log(userSettings.user.checkCredentials());

    //////////////////////////////////////////////////////*
    //! Applying the single responsibility principle.
    //! Prioritize composition over inheritance!
    //////////////////////////////////////////////////////*

})();


//! The single responsibility principle (SRP):
//? The SRP states that a class should have only one reason to change. This means that a class should be responsible for only one aspect or functionality of the system. By adhering to this principle, classes become more maintainable, reusable, and easier to understand.

//! Prioritize composition over inheritance!
//? Unless strictly necessary, try to avoid inheritance extensions, as this adds an extra layer of complexity and makes it more difficult to read the code. Composition is what we apply here.
