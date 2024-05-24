let btn = document.querySelector('#verPassword');  // Atualizado para corresponder ao novo ID
let btnConfirm = document.querySelector('#verConfirmSenha');

let nome = document.querySelector('#nome');
let labelNome = document.querySelector('#labelNome');
let validNome = false;

let email = document.querySelector('#email');
let labelEmail = document.querySelector('#labelEmail');
let validEmail = false;

let senha = document.querySelector('#password');  // Atualizado para corresponder ao novo ID
let labelSenha = document.querySelector('#labelPassword');  // Atualizado para corresponder ao novo ID
let validSenha = false;

let confirmSenha = document.querySelector('#confirmSenha');
let labelConfirmSenha = document.querySelector('#labelConfirmSenha');
let validConfirmSenha = false;

let msgError = document.querySelector('#msgError');
let msgSuccess = document.querySelector('#msgSuccess');

nome.addEventListener('keyup', () => {
  if(nome.value.length <= 2){
    labelNome.setAttribute('style', 'color: red');
    labelNome.innerHTML = 'Nome *Insira no mínimo 3 caracteres';
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

senha.addEventListener('keyup', () => {
  if(senha.value.length <= 5){
    labelSenha.setAttribute('style', 'color: red');
    labelSenha.innerHTML = 'Senha *Insira no mínimo 6 caracteres';
    senha.setAttribute('style', 'border-color: red');
    validSenha = false;
  } else {
    labelSenha.setAttribute('style', 'color: green');
    labelSenha.innerHTML = 'Senha';
    senha.setAttribute('style', 'border-color: green');
    validSenha = true;
  }
});

confirmSenha.addEventListener('keyup', () => {
  if(senha.value != confirmSenha.value){
    labelConfirmSenha.setAttribute('style', 'color: red');
    labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem';
    confirmSenha.setAttribute('style', 'border-color: red');
    validConfirmSenha = false;
  } else {
    labelConfirmSenha.setAttribute('style', 'color: green');
    labelConfirmSenha.innerHTML = 'Confirmar Senha';
    confirmSenha.setAttribute('style', 'border-color: green');
    validConfirmSenha = true;
  }
});

function cadastrar(){
  if(validNome && validEmail && validSenha && validConfirmSenha){
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');
    
    listaUser.push(
    {
      nomeCad: nome.value,
      emailCad: email.value,
      senhaCad: senha.value
    });
    
    localStorage.setItem('listaUser', JSON.stringify(listaUser));
    
    msgSuccess.setAttribute('style', 'display: block');
    msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>';
    msgError.setAttribute('style', 'display: none');
    msgError.innerHTML = '';
    
    setTimeout(()=>{
        window.location.href = '../html/login.html';
    }, 2000);
  
    
  } else {
    msgError.setAttribute('style', 'display: block');
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>';
    msgSuccess.innerHTML = '';
    msgSuccess.setAttribute('style', 'display: none');
  }
}

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#password');  // Atualizado para corresponder ao novo ID
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text');
  } else {
    inputSenha.setAttribute('type', 'password');
  }
});

btnConfirm.addEventListener('click', ()=>{
  let inputConfirmSenha = document.querySelector('#confirmSenha');
  
  if(inputConfirmSenha.getAttribute('type') == 'password'){
    inputConfirmSenha.setAttribute('type', 'text');
  } else {
    inputConfirmSenha.setAttribute('type', 'password');
  }
});
