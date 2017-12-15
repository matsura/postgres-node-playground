import { Router, Request, Response } from "express";
import { getConnection, Repository } from 'typeorm';

import { ParameterProperty } from '../../models/parameter-property.model';

export class ParameterPropertyRouter {

  private parameterPropertyRepo: Repository<ParameterProperty> = getConnection().getRepository(ParameterProperty);
  private router: Router = Router();

  public getRouter(): Router {

    this.router.get("/parameter-property", async (request: Request, response: Response) => {

      response.json(await this.parameterPropertyRepo.find());
    });

    this.router.get("/parameter-property/:id", async (request: Request, response: Response) => {

      response.json(await this.parameterPropertyRepo.findOneById(request.params.id));
    });

    return this.router;
  }
}
