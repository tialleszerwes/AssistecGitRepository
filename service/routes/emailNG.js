var nodeMailer = require('nodemailer');

var emailService = {};

// module.exports = 

emailService.enviarEmail = function() {
  var transporte = nodeMailer.createTransport(
    {
      service: 'Gmail',
      auth:
      {
        user: 'tialleszerwes@gmail.com',
        pass: 'tz150194'
      }
    });

  var email = {
    from: 'tialleszerwes@gmail.com',
    to: 'tialles_zerwes@hotmail.com',
    subject: 'Envio de formulario de e-mail teste',
    html: 'Boa tarde, Estou enviando esse teste de e-mail de uma maneira automática. Teste de uma api Node.js.'
  }

  transporte.sendMail(email, function (err, info) {
    if (err) {
      throw err;
    }

    console.log('Email enviado! Leia as informações adicionais: ', info);
  });
}

module.exports = emailService;