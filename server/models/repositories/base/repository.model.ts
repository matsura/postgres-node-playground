export enum MatchMode {
  And = "AND",
  Or = "OR",
}

export interface IRepository<DataType> {
  getAll(): Promise<DataType[] | [DataType[], number]>;
  getById(id: number): Promise<DataType>;
  getByMultiple(search: { [key: string]: any }, matchMode: MatchMode): Promise<DataType[]>;
  create(item: DataType): Promise<DataType>;
  update(item: DataType, id: number): Promise<DataType>;
  remove(identifier: number): Promise<number>;
  count(): Promise<number>;
}
