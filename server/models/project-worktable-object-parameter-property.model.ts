import {
  Column, CreateDateColumn, Entity, PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class ProjectWorktableObjectParameterProperty {

  @PrimaryGeneratedColumn()
  public id: number;

  @Column("text", {
    nullable: false,
  })
  public instance_guid: string;

  @Column("int")
  public parameter_id: number;

  @Column("text", {
    nullable: false,
  })
  public bim_model_be_guid: string;

  @Column("int")
  public property_id: number;

  @Column("text", {
    nullable: true,
  })
  public value: string;

  @CreateDateColumn()
  public created_at: Date;

  @UpdateDateColumn()
  public updated_at: Date;
}
