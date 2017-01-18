var nodeMailer = require('nodemailer');
// var returnMsg = require('./retornoMensagem');
var emailService = {};

// module.exports = 

emailService.enviar = function (dadosEnvioParam, response) {
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
    subject: dadosEnvioParam.nomeCliente + " - " + dadosEnvioParam.contato,
    html: dadosEnvioParam.mensagem
  };

  transporte.sendMail(email, function (err, info) {
    if (err) {
      response.status(500);
      response.send("Houve um erro ao enviar o E-mail. Reinicie o sistema e tente novamente.").end();
      return;
    }
    response.json({ message: "E-mail enviado com sucesso" }).end();
    console.log('Email enviado! Leia as informações adicionais: ', info);
    return;
  });
}

module.exports = emailService;