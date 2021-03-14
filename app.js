const express = require('express');
const bodyParser = require('body-parser');
const app = express();


//parsera los inputs
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require("dotenv").config();

const port = process.env.PORT;

/** requerimos la base de datos */
require("./src/database/database");

// motor de plantillas
app.set("view engine", "ejs");

app.set("views",__dirname + "/src/views");

//middleware
app.use(express.static(__dirname+"/public"));

/** RUTAS WEB */
app.use("/",require("./src/routers/web"));
app.use("/mascotas",require("./src/routers/mascotas"));

/** sino encuentra la ruta, le arrojamos el error 404 */
app.use((req,res,next)=>{
    res.status(404).sendFile(__dirname+"/public/404.html");
});


app.listen(port,()=>{
    console.log("Servicio a su puerto:"+port);
});
