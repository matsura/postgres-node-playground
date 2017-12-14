import {
  Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BimModelProperty } from './bim-model-property.model';

@Entity()
export class BimModelPropertyValueUnit {

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

  @OneToMany((property) => BimModelProperty, (property: BimModelProperty) => property.valueUnit)
  public properties: BimModelProperty[];

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;
}
