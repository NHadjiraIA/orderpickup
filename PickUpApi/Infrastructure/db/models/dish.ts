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
import { CommentEntity } from "./comment";
import { OrderEntity } from "./order";
import { OrderDetailEntity } from "./orderdetail";
import { RatingEntity } from "./rating";

interface DishAttributes {
  id: number;
  restaurantId: number;
  name: string;
  img_url: string;
  price: number;
  calories:number;
  description: string;
  size: string ;
  vegan: boolean;
  gluten: boolean;
  halal: boolean;
  dairy: boolean;
  nuts: boolean;
  available: boolean;
  marijuana: boolean;
  type: string;
  createdAt: Date;
  updatedAt: Date | null;
}

interface DishCreationAttributes extends Optional<DishAttributes, "id"> {}

export class DishEntity extends Model<DishAttributes, DishCreationAttributes>  implements DishAttributes {
  public id!: number;
  public restaurantId!: number;
  public name!: string;
  public img_url!: string;
  public price!: number;
  public calories!:number;
  public description!: string;
  public size!: string ;
  public vegan!: boolean;
  public gluten!: boolean;
  public halal!: boolean;
  public dairy!: boolean;
  public nuts!: boolean;
  public available!: boolean;
  public marijuana!: boolean;
  public type!: string;
  public createdAt!: Date;
  public updatedAt!: Date | null;

  public getOrderDetails!: HasManyGetAssociationsMixin<OrderDetailEntity>;
  
  public readonly orders?: OrderDetailEntity[]; 

  public static associations: {
    orders: Association<DishEntity, OrderDetailEntity>;
  };
}

DishEntity.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    restaurantId: {
      type: new DataTypes.INTEGER,
      allowNull: false,
    },
    img_url: {
      type: new DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: new DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: new DataTypes.DECIMAL,
      allowNull: false,
    },
    calories: {
      type: new DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: new DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: new DataTypes.STRING,
      allowNull: false,
    },
    vegan: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    gluten: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    halal: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    dairy: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    nuts: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    available: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    marijuana: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    type: {
      type: new DataTypes.STRING,
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
    tableName: "dishes",
    sequelize,
  }
);

  DishEntity.hasMany(OrderDetailEntity, {
    sourceKey: "id",
    foreignKey: "dishId",
    as: "orderdetails",
  });
