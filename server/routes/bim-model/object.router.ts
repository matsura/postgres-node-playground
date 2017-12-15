import { Router, Request, Response } from "express";
import { getConnection, Repository } from 'typeorm';

import { BimModelObject } from '../../models/bim-model-object.model';

export class BimModelObjectRouter {

  private bimModelObjectRepo: Repository<BimModelObject> = getConnection().getRepository(BimModelObject);
  private router: Router = Router();

  public getRouter(): Router {

    this.router.get("/bim-model/object", async (request: Request, response: Response) => {

      response.json(await this.bimModelObjectRepo.find());
    });

    this.router.get("/bim-model/object/:id", async (request: Request, response: Response) => {

      response.json(await this.bimModelObjectRepo.findOneById(request.params.id));
    });

    return this.router;
  }
}
