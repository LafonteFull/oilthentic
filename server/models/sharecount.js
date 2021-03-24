'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShareCount extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ShareCount.init({
    Twitter: DataTypes.INTEGER,
    Facebook: DataTypes.INTEGER,
    WhatsApp: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ShareCount',
  });
  return ShareCount;
};