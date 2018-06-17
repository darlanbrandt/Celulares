var mongoose = require('mongoose');

var Celulares = new mongoose.Schema({
  numero: String,
  nome: String,
  planoVoz: String,
  planoDados: String,
  aparelho: String,
  imei: Number,
});

module.exports = mongoose.model('celular', Celulares);