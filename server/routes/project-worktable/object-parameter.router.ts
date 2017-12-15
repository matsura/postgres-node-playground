import { Router, Request, Response } from "express";
import { getConnection, Repository } from 'typeorm';

import { ProjectWorktableObjectParameterProperty } from '../../models/project-worktable-object-parameter-property.model';

export class ProjectWorkTableObjectParameterPropertyRouter {

  private projectWorkTableObjectParameterPropertyRepo: Repository<ProjectWorktableObjectParameterProperty> = getConnection().getRepository(ProjectWorktableObjectParameterProperty);
  private router: Router = Router();

  public getRouter(): Router {

    this.router.get("/project-worktable-object-parameter-property", async (request: Request, response: Response) => {

      response.json(await this.projectWorkTableObjectParameterPropertyRepo.find());
    });

    this.router.get("/project-worktable-object-parameter-property/:id", async (request: Request, response: Response) => {

      response.json(await this.projectWorkTableObjectParameterPropertyRepo.findOneById(request.params.id));
    });

    return this.router;
  }
}
