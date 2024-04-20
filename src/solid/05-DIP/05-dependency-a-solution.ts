import { PostService } from './05-dependency-b-solution';
import { LocalDataBaseService, JsonDataBaseService, WebApiPostService } from './05-dependency-c-solution';


// Main
(async () => {

    // Creating instances of different data service implementations
    const localDataBaseService = new LocalDataBaseService();
    const jsonDataBaseService = new JsonDataBaseService();
    const webApiPostService = new WebApiPostService();

   // Configuring PostService to use an instance of one of the data providers (localDataBaseService, jsonDataBaseService, webApiPostService) as its data provider.
    const postService = new PostService(webApiPostService);

    // Fetching posts using the configured data service and logging the results.
    const posts = await postService.getPosts();
    console.log({ posts });

})();


/*

! Applying DIP & LSP.

* The implemented solution for PostService is a clear example of how to apply robust and scalable software design principles. This implementation follows the SOLID principles, specifically the Dependency Inversion Principle (DIP) and the Liskov Substitution Principle (LSP). By doing so, it enhances the system's modularity, flexibility, and maintainability.

? Dependency Inversion Principle (DIP):
* The refactoring incorporates the DIP by introducing an abstract interface called PostProvider. This interface defines the necessary contract for any data service that wishes to interact with PostService. By depending on this abstraction rather than concrete implementations, PostService is decoupled from the specific details of the data sources, allowing greater flexibility and ease in making changes or enhancements.

? Liskov Substitution Principle (LSP):
* The implementation leverages the LSP to ensure that different data services can be interchanged without affecting the high-level logic of PostService. The classes LocalDataBaseService, JsonDataBaseService, and WebApiPostService implement the PostProvider interface, which allows any of these classes to be used by PostService without requiring internal modifications. This facilitates the extension of the system and promotes greater code reuse.

? Benefits
* The solution provides several significant benefits:

* Decoupling: Reduces direct dependencies between components, facilitating the management and updating of code.

* Ease of Testing: Improves the ability to conduct unit and integration tests by allowing the simulation or mocking of dependencies.

* Scalability and Flexibility: Enables the addition of new data sources or changes to existing ones with minimal impact on the high-level code.

? Conclusion
* The revised implementation of PostService demonstrates a proactive approach to software design, aligning the system with modern and sustainable development practices. This solution not only improves the quality of the design but also lays the groundwork for future expansions and maintenance with less effort and greater efficiency.

*/


