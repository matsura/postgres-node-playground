import {
  Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BimModelObject } from './bim-model-object.model';
import { BimModelProperty } from './bim-model-property.model';

@Entity()
export class BimModelPropertyValueType {

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

  @OneToMany((property) => BimModelProperty, (property: BimModelProperty) => property.valueType)
  public properties: BimModelProperty[];

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;
}
