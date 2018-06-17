var mongoose = require("mongoose");
var Celular = require("../models/Celular");
var moment = require('moment');
exports.index = function(req, res) {
    res.render('index', { moment: moment });
}

var celularController = {};

// Show list of celulares
celularController.list = function(req, res) {
  Celular.find({}).exec(function (err, celulares) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/celulares/index", {celulares: celulares});
    }
  });
};

// Show celular by id
celularController.show = function(req, res) {
  Celular.findOne({_id: req.params.id}).exec(function (err, celular) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/celulares/show", {celular: celular});
    }
  });
};

// Create new celular
celularController.create = function(req, res) {
  res.render("../views/celulares/create");
};

// Save new celular
celularController.save = function(req, res) {
  var celular = new Celular(req.body);

  celular.save(function(err) {
    if(err) {
      console.log(err);
      res.render("../views/celulares/create");
    } else {
      console.log("Cadastro de celular efetuado com sucesso.");
      res.redirect("/celulares/show/"+celular._id);
    }
  });
};

// Edit an celular
celularController.edit = function(req, res) {
  Celular.findOne({_id: req.params.id}).exec(function (err, celular) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/celulares/edit", {celular: celular});
    }
  });
};

// Update an celular
celularController.update = function(req, res) {
  Celular.findByIdAndUpdate(req.params.id, { $set: { numero: req.body.numero, nome: req.body.nome, planoVoz: req.body.planoVoz, planoDados: req.body.planoDados, aparelho: req.body.aparelho, imei: req.body.imei }}, { new: true }, function (err, celular) {
    if (err) {
      console.log(err);
      res.render("../views/celulares/edit", {celular: req.body});
    }
    res.redirect("/celulares/show/"+celular._id);
  });
};

// Exclui um cadastro
celularController.delete = function(req, res) {
  Celular.remove({_id: req.params.id}, function(err) {
    if(err) {
      console.log(err);
    }
    else {
      console.log("Celular excluído!");
      res.redirect("/celulares");
    }
  });
};

module.exports = celularController;
