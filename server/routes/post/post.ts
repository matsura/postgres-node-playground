import { Router, Request, Response } from "express";
import { PostRepository } from "../../models/repositories/post.repository";
import { Author } from '../../models/author.model';

export class PostRouter {

    private postRepository: PostRepository = new PostRepository();

    public getRouter(): Router {
        return Router()
            .get("/post", async (request: Request, response: Response) => {

                const posts = await this.postRepository.getAll([Author]);

                response.json(posts);
            })
            .post("/post", async (request: Request, response: Response) => {

                try {
                  const post = await this.postRepository.create(request.body);
                  response.json(post);
                } catch (e) {
                  response.json(e);
                }
            });
    }
}
