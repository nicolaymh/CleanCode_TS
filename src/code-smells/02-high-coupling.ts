(()=>{
    // Not applying the Single Responsibility Principle
    type Gender = 'M'|'F';

    //! High Coupling.

    class Person {
        constructor(
            public firstName:   string,
            public lastName:    string,
            public gender:      Gender,
            public birthdate:   Date,
        ){}
    }

    class User extends Person {
        constructor(
            public email:       string,
            public role:        string,
            private lastAccess: Date,
            firstName:          string,
            lastName:           string,
            gender:             Gender,
            birthdate:          Date,
        ){
            super(firstName, lastName, gender, birthdate);
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }


class UserSettings extends User {
    constructor(
        public workingDirectory:    string,
        public lastFolderOpen:      string,
        email:                      string,
        role:                       string,
        firstName:                  string,
        lastName:                   string,
        gender:                     Gender,
        birthdate:                  Date,
    ){
        super(
            email,
            role,
            new Date(),
            firstName,
            lastName,
            gender,
            birthdate
        )
    }
}



    const userSettings = new UserSettings(
        '/urs/home',
        '/development',
        'nicolay@google.com',
        'F',
        'Nicolay',
        'Moreno',
        'M',
        new Date('1985-10-21')
    );

    console.log({ userSettings, credentials: userSettings.checkCredentials() });

})()

/*

! High Coupling.

* This code exhibits high coupling due to the strong relationship between the Person, User, and UserSettings classes. Changes in one class may necessitate modifications in the other classes, making it difficult to implement any changes.

* For instance, if attributes in the Person class are modified, such as adding or removing an attribute, the User and UserSettings classes will be affected because they inherit from Person and are directly related to its attributes. This violates the SOLID design principle known as the Single Responsibility Principle, which suggests that a class should have only one reason to change. In this case, the classes have multiple reasons to change due to their interdependency.

*/