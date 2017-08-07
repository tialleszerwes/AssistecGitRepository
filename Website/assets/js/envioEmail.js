function enviaForm() {
    if (validaForm()) {
        enviarEmail();
    }
    else {
        return false;
    }
}

function validaForm() {
    var indValid = true;
    //valida nome
    if (document.getElementById("nomeTxt").value.length > 2) {
        var errorTag = document.getElementById("errorNome");
        if (errorTag != null) {
            errorTag.remove();
        }
    }
    else if (document.getElementById("errorNome") == null) {
        document.getElementById("nomeDiv").innerHTML += "<small> <font id='errorNome' color='red'>Nome inválido </font> </small>";
        indValid = false;
    }
    else{
        indValid = false;
    }

    //valida email de envio
    if (document.getElementById("emailSelect").value != "") {
        var errorTag = document.getElementById("errorEmail");
        if (errorTag != null) {
            errorTag.remove();
        }
    }
    else if (document.getElementById("errorEmail") == null) {
        document.getElementById("emailDiv").innerHTML += "<small> <font id='errorEmail' color='red'>E-mail inválido </font> </smal>";
        indValid = false;
    }
    else{
        indValid = false;
    }

    //valida mensagem
    if (document.getElementById("mensagemTxt").value >= 10) {
        var errorTag = document.getElementById("errorMensagem");
        if (errorTag != null) {
            errorTag.remove();
        }
    }
    else if (document.getElementById("mensagemTxt").value < 10) {
        document.getElementById("mensagemDiv").innerHTML += "<small> <font id='errorMensagem' color='red'>Mensagem inválida </font> </small>";
        indValid = false;
    }
    else{
        indValid = false;
    }

    //valida email cliente
    indValid = validaEmailPhone();

    return indValid;
}

function nomeChangeWithError() {
    if (document.getElementById("errorNome") != null) {
        if (document.getElementById("nomeTxt").value.length > 2) {
            document.getElementById("errorNome").innerHTML = "";
        }
    }
}

function emailChangeWithError() {
    if (document.getElementById("errorEmail") != null) {
        if (document.getElementById("emailSelect").value != "") {
            document.getElementById("errorEmail").innerHTML = "";
        }
    }
}

function mensagemClienteChangeWithError() {
    if (document.getElementById("errorMensagem") != null) {
        if (document.getElementById("mensagemTxt").value.length >= 10) {
            document.getElementById("errorMensagem").innerHTML = "";
        }
    }
}

function emailClienteChangeWithError() {
    validaEmailPhone();
}

function validaEmailPhone() {
    var emailtxt = document.getElementById("emailtxt").value;

    if(emailtxt*1 > 0){
        if(emailtxt.length <= 8){
        $('#errorEmailCliente').remove();
        document.getElementById("emailClienteDiv").innerHTML += "<small> <font id='errorEmailCliente' color='red'>Número inválido </font> </small>";
        return false;    
        }
        $('#errorEmailCliente').remove();
        return true;
    }

    usuario = emailtxt.substring(0, emailtxt.indexOf("@"));
    dominio = emailtxt.substring(emailtxt.indexOf("@") + 1, emailtxt.length);

    if ((usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) &&
        (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
        var errorTag = document.getElementById("errorEmailCliente");
        if (errorTag != null) {
            errorTag.remove();
        }
    }
    else if (document.getElementById("errorEmailCliente") == null) {
        $('#errorEmailCliente').remove();
        document.getElementById("emailClienteDiv").innerHTML += "<small> <font id='errorEmailCliente' color='red'>E-mail inválido </font> </small>";
        return false;
    }
    else{
        return false;
    }

    return true;
}

function enviarEmail() {
    var selectEmail = document.getElementById("emailSelect");

    var dadosEnvio = {
        nomeCliente: document.getElementById("nomeTxt").value,
        contato: document.getElementById("emailtxt").value,
        mensagem: document.getElementById("mensagemTxt").value,
        emailDestino: selectEmail.options[selectEmail.selectedIndex].text
    }
    // http://127.0.0.1:5000 debug
    $.post("/api", dadosEnvio, function (data) {
        alert(data.message);
    }, 'json').fail(function (error) {
        alert(error.responseText);
    });
}