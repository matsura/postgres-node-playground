import { Router, Request, Response } from "express";
import { getConnection, Repository } from 'typeorm';

import { BimModelObjectType } from '../../models/bim-model-object-type.model';

export class BimModelObjectTypeRouter {

  private bimModelObjectTypeRepo: Repository<BimModelObjectType> = getConnection().getRepository(BimModelObjectType);
  private router: Router = Router();

  public getRouter(): Router {

    this.router.get("/bim-model/object-type", async (request: Request, response: Response) => {

      response.json(await this.bimModelObjectTypeRepo.find());
    });

    this.router.get("/bim-model/object-type/:id", async (request: Request, response: Response) => {

      response.json(await this.bimModelObjectTypeRepo.findOneById(request.params.id));
    });

    return this.router;
  }
}
