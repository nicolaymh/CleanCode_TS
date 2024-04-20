// We need to add the axios dependency ```yarn add axios```


//! Not OCP.

import axios from 'axios';


export class TodoService {

    async getTodoItems() {

        const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/');
        return data;
    }
}


export class PostService {

    async getPosts() {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return data;
    }
}


export class PhotosService {

    async getPhotos() {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/photos');
        return data;
    }
}

/*

    ! Not OCP.

    * The code violates the OCP principle because each service is tightly coupled to a specific API URL. If a new service is needed to retrieve data from another source, each existing class would have to be modified. To comply with the OCP principle, the data source logic should be decoupled from the services, allowing extension without modifying the existing code.

    * For example, in the solution, we could decouple the data source logic by creating a separate class to handle HTTP requests, and then injecting that dependency into each service that needs to make requests. This enables system extension without modifying existing classes.

    ? See example 02-open-close-ocp-b-solution.ts.

*/