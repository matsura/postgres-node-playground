import { Router, Request, Response } from "express";
import { getConnection, Repository } from 'typeorm';

import { BimModelPropertyType } from '../../models/bim-model-property-type.model';

export class BimModelPropertyTypeRouter {

  private bimModelPropertyTypeRepo: Repository<BimModelPropertyType> = getConnection().getRepository(BimModelPropertyType);
  private router: Router = Router();

  public getRouter(): Router {

    this.router.get("/bim-model/property-type", async (request: Request, response: Response) => {

      response.json(await this.bimModelPropertyTypeRepo.find());
    });

    this.router.get("/bim-model/property-type/:id", async (request: Request, response: Response) => {

      response.json(await this.bimModelPropertyTypeRepo.findOneById(request.params.id));
    });

    return this.router;
  }
}
