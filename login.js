//import fakeFetchApi from "./utils/fakeFetchApi.js";

//Chama a API caso esteja nos padroes
async function handleChange() {
  if (checarEmail() && checarSenha()) {
    console.log("Logando");

    const data = {
      email: document.forms[0].email.value,
      password: document.forms[0].password.value,
    };

    const response = fakeFetchApi(data);
    console.log("Dados", data);

    if (responseFakeApi.status === 200) {
      window.location.href = "/app";
    } else {
      gerarNotificacao(responseFakeApi.message, "notification-error", true);
    }
  }
}

//Gera a notificação com timer
function gerarNotificacao(message, nameElement, delay = true) {
  document.getElementById(nameElement).innerText = message;
  if (delay) {
    setTimeout(clearNotification, 2 * 1000, nameElement);
  }
}

//Verifica se o email esta nos padõres
function checarEmail() {
  if (
    document.forms[0].email.value == "" ||
    document.forms[0].email.value.indexOf("@") == -1 ||
    document.forms[0].email.value.indexOf(".") == -1
  ) {
    var input = document.getElementById("email");
    input.style.cssText = "border: 1px solid red";

    var error = document.getElementById("errorEmail");
    error.style.cssText = "display: block";

    return false;
  } else {
    return true;
  }
}

//Verifica se a senha esta nos padõres
function checarSenha() {
  var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  if (document.forms[0].password.value.match(passw)) {
    return true;
  } else {
    var input = document.getElementById("password");
    input.style.cssText = "border: 1px solid red";

    var error = document.getElementById("errorPassword");
    error.style.cssText = "display: block";

    return false;
  }
}

//Desabilita a msg de erro
function changeColor(id) {
  document.getElementById(id).style.cssText = "border: 0px ";
  document.getElementById("errorEmail").style.cssText = "display: none ";
  document.getElementById("errorPassword").style.cssText = "display: none ";
}
