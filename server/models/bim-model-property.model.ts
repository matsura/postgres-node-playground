import {
  Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BimModelPropertyValueType } from './bim-model-property-value-type.model';
import { BimModelPropertyValueUnit } from './bim-model-property-value-unit.model';
import { BimModelPropertyType } from './bim-model-property-type.model';

@Entity()
export class BimModelProperty {

  @PrimaryGeneratedColumn()
  public id: number;

  @Column("text", {
    nullable: false,
  })
  public definition_group: string;

  @Column("text", {
    nullable: false,
  })
  public definition_identifier: string;

  @Column("text", {
    nullable: false,
  })
  public definition_name: string;

  @ManyToOne((propertyType) => BimModelPropertyType, (propertyType: BimModelPropertyType) => propertyType.id)
  @JoinColumn({
    name: "definition_type",
  })
  public propertyType: BimModelPropertyType;

  @Column("int", {
    nullable: false,
  })
  public definition_type: string;

  @ManyToOne((valueType) => BimModelPropertyValueType, (bimModelPropertyValueType: BimModelPropertyValueType) => bimModelPropertyValueType.id)
  @JoinColumn({
    name: "value_type",
  })
  public valueType: BimModelPropertyValueType;

  @Column("int", {
    nullable: false,
  })
  public value_type: string;

  @ManyToOne((valueUnit) => BimModelPropertyValueUnit, (valueUnit: BimModelPropertyValueUnit) => valueUnit.id)
  @JoinColumn({
    name: "value_type",
  })
  public valueUnit: BimModelPropertyValueUnit;

  @Column("int", {
    nullable: false,
  })
  public value_unit: string;

  @CreateDateColumn()
  public created_at: Date;

  @UpdateDateColumn()
  public updated_at: Date;
}
