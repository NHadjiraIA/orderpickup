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

interface CommentAttributes {
  id: number;
  userId: string;
  restaurantId: string;
  Comment: string;
  createdAt: Date;
  updatedAt: Date | null;
}

interface CommentCreationAttributes extends Optional<CommentAttributes, "id"> {}

export class CommentEntity extends Model<CommentAttributes, CommentCreationAttributes>  implements CommentAttributes {
  public id!: number;
  public userId!: string;
  public restaurantId!: string;
  public Comment!: string;
  public createdAt!: Date;
  public updatedAt!: Date | null;
}

CommentEntity.init(
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
    Comment: {
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
    tableName: "comments",
    sequelize,
  }
);

  // CommentEntity.belongsTo(RestaurantEntity);
  // CommentEntity.belongsTo(UserEntity);