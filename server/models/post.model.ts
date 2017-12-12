import {
  Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";

import { Author } from "./author.model";

@Entity()
export class Post {

  @PrimaryGeneratedColumn()
  public id: number;

  @Column("text")
  public title: string;

  @Column({
    type: "text",
    nullable: true,
  })
  public description: string;

  @ManyToOne((type) => Author, (author: Author) => author.id)
  @JoinColumn({
    name: "authorId",
  })
  public author: Author;

  @Column("int")
  public authorId: number;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;
}
