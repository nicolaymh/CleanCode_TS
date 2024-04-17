/*

! The acronym STUPID stands for a set of principles describing undesirable characteristics in software development:

* S: Singleton: The Singleton pattern, as mentioned earlier, is often problematic due to its tight coupling and shared global state.

* T: Tight Coupling: Strong coupling between different components of a system, making flexibility and code reuse difficult.

* U: Untestability: Difficulty in writing effective unit tests due to lack of modularity and hard-to-isolate dependencies.

* P: Premature Optimization: Premature optimization, involving optimizing code before it's necessary and without proper analysis of performance bottlenecks.

* I: Indescriptive Naming: Uninformative variable, method, or class names that hinder code understanding and developer intent.

* D: Duplication: Code duplication, leading to redundancy and difficulty in maintaining and updating the system.

*/


//? The code implements the Singleton design pattern in JavaScript, ensuring only one instance of a class exists and providing a global access point to that instance. The getInstance() function always returns the same instance. The main() method tests the Singleton's functionality.
const Singleton = (function () {

    let instance;

    function createInstance() {
        return new Object('I am the instance');
    }

    return {
        getInstance() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

function main() {

    const instance1 = Singleton.getInstance();
    const instance2 = Singleton.getInstance();

    console.log('Same instance? ', (instance1 === instance2));
}

main();

/*

! The Singleton pattern is often considered a code smell due to its drawbacks:

* Strong Coupling: It tightly couples classes to the Singleton instance, making testing and code reuse difficult.

* Global State: It introduces a global state shared across the application, leading to unexpected behaviors and complicating data flow.

* Inflexibility: It limits the application's ability to dynamically change behavior, hindering adaptability to evolving requirements.

* Testability: Classes depending on a Singleton can be hard to test in isolation, making unit testing challenging and error detection difficult.

* Overuse: It's sometimes overused as a quick fix for sharing state, leading to messy architectures and maintenance issues as the application grows.

? While Singleton can be useful in certain scenarios, it's essential to carefully consider its appropriateness and explore alternative patterns like dependency injection for better modularity and maintainability.

*/