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

interface DishCategoryAttributes {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date | null;
}

interface DishCategoryCreationAttributes extends Optional<DishCategoryAttributes, "id"> {}

export class DishCategoryEntity extends Model<DishCategoryAttributes, DishCategoryCreationAttributes>  implements DishCategoryAttributes {
  public id!: number;
  public name!: string;
  public createdAt!: Date;
  public updatedAt!: Date | null;
}

DishCategoryEntity.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
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
    tableName: "dishcategories",
    sequelize,
  }
);