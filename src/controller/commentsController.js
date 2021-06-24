
const db = require('../database/models');
const sequelize = db.sequelize;


const commentsController = {
   

// crear un comentario
create: (id, comment) => {
  return db.Comment.create({
    name: comment.name,
    text: comment.text,
    tutorialId: id,
  })
    .then((comment) => {
      console.log(">> Created comment: " + JSON.stringify(comment, null, 4));
      return comment;
    })
    .catch((err) => {
      console.log(">> Error while creating comment: ", err);
    });
},

// Buscar un comentario por Id
findCommentById : (id) => {
  return db.Comment.findByPk(id, { include: ["Tutorial"] })
    .then((comment) => {
      return comment;
    })
    .catch((err) => {
      console.log(">> Error while finding comment: ", err);
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
    
 

module.exports = commentsController