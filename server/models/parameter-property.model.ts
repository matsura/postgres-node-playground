import {
  Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";

import { Parameter } from './parameter.model';

@Entity()
export class ParameterProperty {

  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    type: "text",
  })
  public definition_name: string;

  @Column({
    type: "text"
  })
  public definition_group: string;

  @Column({
    type: "int"
  })
  public definition_type: string;

  @Column({
    type: "text",
  })
  public definition_identifier: string;

  @Column({
    type: "int",
  })
  public value_type: number;

  @Column({
    type: "int",
  })
  public value_unit: number;

  @Column({
    default: true,
  })
  public active: boolean;

  @Column({
    type: "int",
  })
  public related_source_object_type: number;

  @ManyToOne((type) => Parameter, (parameter: Parameter) => parameter.id)
  @JoinColumn({
    name: "parameter_id",
  })
  public parameter: Parameter;

  @Column({
    type: "int",
  })
  public parameter_id: number;

  @CreateDateColumn()
  public created_at: Date;

  @UpdateDateColumn()
  public updated_at: Date;
}
