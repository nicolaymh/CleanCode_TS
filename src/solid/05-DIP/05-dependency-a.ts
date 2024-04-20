import { PostService } from './05-dependency-b';


// Main
(async () => {

    const postService = new PostService();

    const posts = await postService.getPosts();

    console.log({ posts });

})();

/*

! Not applying DIP.

* The original code of the PostService directly instantiates LocalDataBaseService within its getPosts() method. This approach violates the Dependency Inversion Principle (DIP), one of the SOLID principles, and does not utilize dependency injection, resulting in high coupling and low flexibility. Furthermore, the current implementation does not leverage the Liskov Substitution Principle (LSP), which could allow greater flexibility when interacting with different data sources.

? Identified Problems
* High Coupling: PostService is strongly coupled to LocalDataBaseService. This means that any change in the implementation of LocalDataBaseService might require direct changes to PostService.

* Violation of the Dependency Inversion Principle (DIP): PostService directly depends on a concrete implementation rather than an abstraction.

* Testing Difficulties: The direct instance of LocalDataBaseService complicates independent unit testing for PostService.

* Liskov Substitution Principle (LSP) Not Applied: The current design does not allow for the substitution of LocalDataBaseService with another class implementing the same interface without altering PostService's behavior. This limits the system's flexibility to work with different data sources.

*/