'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  cart.init({
    items: DataTypes.JSON,
    discount: DataTypes.FLOAT,
    tax: DataTypes.FLOAT,
    total: DataTypes.FLOAT,
    subTotal: DataTypes.FLOAT
  },  {
    sequelize,
    modelName: 'cart',
    tableName: 'carts',
    freezeTableName: true,
  });
  return cart;
};