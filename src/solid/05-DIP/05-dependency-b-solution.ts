import { PostProvider } from './05-dependency-c-solution';

//! Model.
export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}

//////////////////////////////////////////////////////////*
//////////////////////////////////////////////////////////*

//! Applying Dependency Inversion Principle - DIP.
export class PostService {

    private posts: Post[] = [];

    //* Dependency Injection.
    constructor( private postProvider: PostProvider ) {}

    async getPosts() {

        this.posts = await this.postProvider.getPosts();

        return this.posts;
    }
}
