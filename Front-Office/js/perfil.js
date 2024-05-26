document.addEventListener('DOMContentLoaded', (event) => {
    let userLogado = JSON.parse(localStorage.getItem('userLogado'));

    if (userLogado) {
        document.getElementById('userName').textContent = userLogado.nome;
        document.getElementById('userEmail').textContent = userLogado.email;
        document.getElementById('userNameHeader').textContent = userLogado.nome;
        document.getElementById('userPhone').textContent = userLogado.telemovel || 'N/A';
        document.getElementById('userCountry').textContent = userLogado.pais || 'N/A';
        document.getElementById('userAddress').textContent = userLogado.morada || 'N/A';
        document.getElementById('descricao').textContent = userLogado.descricao || 'N/A';
    }

    document.getElementById('editPhone').addEventListener('click', () => editField('userPhone', 'telemovel'));
    document.getElementById('editCountry').addEventListener('click', () => editField('userCountry', 'pais'));
    document.getElementById('editAddress').addEventListener('click', () => editField('userAddress', 'morada'));
    document.getElementById('editdescricao').addEventListener('click', () => editField('descricao', 'descricao'));
    
    document.getElementById('logoutButton').addEventListener('click', logout);
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
        
        // Atualizar a lista de usuários
        let listaUser = JSON.parse(localStorage.getItem('listaUser')) || [];
        listaUser = listaUser.map(user => user.emailCad === userLogado.email ? {
            ...user,
            [localStorageKey]: newValue
        } : user);
        localStorage.setItem('listaUser', JSON.stringify(listaUser));
    }
}

function logout() {
    localStorage.removeItem('userLogado');
    localStorage.removeItem('token');
    window.location.href = 'login.html';
}
