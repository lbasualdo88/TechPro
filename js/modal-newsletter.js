document.addEventListener('DOMContentLoaded', function () {

    const formulario = document.querySelector('.newsletter .formulario');
    const email = formulario.querySelector('input[type="text"]');
    const modal = document.getElementById('suscripcionModal');
    const mensaje = modal.querySelector('.modal-body p');

    const miModal = new bootstrap.Modal(modal);

    formulario.addEventListener('submit', function (e) {

        e.preventDefault();

        if (email.value.trim() === '') {
            alert('Por favor, ingresá tu correo electrónico.');
            return;
        }

        mensaje.textContent = '¡Te has suscripto exitosamente a nuestras actualizaciones!';

        miModal.show();

        email.value = '';

    });

});