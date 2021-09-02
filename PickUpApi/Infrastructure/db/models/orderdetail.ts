import {
  Sequelize,
  Model,
  ModelDefined,
  DataTypes,
  HasManyGetAssociationsMixin,
  HasManyAddAssociationMixin,
  HasManyHasAssociationMixin,
  Association,
  HasOneGetAssociationMixin,
  HasManyCreateAssociationMixin,
  Optional,
} from "sequelize";
import {sequelize}  from '../config/sequelize'
import { DishEntity } from "./dish";
import { OrderEntity } from "./order";

interface OrderDetailAttributes {
  id: number;
  dishId: number;
  orderId: number;
  quantity: number;
  createdAt: Date;
  updatedAt: Date | null;
}

interface OrderDetailCreationAttributes extends Optional<OrderDetailAttributes, "id"> {}

export class OrderDetailEntity extends Model<OrderDetailAttributes, OrderDetailCreationAttributes>  implements OrderDetailAttributes {
  public id!: number;
  public dishId!: number;
  public orderId!: number;
  public quantity!: number;
  public createdAt!: Date;
  public updatedAt!: Date | null;

  public getDish!: HasOneGetAssociationMixin<DishEntity>;
  
  public readonly dish?: DishEntity;

  public static associations: {
    dish: Association<OrderDetailEntity, DishEntity>;
  };
}

OrderDetailEntity.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    dishId: {
      type: new DataTypes.INTEGER,
      allowNull: false,
    },
    orderId: {
      type: new DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: new DataTypes.INTEGER,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    createdAt: {
      type: new DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "orderdetails",
    sequelize,
  }
);

  OrderDetailEntity.hasOne(DishEntity,{
    sourceKey:'dishId',
    foreignKey: 'id',
    as: 'dish'
  });