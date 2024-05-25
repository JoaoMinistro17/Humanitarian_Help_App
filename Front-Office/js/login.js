let btn = document.querySelector('#verPassword');

let email = document.querySelector('#email');
let labelEmail = document.querySelector('#emailLabel');
let validEmail = false;

let password = document.querySelector('#password');
let labelPassword = document.querySelector('#labelPassword');
let validPassword = false;

let msgError = document.querySelector('#msgError');

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

password.addEventListener('keyup', () => {
  if(password.value.length <= 5){
    labelPassword.setAttribute('style', 'color: red');
    labelPassword.innerHTML = 'Palavra-Passe *Insira no mínimo 6 caracteres';
    password.setAttribute('style', 'border-color: red');
    validPassword = false;
  } else {
    labelPassword.setAttribute('style', 'color: green');
    labelPassword.innerHTML = 'Palavra-Passe';
    password.setAttribute('style', 'border-color: green');
    validPassword = true;
  }
});

function entrar(){
  if(validEmail && validPassword){
    msgError.setAttribute('style', 'display: none');
    msgError.innerHTML = '';
  } else {
    msgError.setAttribute('style', 'display: block');
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de entrar</strong>';
  }
}

btn.addEventListener('click', ()=>{
  if(password.getAttribute('type') == 'password'){
    password.setAttribute('type', 'text');
  } else {
    password.setAttribute('type', 'password');
  }
});
