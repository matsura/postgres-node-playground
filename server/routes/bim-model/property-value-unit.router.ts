import { Router, Request, Response } from "express";
import { getConnection, Repository } from 'typeorm';

import { BimModelPropertyValueUnit } from '../../models/bim-model-property-value-unit.model';

export class BimModelPropertyValueUnitRouter {

  private bimModelPropertyValueUnitRepo: Repository<BimModelPropertyValueUnit> = getConnection().getRepository(BimModelPropertyValueUnit);
  private router: Router = Router();

  public getRouter(): Router {

    this.router.get("/bim-model/property-value-unit", async (request: Request, response: Response) => {

      response.json(await this.bimModelPropertyValueUnitRepo.find());
    });

    this.router.get("/bim-model/property-value-unit/:id", async (request: Request, response: Response) => {

      response.json(await this.bimModelPropertyValueUnitRepo.findOneById(request.params.id));
    });

    return this.router;
  }
}
