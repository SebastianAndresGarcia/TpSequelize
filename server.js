const db = require("./src/database/models");
/*const controllerTutorial = require('./src/controller/tutorialController');
const controllerComments = require('./src/controller/commentsController');*/
const controllerPersona = require('./src/controller/personaControlador');
const controllerDomicilios = require('./src/controller/domicilioControlador');

const run = async () => {

    const tut1 = await controllerPersona.create({
        nombre: "Sebastian",
        apellido: "Garcia",
    });

    console.log('--------CREO LA PERSONA 2-------');
  

    const tut2 = await controllerPersona.create({
   
        nombre: "Juan",
        apellido: "Perez",
    });


    const comment1 = await controllerDomicilios.create(tut1.id, {
        calle: "Aristides",
        numero: 356,
        localidad: "Ciudad",
    });

    await controllerDomicilios.create(tut1.id, {
        calle: "E. Civit",
        numero: 120,
        localidad: "Ciudad",
    });

    const comment2 = await controllerDomicilios.create(tut2.id, {
        calle: "Cervantes",
        numero: 4560,
        localidad: "Luján",
    });

    await controllerDomicilios.create(tut2.id, {
        calle: "Urquiza",
        numero: 4560,
        localidad: "Guaymallén",
    });

//Get Tutorial by given id
    console.log('------BUSCO POR ID UN TUTO --------');
    const tut1Data = await controllerPersona.findPersonaById(tut1.id);
    console.log(">> Tutorial id=" );
    console.log(">> Tutorial id=" + tut1Data.id,JSON.stringify(tut1Data, null, 2));

    const tut2Data = await controllerPersona.findPersonaById(tut2.id);
    console.log(">> Tutorial id=" + tut2Data.id,JSON.stringify(tut2Data, null, 2)
    );

//Get Domicilio by given id
console.log('------BUSCO POR ID UN COMENTARIO --------');
const comment1Data = await controllerDomicilios.findDomicilioById(comment1.id);
console.log( ">> Comment id=" + comment1.id, JSON.stringify(comment1Data, null, 2)
);

const comment2Data = await controllerDomicilios.findDomicilioById(comment2.id);
console.log(">> Comment id=" + comment2.id,JSON.stringify(comment2Data, null, 2)
);

//Get all Personas

const personas = await controllerPersona.findAll();
console.log(">> All tutorials", JSON.stringify(personas, null, 2));

};

// db.sequelize.sync();
db.sequelize.sync({ force: false}).
then(() => {
    console.log("Drop and re-sync db.");

    console.log('entre a run crear tutorial');
    run();
});