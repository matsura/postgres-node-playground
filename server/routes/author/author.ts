import { Router, Request, Response } from "express";
import { AuthorRepository } from "../../models/repositories/author.repository";
import { Post } from "../../models/post.model";

export class AuthorRouter {

  private router: Router = Router();
  private authorRepository: AuthorRepository = new AuthorRepository();

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

      const authors = await this.authorRepository.getAll([Post]);
      response.json(authors);
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

      const author = await this.authorRepository.create(request.body);

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

      const author = await this.authorRepository.update(request.body, request.params.id);

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

      const author = await this.authorRepository.remove(request.params.id);

      response.status(200).json(author);
    });

    return this.router;
  }
}
