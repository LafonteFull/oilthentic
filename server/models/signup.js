'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Signup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Signup.belongsTo(models.PreSignup)
    }
  };
  Signup.init({
    role: {
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: 'Role is required'
        }
      },
      allowNull: false
    },
    location: DataTypes.STRING,
    memberId: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Member ID is required'
        }
      },
      unique: true
    },
    preSignupId: {
      type: DataTypes.INTEGER,
      references: {
        model: { tableName: 'PreSignups'},
        key: 'id'
      },
      allowNull: false
      },
      unique: true
    },
  {
    sequelize,
    modelName: 'Signup',
  });
  return Signup;
};