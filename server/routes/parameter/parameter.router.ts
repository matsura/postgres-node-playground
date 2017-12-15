import { Router, Request, Response } from "express";
import { getConnection, Repository } from 'typeorm';

import { Parameter } from '../../models/parameter.model';
const Cursor = require('pg-cursor');
import { Client, Pool } from 'pg';
import { DatabaseService } from '../../services/database/database.service';

export class ParameterRouter {

  private parameterRepo: Repository<Parameter> = getConnection().getRepository(Parameter);
  private router: Router = Router();

  public getRouter(): Router {

    this.router.get("/parameter", async (request: Request, response: Response) => {
      response.json(await getConnection().manager.query("SELECT ocean.project_worktable_object_properties_to_json('516b77f4-7de4-4a87-8a46-64fc3ddd1d87')"));
    });

    this.router.get("/parameter/:id/property", async (request: Request, response: Response) => {

      const pool: Pool = new Pool(DatabaseService.connectionOptions());

      const client: Client = await pool.connect();
      const text = 'SELECT * FROM ocean.v_project_worktable_analytics';

      const cursor: any = client.query(new Cursor(text, []));

      const results = [];
      cursor.read();
      cursor.on('row', (row, result) => results.push(row));
      cursor.on('end', (result) => {

        console.log('Closing cursor...');
        cursor.close(() => {
          console.log('Cursor closed...');
          console.log('Releasing client...');
          client.release();
          console.log('Read ' + results.length + ' rows');
          response.json(results);
        });
      });
    });

    this.router.get("/parameter/:id", async (request: Request, response: Response) => {

      response.json(await this.parameterRepo.findOneById(request.params.id));
    });

    return this.router;
  }
}
