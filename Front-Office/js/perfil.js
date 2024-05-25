document.addEventListener('DOMContentLoaded', function () {
    // Load user data from local storage
    const userData = JSON.parse(localStorage.getItem('userData')) || {
        fullName: 'João Pedro da Rocha Fernandes',
        email: 'example@example.com',
        phone: '',
        country: '',
        address: '',
        description: 'Exemplo de Descrição'
    };

    // Populate fields with user data
    document.getElementById('fullName').textContent = `Nome Completo: ${userData.fullName}`;
    document.getElementById('email').textContent = `Email: ${userData.email}`;
    document.getElementById('phone').value = userData.phone;
    document.getElementById('country').value = userData.country;
    document.getElementById('address').value = userData.address;
    document.getElementById('description').value = userData.description;
    document.getElementById('descriptionDisplay').textContent = userData.description;

    // Save user data to local storage on form submit
    document.getElementById('profileForm').addEventListener('submit', function (event) {
        event.preventDefault();
        
        const updatedUserData = {
            ...userData,
            phone: document.getElementById('phone').value,
            country: document.getElementById('country').value,
            address: document.getElementById('address').value,
            description: document.getElementById('description').value
        };

        localStorage.setItem('userData', JSON.stringify(updatedUserData));

        // Update description display
        document.getElementById('descriptionDisplay').textContent = updatedUserData.description;

        alert('Dados guardados com sucesso!');
    });
});
