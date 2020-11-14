const mongoose = require('mongoose');

const musicasSchema = new mongoose.Schema({
    id : { type: Number },
    titulo: { type: String },
    duracao: { type: String },
    artista: { type: String },
   },{
       versionKey: false
   });
   
   const musicas = mongoose.model('musicas', musicasSchema);
   
   module.exports = musicas