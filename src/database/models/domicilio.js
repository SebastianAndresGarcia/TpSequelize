'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
          // belongsTo
          Comment.belongsTo(models.Persona);
    }
  };
  Comment.init({
    name: DataTypes.STRING,
    text: DataTypes.STRING,
    tutorialId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Domicilio',
  });
  return Domicilio;
};