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
    subject: 'E-mail Site',
    html: dadosEnvioParam.mensagem
  };

  transporte.sendMail(email, function (err, info) {
    if (err) {
      // err.message;
      //TODO: inserir retorno de erro;
      // response.end(returnMsg.createMsg({ status: '500', mensagem: err.message }));
      response.json({ status: '500', mensagem: err.message });
    }
    //TODO: inserir retorno de sucesso
    // response.end(returnMsg.createMsg({ status: '200', mensagem: 'E-mail enviado com sucesso.' }));
    response.json({ status: '200', mensagem: 'E-mail enviado com sucesso.'});
    console.log('Email enviado! Leia as informações adicionais: ', info);
  });
}

module.exports = emailService;