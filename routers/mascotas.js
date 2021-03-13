const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
   res.render("mascotas/index",{
       data:[
           {id:1,name:'Rex',description:"rex enfermo"},
           {id:2,name:'Gato',description:"gato enfermo"},
           {id:3,name:'Perro',description:"perro enfermo"},
           {id:4,name:'Caballo',description:"caballo enfermo"},
           {id:5,name:'Yegua',description:"yegua enfermo"},
           {id:6,name:'Toro',description:"perro enfermo"},
       ]
   }); 
});

module.exports = router;