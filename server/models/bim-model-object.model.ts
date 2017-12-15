import {
  Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BimModelObjectType } from './bim-model-object-type.model';
import { BimModelCategory } from './bim-model-category.model';

@Entity()
export class BimModelObject {

  @PrimaryGeneratedColumn()
  public id: number;

  @Column("uuid", {
    nullable: false,
    unique: true,
  })
  public guid: string;

  @ManyToOne((type) => BimModelObjectType, (bimModelObject: BimModelObjectType) => bimModelObject.id)
  @JoinColumn({
    name: "type",
  })
  public type: BimModelObjectType;

  @ManyToOne((category) => BimModelCategory, (bimModelCategory: BimModelCategory) => bimModelCategory.id)
  @JoinColumn({
    name: "category",
  })
  public category: BimModelCategory;

  @CreateDateColumn()
  public created_at: Date;

  @UpdateDateColumn()
  public updated_at: Date;
}
