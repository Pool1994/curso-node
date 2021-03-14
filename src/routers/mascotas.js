const express = require("express");
const router = express.Router();
// const Mascotas = require("../models/Mascotas");
router.get("/",(req,res)=>{
    try{
        // const dataMascotas = await Mascotas.find();
        res.render("mascotas/index",{data:[]});
    }catch(e){
        console.log(e);
    }
});

module.exports = router;