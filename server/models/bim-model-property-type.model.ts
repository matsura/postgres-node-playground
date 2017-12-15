import {
  Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BimModelProperty } from './bim-model-property.model';

@Entity()
export class BimModelPropertyType {

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

  @OneToMany((propertyType) => BimModelProperty, (propertyType: BimModelProperty) => propertyType.propertyType)
  public properties: BimModelProperty[];

  @CreateDateColumn()
  public created_at: Date;

  @UpdateDateColumn()
  public updated_at: Date;
}
