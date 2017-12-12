import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

import { Author } from "./author.model";

@Entity()
export class Post {

  @PrimaryGeneratedColumn()
  public id: number;

  @Column("text")
  public title: string;

  @Column("text")
  public description: string;

  @ManyToOne((type) => Author, (author: Author) => author.posts)
  public author: Author;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;
}
