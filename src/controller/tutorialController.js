const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");


const tutorialController = {
   

// crear un tutorial
    create: (tutorial) => {
        return db.Tutorial.create({title: tutorial.title,description: tutorial.description,
        })
        .then((tutorial) => {
            console.log(">> Created tutorial: " + JSON.stringify(tutorial, null, 4));
            return tutorial;
          })

          .catch((err) => {
            console.log(">> Error while creating tutorial: ", err);
          });

    },

// Buscar un tutorial por Id
    findTutorialById : (tutorialId) => {
        return db.Tutorial.findByPk(tutorialId,
             { include: ["comments"] })

          .then((tutorial) => {
            return tutorial;
          })
          .catch((err) => {
            console.log(">> Error while finding tutorial: ", err);
          });
      },

      findAll : () => {
        return db.Tutorial.findAll({
          include: ["comments"],
        }).then((tutorials) => {
          return tutorials;
        });
      }


    }
    
 

module.exports = tutorialController;