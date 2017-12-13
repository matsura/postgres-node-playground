import { Router, Request, Response } from "express";
import { Post } from '../../models/post.model';
import { getConnection, Repository } from 'typeorm';

export class PostRouter {

  private postRepository: Repository<Post> = getConnection().getRepository(Post);

  public getRouter(): Router {
      return Router()
          .get("/post", async (request: Request, response: Response) => {

              response.json(await this.postRepository.find());
          })
          .get("/post/:id", async (request: Request, response: Response) => {

            response.json(await this.postRepository.findOneById(request.params.id));
          })
          .post("/post", async (request: Request, response: Response) => {

              try {
                const post = await this.postRepository.save(request.body);
                response.json(post);
              } catch (e) {
                response.json(e);
              }
          });
  }
}
