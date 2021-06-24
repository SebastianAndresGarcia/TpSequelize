const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");


const personaControlador = {
   

// crear una persona
    create: (persona) => {
        return db.Persona.create({nombre: persona.nombre,apellido: persona.apellido,
        })
        .then((persona) => {
            console.log(">> Created person: " + JSON.stringify(persona, null, 4));
            return persona;
          })

          .catch((err) => {
            console.log(">> Error while creating person: ", err);
          });

    },

// Buscar una persona por Id
    findPersonaById : (personaId) => {
        return db.Persona.findByPk(personaId,
             { include: ["domicilios"] })

          .then((persona) => {
            return persona;
          })
          .catch((err) => {
            console.log(">> Error while finding tutorial: ", err);
          });
      },

      findAll : () => {
        return db.Persona.findAll({
          include: ["domicilios"],
        }).then((personas) => {
          return personas;
        });
      }


    }
    
 

module.exports = personaControlador;