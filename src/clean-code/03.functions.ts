(() => {

    //! Functions

    //? Clean Code emphasizes clear and descriptive function names, as well as meaningful parameter names, to enhance readability and maintainability.

    //? Additionally, interfaces are used to establish better typing and structure for function parameters, aiding in code organization and reducing errors.

    //? It's also recommended to limit the number of function parameters to three or fewer, which promotes simplicity and readability.

    //? If a function requires more parameters, it's often a sign that the function could be further decomposed into smaller, more focused functions.

    //////////////////////////////////////////////////////////////////////////////////*
    //////////////////////////////////////////////////////////////////////////////////*

    // function to get movie information by Id
    function getAllMovies( movieId: string ) {
        console.log({ movieId });
    }

    // Better
    function getMovieById( id: string){
        console.log({ id });
    }


    //////////////////////////////////////////////////////////////////////////////////*
    //////////////////////////////////////////////////////////////////////////////////*

    // function to get information about movie actors - Actors or Cast // id = movieId getMovieCast
    function getAllMovieActors( id: string ) {
        console.log({ id });
    }

    // Better
    function getMovieCastById( id: string ) {
        console.log({ id });
    }

    //////////////////////////////////////////////////////////////////////////////////*
    //////////////////////////////////////////////////////////////////////////////////*

    // function to get actor's bio by id
    function getUser( ActorId: string ) {
        console.log({ ActorId });
    }

    // Better
    function getActorBioById( id: string ) {
        console.log({ id });
    }


    //////////////////////////////////////////////////////////////////////////////////*
    //////////////////////////////////////////////////////////////////////////////////*

    // Create a movie
    function movie(title: string, description: string, rating: number, cast: string[] ) {
        console.log({ title, description, rating, cast });
    }

    // Better
    interface Movie {
        cast: string[]
        description: string,
        rating: number,
        title: string,
    }

    function createMovie( { title, description, rating, cast }: Movie ) {
        console.log({ title, description, rating, cast });
    }

    //////////////////////////////////////////////////////////////////////////////////*
    //////////////////////////////////////////////////////////////////////////////////*

    // Create a new actor
    function createActorIfActorNotExists( fullName: string, birthdate: Date ): boolean {

        // asynchronous task to check name
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Create actor', birthdate);
        return true;

    }

    // Better
    interface Actor {
        fullName: string,
        birthdate: Date
    }

    function checkFullName( fullName: string): boolean {
        console.log({ fullName });
        return true
    }

    function createActor({ fullName, birthdate }: Actor ): boolean {

        if ( checkFullName(fullName) ) return false;

        console.log('Create actor', birthdate);
        return true;
    }

})();