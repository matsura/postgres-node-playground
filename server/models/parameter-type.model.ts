import {
  Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Parameter } from './parameter.model';

@Entity()
export class ParameterType {

  @PrimaryGeneratedColumn()
  public id: number;

  @Column("text", {
    nullable: false,
  })
  public enum: string;

  @Column({
    nullable: true,
    type: "text",
  })
  public description: string;

  @OneToMany((type) => Parameter, (parameter: Parameter) => parameter.type)
  public parameters: Parameter[];

  @CreateDateColumn()
  public created_at: Date;

  @UpdateDateColumn()
  public updated_at: Date;
}
