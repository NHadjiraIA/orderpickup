import {
  Sequelize,
  Model,
  ModelDefined,
  DataTypes,
  HasManyGetAssociationsMixin,
  HasManyAddAssociationMixin,
  HasManyHasAssociationMixin,
  Association,
  HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin,
  Optional,
} from "sequelize";
import {sequelize}  from '../config/sequelize'
import { OrderDetailEntity } from "./orderdetail";
import { RestaurantEntity } from "./restaurant";
import { UserEntity } from "./user";

interface OrderAttributes {
  id: number;
  userId: number;
  restaurantId: number;
  done: boolean;
  createdAt: Date;
  updatedAt: Date | null;
}

interface OrderCreationAttributes extends Optional<OrderAttributes, "id"> {}

export class OrderEntity extends Model<OrderAttributes, OrderCreationAttributes>  implements OrderAttributes {
  public id!: number;
  public userId!: number;
  public restaurantId!: number;
  public done!: boolean;
  public createdAt!: Date;
  public updatedAt!: Date | null;

  public getOrderDetails!: HasManyGetAssociationsMixin<OrderDetailEntity>;
  
  public readonly orders?: OrderDetailEntity[]; 

  public static associations: {
    orders: Association<OrderEntity, OrderDetailEntity>;
  };
}

OrderEntity.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: new DataTypes.INTEGER,
      allowNull: false,
    },
    restaurantId: {
      type: new DataTypes.INTEGER,
      allowNull: false,
    },
    done: {
      type: DataTypes.BOOLEAN,
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
    tableName: "orders",
    sequelize,
  }
);

  // OrderEntity.hasOne(RestaurantEntity, { sourceKey: "id" });
  // OrderEntity.hasOne(UserEntity, { sourceKey: "id" });

  OrderEntity.hasMany(OrderDetailEntity, {
    sourceKey: "id",
    foreignKey: "orderId",
    as: "orderdetails",
  });