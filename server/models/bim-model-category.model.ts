import {
  Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BimModelObject } from './bim-model-object.model';

@Entity()
export class BimModelCategory {

  @PrimaryGeneratedColumn()
  public id: number;

  @Column("text", {
    nullable: false
  })
  public enum: string;

  @Column({
    nullable: true,
    type: "text",
  })
  public description: string;

  @OneToMany((type) => BimModelObject, (bimModelObject: BimModelObject) => bimModelObject.type)
  public bimModelObjects: BimModelObject[];

  @CreateDateColumn()
  public created_at: Date;

  @UpdateDateColumn()
  public updated_at: Date;
}
