import fakeFetchApi from "./utils/fakeFetchApi.js";

//Chama a API caso esteja nos padroes
async function handleSubmit(event) {
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  event.preventDefault();

  const data = {
    email: email.value,
    password: password.value,
  };

  if (!checarEmail() || !checarSenha()) {
    return;
  }

  const { message, status } = fakeFetchApi(data);

  if (status === 401) {
    gerarNotificacao(message, "notification-error", true);
  } else {
    window.location.href = "/app";
  }
}

//Gera a notificação com setTimeout
function gerarNotificacao(message, nameElement, delay = true) {
  document.getElementById(nameElement).innerText = message;
  if (delay) {
    setTimeout(limparNotificacao, 2000, nameElement);
  }
}

//Limpa a notificação
function limparNotificacao(nameElement) {
  document.getElementById(nameElement).innerHTML = null;
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

form.addEventListener("submit", handleSubmit);
