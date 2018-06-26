var mongoose = require("mongoose");
var Celular = require("../models/Celular");
//require('es6-promise').polyfill();
require('isomorphic-fetch');

var celularController = {};

// Lista de linhas cadastradas
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

// Lista de linhas cadastradas em JSON
celularController.listJson = function(req, res) {
  Celular.find({}).exec(function (err, celulares) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.json(celulares);
    }
  });
};

// Exibe linha por id
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

// Retorna JSON linha por id
celularController.showJson = function(req, res) {
  Celular.findOne({_id: req.params.id}).exec(function (err, celular) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.json(celular);
    }
  });
};

// Gera a página para criação
celularController.create = function(req, res) {
  fetch("https://lucasjeronimo.herokuapp.com/json/list")
    .then(result => result.json())
    .then(result => {
      res.render("../views/celulares/create", {colaboradores: result});
      console.error('>>> result: ', result);
    }).catch(err => {
      console.error('>>> error: ', error);
    });
};

// Salva o registro
celularController.save = function(req, res) {
  var celular = new Celular(req.body);

  celular.save(function(err) {
    if(err) {
      console.log(err);
      res.render("celulares/create");
    } else {
      console.log("Cadastro de celular efetuado com sucesso.");
      res.redirect("/celulares/show/"+celular._id);
    }
  });
};

// Edita o registro
celularController.edit = function(req, res) {
  fetch("https://lucasjeronimo.herokuapp.com/json/list")
    .then(result => result.json())
    .then(result => {
      Celular.findOne({_id: req.params.id}).exec(function (err, celular) {
        if (err) {
          console.log("Error:", err);
        }
        else {
        res.render("../views/celulares/edit", {colaboradores: result, celular: celular});
      }
    }).catch(err => {
      console.error('>>> error: ', error);
    });
});
};

// Atualiza o registro
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
