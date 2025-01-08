// Función para verificar los datos de login
function iniciarSession() {
    const usuario = document.getElementById('user').value;
    const contraseña = document.getElementById('password').value;

    const datosUsuario= localStorage.getItem(usuario);

    //comprobamos is el usuario esta en la localStorage 
    //si se encuentra pasamos a comprobar la contraseña 
    //si no se encuentra avisamos con una "Alert"

    if (datosUsuario) {
        const user = JSON.parse(datosUsuario);  
        
        // Comprobamos si la contraseña es correcta
        if (user.password === contraseña) {
            window.location.href = 'comics.html';   //si la contraseña es correcta pasamos a la pagina de comics 
        } else {
            alert('Contraseña incorrecta!');
        }
    } else {
        alert('Usuario no encontrado!');    
    }
}

