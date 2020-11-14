const musicas = require('../models/musicas');

const getAll = (req, res) => {
    musicas.find(function(err, musica) {
        if(err) {
            res.status(500).send({ message: err.message})
        } else {
            res.status(200).send(musica)
        }
    });
};

const getById =  (req, res) => {
    const id = req.params.id
    musicas.find({ id }, function (err, musica) {
        if(err) {
            res.status(500).send({ message: err.message})
        } else {
            res.status(200).send(musica)
        }
    });
};

const getArtista = (req, res) => {
   const artista =  req.params.artista
    musicas.find({ artista }, function(err, musica) {
        if(err) {
            res.status(500).send({ message: err.message, message: FAIL})
        } else {
            res.status(200).send(musica)
        }
    });
};

/*const getAllArtistas = (req, res) => {
    musicas.find('artista titulo', function(err, musica) {
        if(err) {
            res.status(500).send({ message: err.message})
        } else {
            res.status(200).send(musica)
        }
    });
};*/

const getTitulo = (req,res) => {
    const titulo = req.params.titulo
    musicas.find({ titulo }, function(err, musica) {
        if(err) {
            res.status(500).send({ message: err.message})
        } else {
            res.status(200).send(musica)
        }
    });
};

const postMusica = (req, res) => {
    let musica = new musicas(req.body);
    musica.save(function(err) {
        if(err) {
            res.status(500).send({ message: err.message})
        } else {
            res.status(200).send({ message:" Musica registrada com Sucesso!"})
        }
    });
};

const deleteMusica = (req, res) => {
    const id = req.params.id
    musicas.deleteMany({ id }, function(err, musica){
        if(err){
            res.status(500).send({ message: err.message})
        }
        res.status(200).send({
            status: true,
            message: "Musica removida com Sucesso!"})
    });  
};


const putMusica = (req, res) => {
    const id = req.params.id
    musicas.updateMany({ id }, { $set: req.body}, { upsert: true}, function(err){
        if(err){
            res.status(500).send({ message: err.message})
        }
        res.status(200).send({ message: "Musica atualizada com Sucesso!"})
    }); 
};


module.exports = {
    getAll,
    getById,
    getArtista,
    //getAllArtistas,
    getTitulo,
    postMusica,
    deleteMusica,
    putMusica
}