document.addEventListener('DOMContentLoaded', (event) => {
    let userLogado = JSON.parse(localStorage.getItem('userLogado'));

    if (userLogado) {
        document.getElementById('userName').textContent = userLogado.nome;
        document.getElementById('userEmail').textContent = userLogado.email;
        document.getElementById('userNameHeader').textContent = userLogado.nome;
        document.getElementById('userPhone').textContent = userLogado.telemovel;
        document.getElementById('userCountry').textContent = userLogado.pais;
        document.getElementById('userAddress').textContent = userLogado.morada;
    }

    document.getElementById('editPhone').addEventListener('click', () => editField('userPhone', 'telemovel'));
    document.getElementById('editCountry').addEventListener('click', () => editField('userCountry', 'pais'));
    document.getElementById('editAddress').addEventListener('click', () => editField('userAddress', 'morada'));
});

function editField(elementId, localStorageKey) {
    const element = document.getElementById(elementId);
    const currentValue = element.textContent;
    const newValue = prompt('Edit value:', currentValue);
    if (newValue !== null && newValue !== currentValue) {
        element.textContent = newValue;
        let userLogado = JSON.parse(localStorage.getItem('userLogado'));
        userLogado[localStorageKey] = newValue;
        localStorage.setItem('userLogado', JSON.stringify(userLogado));
    }
}