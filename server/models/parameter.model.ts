import {
  Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ParameterType } from './parameter-type.model';

@Entity()
export class Parameter {

  @PrimaryGeneratedColumn()
  public id: number;

  @Column("text", {
    nullable: false,
    unique: true,
  })
  public name: string;

  @Column("text", {
    default: true,
  })
  public active: boolean;

  @ManyToOne((type) => ParameterType, (parameterType: ParameterType) => parameterType.id)
  public type: ParameterType;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;
}
