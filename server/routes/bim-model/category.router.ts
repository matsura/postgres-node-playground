import { Router, Request, Response } from "express";
import { EntityManager, getConnection, Repository } from 'typeorm';
import { BimModelCategory } from '../../models/bim-model-category.model';

export class BimModelCategoryRouter {

  private bimModelCategoryRepo: Repository<BimModelCategory> = getConnection().getRepository(BimModelCategory);
  private router: Router = Router();

  public getRouter(): Router {

    this.router.get("/bim-model/category", async (request: Request, response: Response) => {

      response.json(await this.bimModelCategoryRepo.find());
    });

    this.router.get("/bim-model/category/:id", async (request: Request, response: Response) => {

      response.json(await this.bimModelCategoryRepo.findOneById(request.params.id));
    });

    return this.router;
  }
}
