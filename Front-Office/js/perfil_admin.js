document.addEventListener('DOMContentLoaded', (event) => {
    let adminLogado = JSON.parse(localStorage.getItem('userLogado'));

    if (adminLogado) {
        document.getElementById('adminName').textContent = adminLogado.nome;
        document.getElementById('adminEmail').textContent = adminLogado.email;
        document.getElementById('adminNameHeader').textContent = adminLogado.nome;
        document.getElementById('adminPhone').textContent = adminLogado.telemovel || 'N/A';
        document.getElementById('adminCountry').textContent = adminLogado.pais || 'N/A';
        document.getElementById('adminAddress').textContent = adminLogado.morada || 'N/A';
        document.getElementById('adminDescricao').textContent = adminLogado.descricao || 'N/A';
    }

    document.getElementById('editAdminPhone').addEventListener('click', () => editAdminField('adminPhone', 'telemovel'));
    document.getElementById('editAdminCountry').addEventListener('click', () => editAdminField('adminCountry', 'pais'));
    document.getElementById('editAdminAddress').addEventListener('click', () => editAdminField('adminAddress', 'morada'));
    document.getElementById('editAdminDescricao').addEventListener('click', () => editAdminField('adminDescricao', 'descricao'));
    
    document.getElementById('logoutButton').addEventListener('click', logout);
});

function editAdminField(elementId, localStorageKey) {
    const element = document.getElementById(elementId);
    const currentValue = element.textContent;
    const newValue = prompt('Edit value:', currentValue);
    if (newValue !== null && newValue !== currentValue) {
        element.textContent = newValue;
        let adminLogado = JSON.parse(localStorage.getItem('userLogado'));
        adminLogado[localStorageKey] = newValue;
        localStorage.setItem('userLogado', JSON.stringify(adminLogado));
        
        const adminCredentials = JSON.parse(localStorage.getItem('adminCredentials')) || [
            { nome: 'Rui', email: 'rui.goncalves.900@gmail.com', password: '123456' },
            { nome: 'Bernardete', email: 'berna@123', password: '123456' },
            { nome: 'Leonardo', email: 'leo@123', password: '123456' }
        ];

        const updatedAdminCredentials = adminCredentials.map(admin => {
            if (admin.email === adminLogado.email) {
                return {
                    ...admin,
                    [localStorageKey]: newValue
                };
            }
            return admin;
        });

        localStorage.setItem('adminCredentials', JSON.stringify(updatedAdminCredentials));
    }
}

function logout() {
    localStorage.removeItem('userLogado');
    localStorage.removeItem('token');
    window.location.href = 'login.html';
}
