
// Funcion para cargar la poblaciones cuando el usuario se registra. La enlazamos con el documento dades.js

function cargarPoblaciones() {
    
    const ciudad = document.getElementById('city');   // llamamos al ID del elemento que buscamos  

    //Creamos un bucle para pasar por la informacion del documento dades.js 
    datos.forEach(entrada => {
        const option = document.createElement('option');
        option.value = entrada.codigoPostal;
        option.textContent = `${entrada.ciudad}`;;
       ciudad.appendChild(option);
    });
}

//-------------------------------------------------------------------------------------------------------------------------

//Funcion para actualizar automaticamente el codigo postal en el registros una vez se seleccion la ciudad
 
 function actualizaCodigoPostal() {
    const ciudadSelect = document.getElementById('city');
    const codigoPostal = document.getElementById('postalCode');
    const codigoCiudadSeleccionada = ciudadSelect.value;  //guardamos el codigo postal de la ciudad seleccionada


    const ciudad = datos.find(parametro => parametro.codigoPostal === codigoCiudadSeleccionada); 

    if (ciudad) {
        codigoPostal.value = ciudad.codigoPostal;  ///si se encuentra la ciudad, el codigo postal se actualiza a la pantalla.
    }
}

//------------------------------------------------------------------------------------------------------------------------

    // Modificamos el correo para que se autocomplete con el dominio @uoc.edu

    function modificarCorreo() {
        const correo = document.getElementById('email');
        let correoModificado = correo.value; 
    
        // comprobamos si el usuario ha escrito @
        if (correoModificado.includes('@')) { 
            correoModificado = correoModificado.replace('@', '@uoc.edu');  // cambiamos '@' con '@uoc.edu'
            correo.value = correoModificado;  // volvemos a assignar el valor de entrada
        }
    }
 //------------------------------------------------------------------------------------------------------------------------
   
// Funcion para guardar el usuario
function saveUser() {

    const nombre = document.getElementById('name').value;
    const apellito = document.getElementById('surname').value;
    const direccion = document.getElementById('address').value;
    const ciudad = document.getElementById('city').value;
    const codigoPostal = document.getElementById("postalCode").value;
    const correo = document.getElementById('email').value;
    const usuario = document.getElementById('user').value;
    const contraseña = document.getElementById('password').value;
      
    // Validaciones
    // Nombre, apellito, direccion y usuario no puedes estar vacios: 
    if (!nombre || !apellito || !direccion || !usuario) {
        alert('Nom, Cognoms, Adreça i Usuari no poden estar buits.');
        return;
    }

    // Verificamos si el correo esta bien escrito (email@dominio.com.)
    const correoValido = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!correoValido.test(correo)) {
        alert('Correo no valido. Necesitas un correo valido para registrarte. Ejemplo: email@dominio.com');
        return;
    }


    // Verficamos que la contraseña este bien creada. Minimo 8 caracteres, letras, numeros y al menos un caracter especial.
    const contraseñaPattern =/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/;
    
    if (!contraseñaPattern.test(contraseña)) {
        alert('Contraseña incorrecta. Necesitas un minimo de 8 caracteres, letras, numeros y al menos un caracter especial.');
        return;
    }



    // ahora ya se pueden guardar los datos del usuario al localstorage
 

// una vez tenga todos los elementos necesario creo un nuevo usuarios utilizando la classe User 
const newUser = new User(nombre, apellito, direccion, ciudad, codigoPostal, correo, usuario, contraseña);


//guardamos el usuarios al localStorage
    localStorage.setItem(usuario, JSON.stringify(newUser));

    // Una vez registrado nos pasa a la pagina index (login) para poder entrar a la aplicacion 
    console.log('Usuario guardado.');
    window.location.href = 'index.html';
}
//llamamos a la funcion cargarPoblaciones cuando el documento este cargado
document.addEventListener('DOMContentLoaded', cargarPoblaciones);
