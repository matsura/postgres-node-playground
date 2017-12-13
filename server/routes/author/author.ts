import { Router, Request, Response } from "express";
import { EntityManager, getConnection, getManager, Repository } from 'typeorm';
import { Author } from '../../models/author.model';
import { Post } from '../../models/post.model';

export class AuthorRouter {

  private authorRepository: Repository<Author> = getConnection().getRepository(Author);
  private postRepository: Repository<Post> = getConnection().getRepository(Post);
  private entityManager: EntityManager = getManager();
  private router: Router = Router();

  public getRouter(): Router {

    /**
     * @swagger
     * /api/author:
     *   get:
     *     tags:
     *      - Author
     *     description:
     *      List of all authors registered in system.
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Authors
     *       400:
     *         description: Invalid request
     *       403:
     *         description: Forbidden
     */
    this.router.get("/author", async (request: Request, response: Response) => {

      const authors = await this.authorRepository.find({
        relations: ["posts"],
      });
      response.json(authors);
    });

    this.router.get("/authorbyname/:name", async (request: Request, response: Response) => {

      const name: string = request.params.name;
      const results = await this.entityManager
        .query("SELECT * FROM author WHERE LOWER(name) LIKE $1", [`%${name}%`]);
      response.json(results);
    });

    /**
     * @swagger
     * /api/author:
     *   post:
     *     tags:
     *      - Author
     *     description:
     *      Create new author.
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Author
     *       400:
     *         description: Invalid request
     *       403:
     *         description: Forbidden
     */
    this.router.post("/author", async (request: Request, response: Response) => {

      const author = await this.authorRepository.save(request.body);

      response.status(200).json(author);
    });

    /**
     * @swagger
     * /api/author/{id}:
     *   put:
     *     tags:
     *      - Author
     *     description:
     *      Update author.
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Author
     *       400:
     *         description: Invalid request
     *       403:
     *         description: Forbidden
     */
    this.router.put("/author/:id", async (request: Request, response: Response) => {

      const author = await this.authorRepository.save(request.body);

      response.status(200).json(author);
    });

    /**
     * @swagger
     * /api/author/{id}:
     *   put:
     *     tags:
     *      - Author
     *     description:
     *      Update author.
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Author
     *       400:
     *         description: Invalid request
     *       403:
     *         description: Forbidden
     */
    this.router.delete("/author/:id", async (request: Request, response: Response) => {

      const authorPosts: Post[] = await this.postRepository.find({
          where: {
            authorId: request.params.id,
          },
        });

      // delete all posts for this author
      if (authorPosts.length) {
        const deletedCount = await this.postRepository.remove(authorPosts);
        response.status(200).json(this.authorRepository.removeById(request.params.id));
        return;
      }

      response.status(200).json(this.authorRepository.removeById(request.params.id));
    });

    return this.router;
  }
}
