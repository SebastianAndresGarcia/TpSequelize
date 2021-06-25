
const db = require('../database/models');
const sequelize = db.sequelize;


const domicilioControlador = {
   

// crear un domicilio
create: (id, domicilio) => {
  return db.Domicilio.create({
    calle: domicilio.calle,
    numero: domicilio.numero,
    localidad: domicilio.localidad,
    personaId: id,
  })
    .then((domicilio) => {
      console.log(">> Created domicilio: " + JSON.stringify(domicilio, null, 4));
      return domicilio;
    })
    .catch((err) => {
      console.log(">> Error while creating comment: ", err);
    });
},

// Buscar un comentario por Id
findDomicilioById : (id) => {
  return db.Domicilio.findByPk(id, { include: ["Persona"] })
    .then((domicilio) => {
      return domicilio;
    })
    .catch((err) => {
      console.log(">> Error while finding domicilio: ", err);
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
    
 

module.exports = domicilioControlador