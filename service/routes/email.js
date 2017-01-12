// var path = require('path');

var express = require('express');
var emailNG = require('./emailNG');
var router = express.Router();

/* GET users listing. */
router.post('/enviar', function(req, res, next) 
{  
  //utilizar para envio dos parametros post
  //https://scotch.io/tutorials/use-expressjs-to-get-url-and-post-parameters
  var objParam = req.DadosEnvio;  

  emailNG.enviarEmail(objParam);
  res.end("Execução finalizada!!" + objParam.assunto)
});

module.exports = router;
