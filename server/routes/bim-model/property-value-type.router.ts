import { Router, Request, Response } from "express";
import { getConnection, Repository } from 'typeorm';

import { BimModelPropertyValueType } from '../../models/bim-model-property-value-type.model';

export class BimModelPropertyValueTypeRouter {

  private bimModelPropertyValueTypeRepo: Repository<BimModelPropertyValueType> = getConnection().getRepository(BimModelPropertyValueType);
  private router: Router = Router();

  public getRouter(): Router {

    this.router.get("/bim-model/property-value-type", async (request: Request, response: Response) => {

      response.json(await this.bimModelPropertyValueTypeRepo.find());
    });

    this.router.get("/bim-model/property-value-type/:id", async (request: Request, response: Response) => {

      response.json(await this.bimModelPropertyValueTypeRepo.findOneById(request.params.id));
    });

    return this.router;
  }
}
