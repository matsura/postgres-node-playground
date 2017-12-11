import { BelongsTo, Column, CreatedAt, ForeignKey, Model, Table, UpdatedAt } from "sequelize-typescript";

import { Author } from "./author.model";

@Table({
  tableName: "post"
})
export class Post extends Model<Post> {

  @Column({
    allowNull: false,
  })
  public title: string;

  @Column
  public description: string;

  @ForeignKey(() => Author)
  @Column
  public authorId: number;

  @BelongsTo(() => Author)
  public author: Author;

  @CreatedAt
  public createdAt: Date;

  @UpdatedAt
  public updatedAt: Date;
}
