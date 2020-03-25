const express = require('express');
//const crypto = require('crypto');

const ongController = require('./controllers/ongController');
const incidentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');

//const connection = require('./database/connection');

const routes = express.Router();

routes.post('/sessions', sessionController.create);

routes.get('/ongs',ongController.index);
routes.post('/ongs',ongController.create);

routes.get('/profile', profileController.index);

routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);


//routes.post('/ongs', async (request, response) => {
    // return response.send('Hello World');
    //const params = request.query;
   // const {name, email, whatsapp, city, uf} = request.body;
   
    //const id = crypto.randomBytes(4).toString('HEX');

    //await connection('ongs').insert({
      //  id,
      //  name,
      //  email,
      //  whatsapp,
      //  city,
      //  uf
    // })

    //return response.json({ id });
 //});
 
 module.exports = routes;