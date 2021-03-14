const express = require('express');
const app = express();
const ejs = require('ejs');

require("dotenv").config();

const port = process.env.PORT;

const mongoose = require('mongoose');
const user = process.env.USER;
const password = process.env.PASSWORD;
const database = process.env.DATABASE;
const uri = `mongodb+srv://${user}:${password}@cluster0.xape8.mongodb.net/${database}?retryWrites=true&w=majority`;

mongoose.connect(process.env.MONGBD_URI || uri,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("base de datos conectada"))
.catch(e=>console.log(e));

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
