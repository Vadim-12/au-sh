import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";

interface AdminCreationAttrs {
  login: string;
  password: string;
}

@Table({tableName: 'admin'})
export class AdminModel extends Model<AdminModel, AdminCreationAttrs> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, unique: true, allowNull: false})
  login: string;

  @Column({type: DataType.STRING, allowNull: false})
  password: string;
}