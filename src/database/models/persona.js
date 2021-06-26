'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Persona extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
   // hasMany
   Persona.hasMany(models.Domicilio, {
    foreignKey: 'personaId',
    as: "domicilios"
  })
    }
  };
  Persona.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Persona',
  });
  return Persona;
};