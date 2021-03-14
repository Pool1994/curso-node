const mongoose = require('mongoose');
const user = process.env.USER;
const password = process.env.PASSWORD;
const database = process.env.DATABASE;
const uri = `mongodb+srv://${user}:${password}@cluster0.xape8.mongodb.net/${database}?retryWrites=true&w=majority`;

mongoose.connect(process.env.MONGBD_URI || uri,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("base de datos conectada"))
.catch(e=>console.log(e));