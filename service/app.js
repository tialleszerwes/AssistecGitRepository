var express = require('express');
// var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
var nodeMailer = require('nodemailer');

var index = require('./routes/index');
var email = require('./routes/email');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/email', email);

app.listen(5000);

// app.get('/',defaultRoute);



// app.get('/enviarEmail', enviarEmail);


// function enviarEmail(req, res) {
//   var transporte = nodeMailer.createTransport(
//     {
//       service: 'Gmail',
//       auth:
//       {
//         user: 'tialleszerwes@gmail.com',
//         pass: 'tz150194'
//       }
//     });

//   var email = {
//     from: 'tialleszerwes@gmail.com',
//     to: 'tialles_zerwes@hotmail.com',
//     subject: 'Envio de formulario de e-mail teste',
//     html: 'Boa tarde, Estou enviando esse teste de e-mail de uma maneira automática. Teste de uma api Node.js.'
//   }

//   transporte.sendMail(email, function (err, info) {
//     if (err) {
//       throw err;
//     }

//     console.log('Email enviado! Leia as informações adicionais: ', info);
//   });
// }

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
