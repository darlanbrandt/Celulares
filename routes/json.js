var express = require('express');
var router = express.Router();
var celular = require("../controllers/CelularController.js");

// Lista todos os colaboradores
router.get('/', function(req, res) {
  celular.listJson(req, res);
});

router.get('/show/:id', function(req, res) {
  celular.showJson(req, res);
});

module.exports = router;