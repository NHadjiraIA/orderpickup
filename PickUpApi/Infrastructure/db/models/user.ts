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
  Order,
} from "sequelize";
import {sequelize}  from '../config/sequelize'
import { OrderEntity } from "./order";
import { RatingEntity } from "./rating";

interface UserAttributes {
  id: number;
  name: string;
  email: string;
  password: string;
  phone:number;
  role: boolean;
  createdAt: Date;
}

// Some attributes are optional in `User.build` and `User.create` calls
interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

export class UserEntity extends Model<UserAttributes, UserCreationAttributes>  implements UserAttributes {
  public id!: number; 
  public name!: string;
  public phone!: number;
  public password!: string;
  public email!: string;
  public role!: boolean;
  public createdAt!: Date;
  public updatedAt!: Date | null;

  // Since TS cannot determine model association at compile time
  // we have to declare them here purely virtually
  // these will not exist until `Model.init` was called.
  public getOrders!: HasManyGetAssociationsMixin<OrderEntity>; // Note the null assertions!
  public getRatings!: HasManyGetAssociationsMixin<OrderEntity>; 
  // You can also pre-declare possible inclusions, these will only be populated if you
  // actively include a relation.
  public readonly ratings?: OrderEntity[]; 

  public static associations: {
    orders: Association<UserEntity, OrderEntity>;
    ratings: Association<UserEntity, RatingEntity>;
  };
}

UserEntity.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    role: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    createdAt: {
      type: new DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "users",
    sequelize,
  }
);

  UserEntity.hasMany(OrderEntity, {
    sourceKey: "id",
    foreignKey: "userId",
    as: "orders",
  });
  UserEntity.hasMany(RatingEntity, {
    sourceKey: "id",
    foreignKey: "userId",
    as: "ratings",
  });