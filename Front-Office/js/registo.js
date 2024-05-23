let btn = document.querySelector("#verPassw");
let btnConfirm = document.querySelector("#verConfirmPassw");

let nome = document.querySelector("#nome");
let labelNome = document.querySelector("#labelNome");
let validNome = false;

let email = document.querySelector("#email");
let labelEmail = document.querySelector("#labelEmail");
let validEmail = false;

let passw = document.querySelector("#passw");
let labelPassw = document.querySelector("#labelPassw");
let validPassw = false;

let confirmPassw = document.querySelector("#confirmPassw");
let labelConfirmPassw = document.querySelector("#labelConfirmPassw");
let validConfirmPassw = false;

let msgError = document.querySelector("#msgError");
let msgSuccess = document.querySelector("#msgSuccess");

nome.addEventListener("keyup", () => {
  if (nome.value.length <= 2) {
    labelNome.setAttribute("style", "color: red");
    labelNome.innerHTML = "Nome *Insira no minimo 3 caracteres";
    nome.setAttribute("style", "border-color: red");
    validNome = false;
  } else {
    labelNome.setAttribute("style", "color: green");
    labelNome.innerHTML = "Nome";
    nome.setAttribute("style", "border-color: green");
    validNome = true;
  }
});

email.addEventListener("keyup", () => {
  if (!email.value.includes("@")) {
    labelEmail.setAttribute("style", "color: red");
    labelEmail.innerHTML = "Email *Insira um email válido (deve conter @)";
    email.setAttribute("style", "border-color: red");
    validEmail = false;
  } else {
    labelEmail.setAttribute("style", "color: green");
    labelEmail.innerHTML = "Email";
    email.setAttribute("style", "border-color: green");
    validEmail = true;
  }
});

passw.addEventListener("keyup", () => {
  if (passw.value.length <= 5) {
    labelPassw.setAttribute("style", "color: red");
    labelPassw.innerHTML = "Passw *Insira no minimo 6 caracteres";
    passw.setAttribute("style", "border-color: red");
    validPassw = false;
  } else {
    labelPassw.setAttribute("style", "color: green");
    labelPassw.innerHTML = "Passw";
    passw.setAttribute("style", "border-color: green");
    validPassw = true;
  }
});

confirmPassw.addEventListener("keyup", () => {
  if (passw.value != confirmPassw.value) {
    labelConfirmPassw.setAttribute("style", "color: red");
    labelConfirmPassw.innerHTML =
      "Confirmar Passw *As Palavras-passe não são iguais";
    confirmPassw.setAttribute("style", "border-color: red");
    validConfirmPassw = false;
  } else {
    labelConfirmPassw.setAttribute("style", "color: green");
    labelConfirmPassw.innerHTML = "Confirmar Senha";
    confirmPassw.setAttribute("style", "border-color: green");
    validConfirmPassw = true;
  }
});

function registar() {
  if (validNome && validEmail && validPassw && validConfirmPassw) {
    let listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]");

    listaUser.push({
      nomeCad: nome.value,
      emailCad: email.value,
      passwCad: passw.value
    });

    localStorage.setItem("listaUser", JSON.stringify(listaUser));

    msgSuccess.setAttribute("style", "display: block");
    msgSuccess.innerHTML = "<strong>Registo Efetuado...</strong>";
    msgError.setAttribute("style", "display: none");
    msgError.innerHTML = "";

    setTimeout(() => {
      window.location.href =
        "http://127.0.0.1:5500/Front-Office/index.html";
    }, 3000);
  } else {
    msgError.setAttribute("style", "display: block");
    msgError.innerHTML =
      "<strong>Preencha todos os campos corretamente antes de confirmar</strong>";
    msgSuccess.innerHTML = "";
    msgSuccess.setAttribute("style", "display: none");
  }
}

btn.addEventListener("click", () => {
  let inputPassw = document.querySelector("#passw");

  if (inputPassw.getAttribute("type") == "password") {
    inputPassw.setAttribute("type", "text");
  } else {
    inputPassw.setAttribute("type", "password");
  }
});

btnConfirm.addEventListener("click", () => {
  let inputConfirmPassw = document.querySelector("#confirmPassw");

  if (inputConfirmPassw.getAttribute("type") == "password") {
    inputConfirmPassw.setAttribute("type", "text");
  } else {
    inputConfirmPassw.setAttribute("type", "password");
  }
});


