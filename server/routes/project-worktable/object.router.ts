import { Router, Request, Response } from "express";
import { getConnection, Repository } from 'typeorm';

import { ProjectWorktableObject } from '../../models/project-worktable-object.model';

export class ProjectWorkTableObjectRouter {

  private projectWorkTableObjectRepo: Repository<ProjectWorktableObject> = getConnection().getRepository(ProjectWorktableObject);
  private router: Router = Router();

  public getRouter(): Router {

    this.router.get("/project-worktable-object", async (request: Request, response: Response) => {

      response.json(await this.projectWorkTableObjectRepo.find());
    });

    this.router.get("/project-worktable-object/:id", async (request: Request, response: Response) => {

      response.json(await this.projectWorkTableObjectRepo.findOneById(request.params.id));
    });

    return this.router;
  }
}
