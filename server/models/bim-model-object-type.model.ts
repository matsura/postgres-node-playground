import {
  Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BimModelObject } from './bim-model-object.model';

@Entity()
export class BimModelObjectType {

  @PrimaryGeneratedColumn()
  public id: number;

  @Column("text", {
    nullable: false,
  })
  public enum: string;

  @Column("text", {
    nullable: false,
  })
  public value: string;

  @Column("text", {
    nullable: true,
  })
  public description: string;

  @OneToMany((type) => BimModelObject, (bimModelObject: BimModelObject) => bimModelObject.type)
  public bimModelObjects: BimModelObject[];

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;
}
