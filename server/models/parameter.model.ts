import {
  Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn,
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
  @JoinColumn({
    name: "type",
  })
  public type: ParameterType;

  @CreateDateColumn()
  public created_at: Date;

  @UpdateDateColumn()
  public updated_at: Date;
}
