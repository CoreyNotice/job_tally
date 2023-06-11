'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phone_Video_Screens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Phone_Video_Screens.init({
    Screens: DataTypes.INTEGER,
    Date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Phone_Video_Screens',
  });
  return Phone_Video_Screens;
};