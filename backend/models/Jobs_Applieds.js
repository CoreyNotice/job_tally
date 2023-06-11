'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jobs_Applieds extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Jobs_Applieds.init({
    Job_Applied: DataTypes.INTEGER,
    Date: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Jobs_Applieds',
  });
  return Jobs_Applieds;
};