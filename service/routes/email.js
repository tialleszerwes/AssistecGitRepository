// var path = require('path');
var express = require('express');
var emailNG = require('./../public/javascripts/emailNG');
var router = express.Router();

// var app = express();


/* GET users listing. */
router.post('/', function(req, res, next) 
{  
  res.header("Access-Control-Allow-Origin", "*");
  var objParam = req.body;  

  emailNG.enviar(objParam, res);
});


// app.route('/enviar')
//   .get(function (req, res) 
//   {
//     req.body.Senha


    

//     res.send
//     res.json("");


//     res.send('teste')
//   })
//   .post(function (req, res) {
    
//   })
//   .put(function (req, res) {
//     res.send('')
//   })

module.exports = router;
