'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PreSignup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PreSignup.hasOne(models.Signup)
    }
  };
  PreSignup.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Name must not empty'
        },
        notNull: {
          msg: 'Name is required'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          msg: 'Email invalid format'
        },
        notNull: {
          msg: 'Email is required'
        },
        notEmpty: {
          msg: 'Email must not empty'
        }
      },
      unique: true
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Phone Number must not empty'
        },
        notNull: {
          msg: 'Phone Number is required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'PreSignup',
  });
  return PreSignup;
};