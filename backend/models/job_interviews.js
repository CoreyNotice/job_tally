'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Job_Interviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Job_Interviews.init({
    Interviews: DataTypes.INTEGER,
    Date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Job_Interviews',
  });
  return Job_Interviews;
};