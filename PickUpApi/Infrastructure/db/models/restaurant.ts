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
import { RatingEntity } from "./rating";

interface RestaurantAttributes {
  id: number;
  title: string;
  thumbnail_url: string;
  description: string;
  address:string;
  email: string;
  phone: bigint;
  city: string;
  prov_state: string;
  postal: string;
  open_time: string;
  close_time: string;
  lat: string;
  lon: string;
  createdAt: Date;
  updatedAt: Date | null;
}

interface RestaurantCreationAttributes extends Optional<RestaurantAttributes, "id"> {}

export class RestaurantEntity extends Model<RestaurantAttributes, RestaurantCreationAttributes>  implements RestaurantAttributes {
  public id!: number;
  public title!: string;
  public thumbnail_url!: string;
  public description!: string;
  public address!:string;
  public email!: string;
  public phone!: bigint;
  public city!: string;
  public prov_state!: string;
  public postal!: string;
  public open_time!: string;
  public close_time!: string;
  public lat!: string;
  public lon!: string;
  public createdAt!: Date;
  public updatedAt!: Date | null;

  public getOrders!: HasManyGetAssociationsMixin<OrderEntity>;
  public getRatings!: HasManyGetAssociationsMixin<RatingEntity>;
  public getComments!: HasManyGetAssociationsMixin<CommentEntity>;
  public readonly orders?: OrderEntity[]; 
  public readonly ratings?: RatingEntity[]; 
  public readonly comments?: CommentEntity[]; 

  public static associations: {
    orders: Association<RestaurantEntity, OrderEntity>;
    ratings: Association<RestaurantEntity, RatingEntity>;
    comments: Association<RestaurantEntity, CommentEntity>;
  };
}

RestaurantEntity.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    thumbnail_url: {
      type: new DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: new DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: new DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: new DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: new DataTypes.BIGINT,
      allowNull: false,
    },
    city: {
      type: new DataTypes.STRING,
      allowNull: false,
    },
    prov_state: {
      type: new DataTypes.STRING,
      allowNull: false,
    },
    postal: {
      type: new DataTypes.STRING,
      allowNull: false,
    },
    open_time: {
      type: new DataTypes.STRING,
      allowNull: false,
    },
    close_time: {
      type: new DataTypes.STRING,
      allowNull: false,
    },
    lat: {
      type: new DataTypes.DECIMAL,
      allowNull: false,
    },
    lon: {
      type: new DataTypes.DECIMAL,
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
    tableName: "restaurants",
    sequelize,
  }
);

  RestaurantEntity.hasMany(OrderEntity, {
    sourceKey: "id",
    foreignKey: "restaurantId",
    as: "orders",
  });
  RestaurantEntity.hasMany(RatingEntity, {
    sourceKey: "id",
    foreignKey: "restaurantId",
    as: "ratings",
  });
  RestaurantEntity.hasMany(CommentEntity, {
    sourceKey: "id",
    foreignKey: "restaurantId",
    as: "comments",
  });