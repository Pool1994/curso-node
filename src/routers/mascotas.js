const express = require("express");
const router = express.Router();
const Mascotas = require("../models/Mascotas");
router.get("/",async(req,res)=>{
    try{
        const dataMascotas = Mascotas.find();
        const result = await dataMascotas;
        res.render("mascotas/index",{data:result}); 
    }catch(e){
        console.log(e);
    }
});

module.exports = router;