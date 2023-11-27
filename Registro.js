
function guardarUsuario() {
    
    var nombre = document.getElementById("nombres").value;
    var apellido = document.getElementById("apellidos").value;
    var correo = document.getElementById("correo").value;
    var contraseña = document.getElementById("password").value;
    var genero = document.getElementById("genero").value;

    
    var usuario = {
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        contraseña: contraseña,
        genero: genero
    };

    
    var usuarioJSON = JSON.stringify(usuario);
    localStorage.setItem('usuario', usuarioJSON);
    localStorage.setItem('nombreUsuario', nombre);
    window.location.href = 'index.html';
}

function iniciarSesion() {
    
    var correo = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var usuarioJSON = localStorage.getItem('usuario');

    if (usuarioJSON) {
        
        var usuario = JSON.parse(usuarioJSON);

       
        if (correo === usuario.correo && password === usuario.contraseña) {
            
            window.location.href = 'Disfruta-Sión-Inicio.html';
        } else {
           
            mostrarMensajeDeAlerta('Cuenta no registrada o datos incorrectos.');
        }
    } else {
       
        mostrarMensajeDeAlerta('Cuenta no registrada o datos incorrectos.');
    }
}


const nombreUsuario = localStorage.getItem('nombreUsuario');
if (nombreUsuario) {
    const perfilLink = document.querySelector(".enlace-perfil");
    perfilLink.textContent = `PERFIL (${nombreUsuario})`;
}




function mostrarPopup(mensaje) {
    document.getElementById('popup-message').innerText = mensaje;
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function cerrarPopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function mostrarMensajeDeAlerta(mensaje) {
    mostrarPopup(mensaje);
}



