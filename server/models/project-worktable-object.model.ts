import {
  Column, CreateDateColumn, Entity, PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class ProjectWorktableObject {

  @PrimaryGeneratedColumn()
  public id: number;

  @Column("uuid", {
    nullable: false,
    unique: true,
  })
  public guid: string;

  @Column("int")
  public type: number;

  @Column("int")
  public category: number;

  @Column("jsonb")
  public data: string;

  @CreateDateColumn()
  public created_at: Date;

  @UpdateDateColumn()
  public updated_at: Date;
}
