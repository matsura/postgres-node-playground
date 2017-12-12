import { Connection, Repository, SelectQueryBuilder } from "typeorm";

import { IRepository, MatchMode } from "./repository.model";
import { DatabaseService } from "../../../services/database/database.service";

export abstract class BaseRepository<DataType> implements IRepository<DataType> {

  protected model: any;

  constructor(model: any) {
    this.model = model;
  }

  public getAll(limit = 0, skip = 0, include: string[] = []): Promise<DataType[] | [DataType[], number]> {

    if (limit && skip) {
      return this.repository
        .find({
          skip,
          relations: include,
          take: skip,
        });
    }
    return this.repository
      .find({
        relations: include
      });
  }

  public getById(id: number): Promise<DataType> {
    return this.repository
      .findOneById(id);
  }

  public getByMultiple(search: { [key: string]: any; }, matchMode: MatchMode = MatchMode.And): Promise<DataType[]> {
    const columns: string[] = Object.keys(search);
    let queryBuilder: SelectQueryBuilder<any> = this.getQueryBuilder();
    columns.forEach((column: string, index: number) => {
      if (index === 0) {
        queryBuilder = queryBuilder.where(`base.${column} LIKE '%${search[column]}%'`);
      } else {
        if (matchMode === MatchMode.And) {
          queryBuilder = queryBuilder.andWhere(`base.${column} LIKE '%${search[column]}%'`);
        } else if (matchMode === MatchMode.Or) {
          queryBuilder = queryBuilder.orWhere(`base.${column} LIKE '%${search[column]}%'`);
        }
      }
    });
    return queryBuilder.getMany();
  }

  public create(item: DataType): Promise<DataType> {
    return this.repository.save(item);
  }

  public update(item: DataType, id: number): Promise<DataType> {
    return new Promise((resolve: (result: DataType) => void) => {
      this.repository.updateById(id, item)
        .then(() => resolve(item));
    });
  }

  public remove(identifier: number): Promise<number> {
    return this.model.removeById(identifier);
  }

  public count(): Promise<number> {
    return this.repository.count();
  }

  private get database(): Connection {
    return DatabaseService.getConnection();
  }

  private get repository(): Repository<any> {
    return this.database
      .getRepository(this.model);
  }

  private getQueryBuilder(alias: string = "base"): SelectQueryBuilder<any> {
    return this.database
      .getRepository(this.model)
      .createQueryBuilder(alias);
  }
}
