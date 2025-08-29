const inputProducto = document.getElementById('entradaProducto');
const botonAñadir = document.getElementById('btnAñadir');
const listaProductos = document.getElementById('lista');

botonAñadir.addEventListener('click', () => {
    const texto = inputProducto.value.trim();
    if (texto === '') return;

    const li = document.createElement('li');
    li.textContent = texto;

    // se crea el boton "eliminar"
    const btnQuitar = document.createElement('button');
    btnQuitar.textContent = 'Eliminar';
    btnQuitar.style.marginLeft = '10px';

    // accion del boton "eliminar"
    btnQuitar.addEventListener('click', () => {
        listaProductos.removeChild(li);
    });

    li.appendChild(btnQuitar);
    listaProductos.appendChild(li);

    inputProducto.value = '';
});
