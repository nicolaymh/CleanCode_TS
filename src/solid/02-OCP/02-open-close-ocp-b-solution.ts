import axios from 'axios';

export class HttpClient {

    // async get( url: string ) {

    //     const { data, status } = await axios.get(url);
    //     return { data, status };
    // }

    async get( url: string ){

        const response = await fetch( url );
        const data = await response.json();

        return { data, status: response.status };
    }
}


export class TodoService {

    constructor( private http: HttpClient ) {}

    async getTodoItems() {

        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/todos/');
        return data;
    }
}


export class PostService {

    constructor( private http: HttpClient ) {}

    async getPosts() {

        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/posts');
        return data;
    }
}


export class PhotosService {

    constructor( private http: HttpClient ) {}

    async getPhotos() {

        const  { data }  = await this.http.get('https://jsonplaceholder.typicode.com/photos');
        return data;
    }
}

/*

    ! Applying the Open/Closed Principle (OCP) in Practice

    ? Description:

    * The Open/Closed Principle (OCP) is one of the SOLID principles of software design. It states that software entities should be open for extension but closed for modification. In other words, the behavior of an entity should be able to be extended without altering its original source code.

    ? Application in the Project:
    * In our project, we applied the OCP by introducing the HttpClient class as an abstraction layer to handle HTTP requests instead of directly calling axios or fetch within the TodoService, PostService, and PhotosService classes. This abstraction allows us to extend the behavior of HTTP communication without directly modifying the service implementations.

    ? Benefits:
    * Flexibility: We can change the HTTP library used (e.g., from axios to another) or add new functionalities to HTTP requests without affecting existing service classes.

    * Maintainability: By separating the responsibilities of HTTP communication from specific business services, we maintain cleaner and more modular code, making it easier to understand and maintain in the future.

    ? Notes:
    * By injecting HttpClient as a dependency in the services, we also follow the Dependency Inversion Principle (DIP), promoting a more flexible and decoupled structure in our code.

*/