const express = require("express");
const router = express.Router();
const Mascotas = require("../models/Mascotas");
router.get("/",async (req,res)=>{
    try{
        const dataMascotas = Mascotas.find();
        const result = await dataMascotas;
        res.render("mascotas/lista",{data:result});
    }catch(e){
        console.log(e);
    }
});
router.get("/crear",(req,res)=>{
    res.render("mascotas/crear");
});
module.exports = router;