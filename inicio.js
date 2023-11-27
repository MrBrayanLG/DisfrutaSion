function toggleOptions() {
    var optionsContainer = document.getElementById("optionsContainer");
    optionsContainer.style.display = (optionsContainer.style.display === "block") ? "none" : "block";
}

function goToProfile() {
    alert("Redirigiendo al perfil...");
}

function cerrarSesion() {
    window.location.href = 'index.html';

}
document.addEventListener("DOMContentLoaded", function () {
    const nombreUsuario = localStorage.getItem('nombreUsuario');
    if (nombreUsuario) {
        const saludoUsuarioElement = document.getElementById('saludo-usuario');
        if (saludoUsuarioElement) {
            saludoUsuarioElement.textContent = `¡Bienvenido, ${nombreUsuario}!`;
        }
    }
});







window.onload = function () {
    cargarReseñas();
};

function agregarReseña() {
    var nombre = document.getElementById('nombre').value;
    var comentario = document.getElementById('reseña').value;

    if (nombre && comentario) {
        var nuevaReseña = document.createElement('div');
        nuevaReseña.innerHTML = '<div class="resena"><h3 class="cliente-nombre">' + nombre + '</h3><p class="cliente-resena">' + comentario + '</p></div>';

        document.getElementById('resenas-container').appendChild(nuevaReseña);

        document.getElementById('nombre').value = '';
        document.getElementById('reseña').value = '';

        guardarReseña(nombre, comentario);
    } else {
        alert('Por favor, completa ambos campos antes de enviar la reseña.');
    }
}

