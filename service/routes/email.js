var express = require('express');
var emailNG = require('./emailNG');
var router = express.Router();

/* GET users listing. */
router.get('/enviarEmail', function(req, res, next) 
{  
  enviarEmail();
  res.end("Execução finalizada!!")
});

module.exports = router;
