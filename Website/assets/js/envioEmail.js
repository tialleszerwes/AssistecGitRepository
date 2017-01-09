
function enviaEmail()
{

}

function validaEmail()
{
    var emailtxt = document.getElementById("emailtxt").value;

    usuario = emailtxt.substring(0, emailtxt.indexOf("@"));
    dominio = emailtxt.substring(emailtxt.indexOf("@")+ 1, emailtxt.length);

    if ((usuario.length >=1) && 
        (dominio.length >=3) && 
        (usuario.search("@")==-1) && 
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) && 
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&      
        (dominio.indexOf(".") >=1)&& 
        (dominio.lastIndexOf(".") < dominio.length - 1)) 
        {
            document.getElementById("msgemail").innerHTML="E-mail válido";
            alert("E-mail valido");
        }
        else
        {
            document.getElementById("msgemail").innerHTML="<font color='red'>E-mail inválido </font>";
            alert("E-mail invalido");
        }
}