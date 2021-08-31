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
}  from "sequelize";
import {sequelize}  from '../config/sequelize'

interface RestaurantAttributes {
  id: number;
  name: string;
  thumbnail_url: string;
  description: string;
  address: string;
  email: string;
  phone: string;
  city: string;
  prov_state:string;
  postal: string;
  open_time: string;
  close_time: string;
  createdAt: Date;
}

// Some attributes are optional in `User.build` and `User.create` calls
interface RestaurantCreationAttributes extends Optional<RestaurantAttributes, "id"> {}

class RestaurantEntity extends Model<RestaurantAttributes, RestaurantCreationAttributes>  implements RestaurantAttributes {
  public id!: number; 
  public name!: string;
  public thumbnail_url!: string;
  public description!: string;
  public address!: string;
  public email!: string;
  public phone!: string;
  public city!: string;
  public prov_state!:string;
  public postal!: string;
  public open_time!: string;
  public close_time!: string;
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

RestaurantEntity.init(
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
    thumbnail_url: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    prov_state: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    postal: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    open_time: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    close_time: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },  createdAt: {
      type: new DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "restaurants",
    sequelize, // passing the `sequelize` instance is required
  }
);

export default RestaurantEntity

// Here we associate which actually populates out pre-declared `association` static and other methods.
//   User.hasMany(Order, {
//     sourceKey: "id",
//     foreignKey: "ownerId",
//     as: "projects", // this determines the name in `associations`!
//   });