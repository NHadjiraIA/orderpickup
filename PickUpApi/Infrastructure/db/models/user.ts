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

interface UserAttributes {
  id: number;
  name: string;
  email: string;
  role: boolean;
  createdAt: Date;
}

// Some attributes are optional in `User.build` and `User.create` calls
interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

class UserEntity extends Model<UserAttributes, UserCreationAttributes>  implements UserAttributes {
  public id!: number; 
  public name!: string;
  public email!: string;
  public role!: boolean;
  public createdAt!: Date;
  public updatedAt!: Date | null;

  // Since TS cannot determine model association at compile time
  // we have to declare them here purely virtually
  // these will not exist until `Model.init` was called.
//  public getOrders!: HasManyGetAssociationsMixin<Project>; // Note the null assertions!

  // You can also pre-declare possible inclusions, these will only be populated if you
  // actively include a relation.
 // public readonly orders?: Order[]; // Note this is optional since it's only populated when explicitly requested in code

  // public static associations: {
  //   projects: Association<User, Order>;
  // };
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
    sequelize, // passing the `sequelize` instance is required
  }
);

export default UserEntity

// Here we associate which actually populates out pre-declared `association` static and other methods.
//   User.hasMany(Order, {
//     sourceKey: "id",
//     foreignKey: "ownerId",
//     as: "projects", // this determines the name in `associations`!
//   });