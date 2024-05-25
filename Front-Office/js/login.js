let btn = document.querySelector('.fa-eye');

btn.addEventListener('click', () => {
  let inputPassword = document.querySelector('#password');
  
  if (inputPassword.getAttribute('type') == 'password') {
    inputPassword.setAttribute('type', 'text');
  } else {
    inputPassword.setAttribute('type', 'password');
  }
});

function logar() {
  let email = document.querySelector('#email');
  let emailLabel = document.querySelector('#emailLabel');
  
  let password = document.querySelector('#password');
  let passwordLabel = document.querySelector('#passwordLabel');
  
  let msgError = document.querySelector('#msgError');
  let listaUser = [];
  
  let userValid = {
    nome: '',
    email: '',
    password: ''
  };
  
  listaUser = JSON.parse(localStorage.getItem('listaUser'));
  
  listaUser.forEach((item) => {
    if (email.value == item.emailCad && password.value == item.passwordCad) {
      userValid = {
        nome: item.nomeCad,
        email: item.emailCad,
        password: item.passwordCad
      };
    }
  });
   
  if (email.value == userValid.email && password.value == userValid.password) {
    window.location.href = 'perfil.html';
    
    let mathRandom = Math.random().toString(16).substr(2);
    let token = mathRandom + mathRandom;
    
    localStorage.setItem('token', token);
    localStorage.setItem('userLogado', JSON.stringify(userValid));
  } else {
    // Corrigido de userLabel para emailLabel
    emailLabel.setAttribute('style', 'color: red');
    email.setAttribute('style', 'border-color: red');
    passwordLabel.setAttribute('style', 'color: red');
    password.setAttribute('style', 'border-color: red');
    msgError.setAttribute('style', 'display: block');
    msgError.innerHTML = 'Email ou Password incorretos';
    email.focus();
  }
}


