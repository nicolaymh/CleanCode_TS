import { HttpClient, TodoService, PostService, PhotosService } from './02-open-close-ocp-b-solution';

(async () => {


    // const todoService = new TodoService();
    // const postService = new PostService();
    // const photosService = new PhotosService();

    // const todos = await todoService.getTodoItems();
    // const posts = await postService.getPosts();
    // const photos = await photosService.getPhotos();


    // console.log({ todos, posts, photos });


    ////////////////////////////////////////////////////////////////////*
    ////////////////////////////////////////////////////////////////////*

    //! Applying instances for a solution.

    const httpClient = new HttpClient();

    const todoService = new TodoService(httpClient);
    const postService = new PostService(httpClient);
    const photoService = new PhotosService(httpClient);


    const todos = await todoService.getTodoItems();
    const posts = await postService.getPosts();
    const photos = await photoService.getPhotos();


    console.log( { todos, posts, photos } );

})();