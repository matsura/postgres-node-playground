import Bluebird = require("bluebird");

export enum MatchMode {
  All = "AND",
  Any = "OR",
}

export interface IRepository<DataType> {
  getAll(): Bluebird<DataType[]>;
  getById(id: number): Bluebird<DataType>;
  getByMultiple(search: { [key: string]: any }, matchMode: MatchMode): Bluebird<DataType[]>;
  create(item: DataType): Bluebird<DataType>;
  update(item: DataType, id: number): Bluebird<DataType>;
  remove(identifier: number): Bluebird<number>;
}
