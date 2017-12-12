import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Post } from "./post.model";

@Entity()
export class Author {

  @PrimaryGeneratedColumn()
  public id: number;

  @Column("text")
  public name: string;

  @Column()
  public age: number;

  @Column("text")
  public description: string;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;

  @OneToMany((type) => Post, (post: Post) => post.author)
  public posts: Post[];
}
