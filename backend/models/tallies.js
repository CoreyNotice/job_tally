'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tallies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tallies.init({
    Job_Applied: DataTypes.INTEGER,
    Phone_Video_Screens: DataTypes.INTEGER,
    Job_Interviews: DataTypes.INTEGER,
    Job_Offers: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tallies',
  });
  return Tallies;
};