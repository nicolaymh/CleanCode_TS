
//? Pronounceable and Expressive Names:
//! The variables in this code have been improved for clarity and consistency.
//! It's recommended to use English when naming variables for better code readability and maintainability.

(() => {
    //////////////////////////////////////////////////////////////////////////////////////////*
    //////////////////////////////////////////////////////////////////////////////////////////*

    // Example
    // Files to evaluate
    const fs = [
        { id: 1, f: false },
        { id: 2, f: false },
        { id: 3, f: true },
        { id: 4, f: false },
        { id: 5, f: false },
        { id: 7, f: true },
    ];
    // Files marked for deletion
    const archivos = fs.map(f => f.f);

    // Improvement: Use clearer variable name
    // Flagged files to evaluate
    const filesToEvaluate = [
        { id: 2, flagged: false },
        { id: 3, flagged: true },
        { id: 1, flagged: false },
        { id: 4, flagged: false },
        { id: 5, flagged: false },
        { id: 7, flagged: true },
    ];
    // Files marked for deletion
    const filesToDelete = filesToEvaluate.map(files => files.flagged);

    //////////////////////////////////////////////////////////////////////////////////////////*
    //////////////////////////////////////////////////////////////////////////////////////////*

    // Bad Names
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Better
    class User { };
    interface User { };

    //////////////////////////////////////////////////////////////////////////////////////////*
    //////////////////////////////////////////////////////////////////////////////////////////*

    // Today's date
    const ddmmyyyy = new Date();

    // Better
    const today = new Date();

    //////////////////////////////////////////////////////////////////////////////////////////*
    //////////////////////////////////////////////////////////////////////////////////////////*

    // Elapsed time in days
    const d: number = 23;

    // Better
    const elapsedTimeInDays: number = 23;

    //////////////////////////////////////////////////////////////////////////////////////////*
    //////////////////////////////////////////////////////////////////////////////////////////*

    // Number of files in directory
    const dir = 33;

    // Better
    const numberOfFilesInDirectory = 33;

    //////////////////////////////////////////////////////////////////////////////////////////*
    //////////////////////////////////////////////////////////////////////////////////////////*

    // First name
    const nombre = 'Nicolay';

    // Better
    const firstName = "Nicolay";

    //////////////////////////////////////////////////////////////////////////////////////////*
    //////////////////////////////////////////////////////////////////////////////////////////*

    // Last name
    const apellido = 'Moreno';

    // Better
    const lastName = "Moreno";

    //////////////////////////////////////////////////////////////////////////////////////////*
    //////////////////////////////////////////////////////////////////////////////////////////*

    // Days since last modification
    const dsm = 12;

    // Better
    const lastModificationInDays = 12;

    //////////////////////////////////////////////////////////////////////////////////////////*
    //////////////////////////////////////////////////////////////////////////////////////////*

    // Maximum number of classes per student
    const max = 6;

    // Better
    const maxClassesPerStudent = 6

    //////////////////////////////////////////////////////////////////////////////////////////*
    //////////////////////////////////////////////////////////////////////////////////////////*
})();

//? Pronounceable and Expressive Names:
//! The variables in this code have been improved for clarity and consistency.
//! It's recommended to use English when naming variables for better code readability and maintainability.

//* The Clean Code principle regarding "Pronounceable and Expressive Names" emphasizes the importance of selecting variable, function, and other code element names that are easy to pronounce and expressive in their meaning. When names are clear and descriptive, they facilitate understanding of the code for both the programmer writing it and others reading it in the future.

//* Some guidelines that Clean Code suggests for applying this principle include:
//* - Using meaningful names: Names should clearly reflect the purpose and function of the variable or function in question. Avoid generic names like "temp" or "data."
//* - Choosing names that can be pronounced: Names should be easily pronounceable so they can be discussed and communicated with other team members without ambiguity.
//* - Avoiding confusing abbreviations: While abbreviations may sometimes seem helpful for saving time, they can be confusing and hinder code understanding.
//* - Using consistent naming conventions: Maintaining a consistent naming style throughout the code enhances readability and maintainability.

//* In summary, the "Pronounceable and Expressive Names" principle emphasizes the importance of selecting clear and descriptive names to improve code readability and comprehension. This contributes to more efficient development and easier maintenance over time.