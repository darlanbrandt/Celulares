var express = require('express');
var rota = express.Router();

/* GET home page. */
rota.get('/', function(req, res, next) {
  res.render('index', { title: 'Linhas de celular corporativo' });
});

module.exports = rota;
