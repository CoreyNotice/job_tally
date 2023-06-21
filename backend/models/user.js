'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Tallies}) {
      User.hasMany(Tallies,{as:'author',
        foreignKey:{
          name:'userOwnerId', 
          allowNull:false,
        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE',

      });
    }
  }
  User.init({
    userName: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'User'
  });
  return User;
};