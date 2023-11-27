







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

function guardarReseña(nombre, comentario) {
    var reseñasGuardadas = JSON.parse(localStorage.getItem('reseñas')) || [];

    reseñasGuardadas.push({ nombre: nombre, comentario: comentario });

    localStorage.setItem('reseñas', JSON.stringify(reseñasGuardadas));
}

function cargarReseñas() {
    var reseñasGuardadas = JSON.parse(localStorage.getItem('reseñas')) || [];

    var contenedorReseñas = document.getElementById('resenas-container');
    reseñasGuardadas.forEach(function (reseña) {
        var nuevaReseña = document.createElement('div');
        nuevaReseña.innerHTML = '<div class="resena"><h3 class="cliente-nombre">' + reseña.nombre + '</h3><p class="cliente-resena">' + reseña.comentario + '</p></div>';
        contenedorReseñas.appendChild(nuevaReseña);
    });
}
