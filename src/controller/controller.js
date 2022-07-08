const series = require ("../models/seriesModel");
const fs = require ("fs");

const getAllSeries = (req, res) => {
  series.find((err, series) =>{
  res.status(200).send(series);
  })
};

const getSeries =  (req, res) => {
  const id = req.params.id;

  series.findById(id, (err, series) =>{
    if(err) {
      res.status(400).send({message: `${err.message} - id da série não encontrada`})
    } else {
      res.status(200).send(series);
    }
  }) 
};

const createSeries =  (req, res) => {
  let serie = new serie(req.body);

  serie.save((err) => {
    if(err) {
      res.status(500).send({message: `${err.message} - a nova serie não pode ser cadastrado`})
    } else {
      res.status(201).send(serie.toJSON())
    }
  })
};

const updateSeries =  (req, res) => {
  const id = req.params.id;

  series.findByIdUpdate(id, {$set: req.body}, (err) => {
    if(!err) {
      res.status(200).send({message: 'Série atualizada com sucesso'})
    } else {
      res.status(500).send({message: err.message})
    }
  })
};

const deleteSerie =  (req, res) => {
  const id = req.params.id;

  serie.findByIdDelete(id, (err) => {
    if(!err) {
      res.status(200).send({message:'Série deletada com sucesso'})
    } else {
      res.status(500).send({message: err.message})
    }
  })
};


module.exports = {
    getAllSeries,
    getSeries, 
    createSeries,
    updateSeries,
    deleteSerie
}