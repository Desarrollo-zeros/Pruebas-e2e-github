document.getElementById('registroForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById("message");
    // Validación básica
    if (username === '' || email === '' || password === '') {
        alert('Todos los campos son obligatorios');
        return;
    }
    if(email.includes("inexistente.com")){
        if(message){
            message.innerHTML = '<p>Usuario no registrado</p>';
        }
        return;
    }

    // Guardar en localStorage
    const user = {
        username: username,
        email: email,
        password: password
    };

    localStorage.setItem('user', JSON.stringify(user));

    if(message){
        message.innerHTML = '<p>Usuario registrado con éxito</p>';
    }
    alert('Usuario registrado con éxito');

    // Limpiar formulario
    document.getElementById('registroForm').reset();
});
