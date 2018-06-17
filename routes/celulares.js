var express = require('express');
var router = express.Router();
var celular = require("../controllers/CelularController.js");

// Get all employees
router.get('/', function(req, res) {
  celular.list(req, res);
});

// Get single celular by id
router.get('/show/:id', function(req, res) {
  celular.show(req, res);
});

// Create celular
router.get('/create', function(req, res) {
  celular.create(req, res);
});

// Save celular
router.post('/save', function(req, res) {
  celular.save(req, res);
});

// Edit celular
router.get('/edit/:id', function(req, res) {
  celular.edit(req, res);
});

// Edit update
router.post('/update/:id', function(req, res) {
  celular.update(req, res);
});

// Edit update
router.post('/delete/:id', function(req, res, next) {
  celular.delete(req, res);
});

module.exports = router;
