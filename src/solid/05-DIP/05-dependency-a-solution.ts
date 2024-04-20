import { PostService } from './05-dependency-b-solution';
import { JsonDataBaseService } from './05-dependency-c-solution';


// Main
(async () => {


    const postService = new PostService();

    const posts = await postService.getPosts();

    console.log({ posts });

})();




