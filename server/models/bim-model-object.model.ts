import {
  Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn,
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
  public type: BimModelObjectType;

  @ManyToOne((category) => BimModelCategory, (bimModelCategory: BimModelCategory) => bimModelCategory.id)
  public category: BimModelCategory;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;
}
