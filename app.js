const express = require('express');
const app = express();
const ejs = require('ejs');
const port = process.env.PORT || 8080;

// motor de plantillas
app.set("view engine", "ejs");

app.set("views",__dirname + "/views");

//middleware
app.use(express.static(__dirname+"/public"));

/** RUTAS */
app.get("/",(req,res)=>{
    res.render("home/index",{titulo:"titulo dinamico"});
});



/** sino encuentra la ruta, le arrojamos el error 404 */
app.use((req,res,next)=>{
    res.status(404).sendFile(__dirname+"/public/404.html");
});
app.listen(port,()=>{
    console.log("Servicio a su puerto:"+port);
});
