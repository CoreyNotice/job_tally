'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Job_Offers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Job_Offers.init({
    Offers: DataTypes.INTEGER,
    Date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Job_Offers',
  });
  return Job_Offers;
};