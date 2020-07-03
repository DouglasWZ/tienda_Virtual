// Importar express router
const express = require("express");
const routes = express.Router();

// Importar los controladores
const tiendaController = require("../controllers/tiendaController");

module.exports = function (){  
    routes.get("/", tiendaController.home); //la funcion que va a responder
    
    return routes;
}
