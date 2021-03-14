const mongoose = require('mongoose');
const user = "poolAdmin1994";
const password = "iuoy9OU72jtowNdh";
const database = "veterinaria";
const uri = `mongodb+srv://${user}:${password}@cluster0.xape8.mongodb.net/${database}?retryWrites=true&w=majority`;

mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("base de datos conectada"))
.catch(e=>console.log(e));