import { Router, Request, Response } from "express";
import { getConnection, Repository } from 'typeorm';

import { BimModelProperty } from '../../models/bim-model-property.model';

export class BimModelPropertyRouter {

  private bimModelPropertyRepo: Repository<BimModelProperty> = getConnection().getRepository(BimModelProperty);
  private router: Router = Router();

  public getRouter(): Router {

    this.router.get("/bim-model/property", async (request: Request, response: Response) => {

      response.json(await this.bimModelPropertyRepo.find());
    });

    this.router.get("/bim-model/property/:id", async (request: Request, response: Response) => {

      response.json(await this.bimModelPropertyRepo.findOneById(request.params.id));
    });

    return this.router;
  }
}
