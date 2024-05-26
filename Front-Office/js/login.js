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
  let listaUser = JSON.parse(localStorage.getItem('listaUser')) || [];
  
  let userValid = null;

  listaUser.forEach((item) => {
    if (email.value == item.emailCad && password.value == item.passwordCad) {
      userValid = {
        nome: item.nomeCad,
        email: item.emailCad,
        password: item.passwordCad,
        telemovel: item.telemovel,
        pais: item.pais,
        morada: item.morada,
        descricao: item.descricao
      };
    }
  });

  const adminCredentials = JSON.parse(localStorage.getItem('adminCredentials')) || [
    { nome: 'Rui', email: 'rui.goncalves.900@gmail.com', password: '123456' },
    { nome: 'Bernardete', email: 'berna@123', password: '123456' },
    { nome: 'Leonardo', email: 'leo@123', password: '123456' }
  ];

  const admin = adminCredentials.find(admin => email.value == admin.email && password.value == admin.password);

  if (admin) {
    window.location.href = 'perfil_admin.html';

    let mathRandom = Math.random().toString(16).substr(2);
    let token = mathRandom + mathRandom;

    localStorage.setItem('token', token);
    localStorage.setItem('userLogado', JSON.stringify(admin));
  } else if (userValid) {
    window.location.href = 'perfil.html';
    
    let mathRandom = Math.random().toString(16).substr(2);
    let token = mathRandom + mathRandom;
    
    localStorage.setItem('token', token);
    localStorage.setItem('userLogado', JSON.stringify(userValid));
  } else {
    emailLabel.setAttribute('style', 'color: red');
    email.setAttribute('style', 'border-color: red');
    passwordLabel.setAttribute('style', 'color: red');
    password.setAttribute('style', 'border-color: red');
    msgError.setAttribute('style', 'display: block');
    msgError.innerHTML = 'Email ou Password incorretos';
    email.focus();
  }
}

