'use strict';
const {
  Model
} = require('sequelize')
 
module.exports = (sequelize, DataTypes) => {
  class Tallies extends Model {
    static associate({User}) {
    Tallies.belongsTo(User,{as:'author',
      foreignKey:{
      name:'userOwnerId',
      allowNull:false,
      },
      onDelete:'CASCADE',
      onUpdate:'CASCADE'
  
  });
    }
  }
  Tallies.init({
    Job_Applied: DataTypes.INTEGER,
    Phone_Video_Screens: DataTypes.INTEGER,
    Job_Interviews: DataTypes.INTEGER,
    Job_Offers: DataTypes.INTEGER,
    userOwnerId:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tallies',
  });

  return Tallies;
};