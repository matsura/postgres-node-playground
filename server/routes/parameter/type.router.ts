import { Router, Request, Response } from "express";
import { getConnection, Repository } from 'typeorm';

import { ParameterType } from '../../models/parameter-type.model';

export class ParameterTypeRouter {

  private parameterTypeRepo: Repository<ParameterType> = getConnection().getRepository(ParameterType);
  private router: Router = Router();

  public getRouter(): Router {

    this.router.get("/parameter-type", async (request: Request, response: Response) => {

      response.json(await this.parameterTypeRepo.find());
    });

    this.router.get("/parameter-type/:id", async (request: Request, response: Response) => {

      response.json(await this.parameterTypeRepo.findOneById(request.params.id));
    });

    return this.router;
  }
}
