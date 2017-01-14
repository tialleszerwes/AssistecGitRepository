var nodeMailer = require('nodemailer');

var emailService = {};

// module.exports = 

emailService.enviar = function(dadosEnvioParam) {
  var transporte = nodeMailer.createTransport(
    {
      service: 'Gmail',
      auth:
      {
        user: 'tialleszerwes@gmail.com',
        pass: '34464811'
      }
    });

  var email = {
    from: dadosEnvioParam.nomeCliente,
    to: dadosEnvioParam.emailDestino,
    subject: 'E-mail Site',
    html: dadosEnvioParam.mensagem
  };

  transporte.sendMail(email, function (err, info) {
    if (err) {
      throw err;
      //TODO: inserir retorno de erro;
    }
    //TODO: inserir retorno de sucesso
    console.log('Email enviado! Leia as informações adicionais: ', info);
  });
}

module.exports = emailService;