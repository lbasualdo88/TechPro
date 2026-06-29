const params = new URLSearchParams(window.location.search);
const modelo = params.get('modelo');

if (modelo) {
    actualizarProducto(modelo);
}

function actualizarProducto(modelo) {
    const imagen = document.getElementById('producto-imagen');
    const nombreCorto = document.getElementById('producto-nombre-corto');
    const nombre = document.getElementById('producto-nombre');
    const precio = document.getElementById('producto-precio');
    const subtotal = document.getElementById('subtotal-valor');
    const total = document.getElementById('total-valor');

    let src, nombreTexto, nombreCortoTexto, precioValor;

    switch (modelo) {
        case 'x':
            src = 'img/modelo-x.svg';
            nombreTexto = 'Audífonos TechPRO X';
            nombreCortoTexto = 'TechPRO X';
            precioValor = 299;
            break;
        case 'y':
            src = 'img/modelo-y.svg';
            nombreTexto = 'Audífonos TechPRO Y';
            nombreCortoTexto = 'TechPRO Y';
            precioValor = 399;
            break;
        case 'z':
            src = 'img/modelo-z.svg';
            nombreTexto = 'Audífonos TechPRO Z';
            nombreCortoTexto = 'TechPRO Z';
            precioValor = 499;
            break;
        default:
            return;
    }

    imagen.src = src;
    imagen.alt = nombreTexto;
    nombre.textContent = nombreTexto;
    nombreCorto.textContent = nombreCortoTexto;
    precio.textContent = precioValor;
    subtotal.textContent = `$${precioValor}`;
    total.textContent = `$${precioValor}`;
}
