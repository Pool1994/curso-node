import mongoose from "mongoose";
const {Schema }  = mongoose;

const MascotaSchema = new Schema({
    Nombre:String,
    Descripcion:String,
    Estado:String
});

// Crear modelo
const Mascotas = mongoose.model('Mascotas',MascotaSchema);

module.exports = Mascotas;