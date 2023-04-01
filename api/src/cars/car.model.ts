import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { CarCreationAttrs } from "types/car";

@Table({tableName: 'cars'})
export class CarModel extends Model<CarModel, CarCreationAttrs> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number

  @Column({type: DataType.INTEGER, allowNull: false})
  name_ID: number

  @Column({type: DataType.INTEGER, allowNull: false})
  year_start: number

  @Column({type: DataType.INTEGER, allowNull: true})
  year_end?: number

  @Column({type: DataType.STRING, allowNull: false})
  img_name: string

  @Column({type: DataType.BOOLEAN, allowNull: false})
  is_new: boolean
}