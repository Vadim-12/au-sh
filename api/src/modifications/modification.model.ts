import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { ModificationCreationAttrs } from "types/modification";

@Table({tableName: 'modifications'})
export class ModificationModel extends Model<ModificationModel, ModificationCreationAttrs> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number

  @Column({type: DataType.INTEGER, allowNull: false})
  car_ID: number

  @Column({type: DataType.INTEGER, allowNull: false})
  engine_ID: number

  @Column({type: DataType.DOUBLE, allowNull: false})
  price_min: number

  @Column({type: DataType.DOUBLE, allowNull: false})
  price_max: number

  @Column({type: DataType.DOUBLE, allowNull: false})
  capacity: number

  @Column({type: DataType.INTEGER, allowNull: false})
  power: number

  @Column({type: DataType.INTEGER, allowNull: false})
  WD_ID: number
}