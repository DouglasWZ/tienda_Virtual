//Importar los modulos de express.js
const express = require('express');
const exphbs = require("express-handlebars"); 

// definir las rutas
const routes = require("./routes")

//Crear un servidor de express
const app = express();

//Cargar los archivos estaticos
app.use(express.static("public"));

//template handlebars
app.engine("hbs", exphbs({
    defaultLayout: "main",
    extname: ".hbs",
  })
);

app.set("view engine", "hbs");

//utilizar las rutas
app.use("/", routes());

//Inicializar el servidor en un puerto en especifico
app.listen(3000, () =>{
    console.log("Servidor ejecutandose correctamente el el puerto 3000");
});
