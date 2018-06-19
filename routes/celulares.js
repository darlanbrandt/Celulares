var express = require('express');
var rota = express.Router();
var celular = require("../controllers/CelularController.js");

// Retorna a lista
rota.get('/', function(req, res) {
  celular.list(req, res);
});

// Retorna um registro
rota.get('/show/:id', function(req, res) {
  celular.show(req, res);
});

// Cria o registro
rota.get('/create', function(req, res) {
  celular.create(req, res);
});

// Salva o registro
rota.post('/save', function(req, res) {
  celular.save(req, res);
});

// Edita o registro
rota.get('/edit/:id', function(req, res) {
  celular.edit(req, res);
});

// Atualiza o registro
rota.post('/update/:id', function(req, res) {
  celular.update(req, res);
});

// Exclui o registro
rota.post('/delete/:id', function(req, res, next) {
  celular.delete(req, res);
});

module.exports = rota;
