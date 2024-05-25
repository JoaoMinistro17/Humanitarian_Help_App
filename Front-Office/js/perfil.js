document.addEventListener('DOMContentLoaded', (event) => {
    let userLogado = JSON.parse(localStorage.getItem('userLogado'));
  
    if (userLogado) {
      document.getElementById('userName').textContent = userLogado.nome;
      document.getElementById('userEmail').textContent = userLogado.email;
      document.getElementById('userNameHeader').textContent = userLogado.nome;
    }
});
