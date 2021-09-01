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
  import { RestaurantEntity } from "./restaurant";
  import { UserEntity } from "./user";
  
  interface RatingAttributes {
    id: number;
    userId: string;
    restaurantId: string;
    rating: number;
    createdAt: Date;
    updatedAt: Date | null;
  }
  
  interface RatingCreationAttributes extends Optional<RatingAttributes, "id"> {}
  
  export class RatingEntity extends Model<RatingAttributes, RatingCreationAttributes>  implements RatingAttributes {
    public id!: number;
    public userId!: string;
    public restaurantId!: string;
    public rating!: number;
    public createdAt!: Date;
    public updatedAt!: Date | null;
  }
  
  RatingEntity.init(
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
      rating: {
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
      tableName: "ratings",
      sequelize,
    }
  );
  
    // RatingEntity.hasOne(RestaurantEntity, { sourceKey: "id" });
    // RatingEntity.hasOne(UserEntity, { sourceKey: "id" });