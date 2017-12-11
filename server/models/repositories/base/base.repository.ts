import Bluebird = require("bluebird");
import { Model } from "sequelize-typescript";

import { IRepository, MatchMode } from "./repository.model";

export abstract class BaseRepository<DataType extends Model<DataType>> implements IRepository<DataType> {

  protected model: any;

  constructor(model: any) {
    this.model = model;
  }

  public getAll(include: any[] = []): Bluebird<DataType[]> {
    return this.model.findAll({
      include,
    });
  }

  public getById(id: number): Bluebird<DataType> {
    return this.model.findById(id);
  }

  public getByMultiple(search: { [key: string]: any; }, matchMode?: MatchMode): Bluebird<DataType[]> {
    return this.model.findOne({ where: search });
  }

  public create(item: DataType): Bluebird<DataType> {
    return this.model.create(item);
  }

  public update(item: DataType, id: number): Bluebird<DataType> {
    return this.model.update(item, {
      where: {
        id,
      },
    });
  }

  public remove(identifier: number): Bluebird<number> {
    return this.model.destroy({
      where: {
        id: identifier,
      },
    });
  }
}
