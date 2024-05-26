let btn = document.querySelector('#verPassword');
let btnConfirm = document.querySelector('#verConfirmPassword');

let nome = document.querySelector('#nome');
let labelNome = document.querySelector('#labelNome');
let validNome = false;

let email = document.querySelector('#email');
let labelEmail = document.querySelector('#labelEmail');
let validEmail = false;

let password = document.querySelector('#password');
let labelPassword = document.querySelector('#labelPassword');
let validPassword = false;

let confirmPassword = document.querySelector('#confirmPassword');
let labelConfirmPassword = document.querySelector('#labelConfirmPassword');
let validConfirmPassword = false;

let msgError = document.querySelector('#msgError');
let msgSuccess = document.querySelector('#msgSuccess');

nome.addEventListener('keyup', () => {
  if(nome.value.length <= 2){
    labelNome.setAttribute('style', 'color: red');
    labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres';
    nome.setAttribute('style', 'border-color: red');
    validNome = false;
  } else {
    labelNome.setAttribute('style', 'color: green');
    labelNome.innerHTML = 'Nome';
    nome.setAttribute('style', 'border-color: green');
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

password.addEventListener('keyup', () => {
  if(password.value.length <= 5){
    labelPassword.setAttribute('style', 'color: red');
    labelPassword.innerHTML = 'Password *Insira no minimo 6 caracteres';
    password.setAttribute('style', 'border-color: red');
    validPassword = false;
  } else {
    labelPassword.setAttribute('style', 'color: green');
    labelPassword.innerHTML = 'Password';
    password.setAttribute('style', 'border-color: green');
    validPassword = true;
  }
});

confirmPassword.addEventListener('keyup', () => {
  if(password.value != confirmPassword.value){
    labelConfirmPassword.setAttribute('style', 'color: red');
    labelConfirmPassword.innerHTML = 'Confirmar Password *Passwords Diferentes';
    confirmPassword.setAttribute('style', 'border-color: red');
    validConfirmPassword = false;
  } else {
    labelConfirmPassword.setAttribute('style', 'color: green');
    labelConfirmPassword.innerHTML = 'Confirmar Password';
    confirmPassword.setAttribute('style', 'border-color: green');
    validConfirmPassword = true;
  }
});

function registo(){
  if(validNome && validEmail && validPassword && validConfirmPassword){
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');
    
    listaUser.push({
      nomeCad: nome.value,
      emailCad: email.value,
      passwordCad: password.value,
      telemovel: '',
      pais: '',
      morada: '',
      descricao: ''
    });
    
    localStorage.setItem('listaUser', JSON.stringify(listaUser));
    
    msgSuccess.setAttribute('style', 'display: block');
    msgSuccess.innerHTML = '<strong>Registo Efetuado...</strong>';
    msgError.setAttribute('style', 'display: none');
    msgError.innerHTML = '';
    
    setTimeout(()=>{
        window.location.href = 'login.html'; 
    }, 1500);
  } else {
    msgError.setAttribute('style', 'display: block');
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de efetuar registo</strong>';
    msgSuccess.innerHTML = '';
    msgSuccess.setAttribute('style', 'display: none');
  }
}

btn.addEventListener('click', ()=>{
  let inputPassword = document.querySelector('#password');
  
  if(inputPassword.getAttribute('type') === 'password'){
    inputPassword.setAttribute('type', 'text');
  } else {
    inputPassword.setAttribute('type', 'password');
  }
});

btnConfirm.addEventListener('click', ()=>{
  let inputConfirmPassword = document.querySelector('#confirmPassword');
  
  if(inputConfirmPassword.getAttribute('type') === 'password'){
    inputConfirmPassword.setAttribute('type', 'text');
  } else {
    inputConfirmPassword.setAttribute('type', 'password');
  }
});
