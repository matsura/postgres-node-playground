import { Column, CreatedAt, HasMany, Model, Sequelize, Table, UpdatedAt } from "sequelize-typescript";

import { Post } from "./post.model";

@Table({
  tableName: "author"
})
export class Author extends Model<Author> {

  @Column({
    allowNull: false,
  })
  public name: string;

  @Column({
    allowNull: false,
  })
  public age: number;

  @Column
  public description: string;

  @CreatedAt
  public createdAt: Date;

  @UpdatedAt
  public updatedAt: Date;

  @HasMany(() => Post)
  public posts: Post[];
}
