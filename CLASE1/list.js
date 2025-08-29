let inputProducto = document.getElementById("entradaProducto");
let botonAñadir = document.getElementById("btnAñadir");
let listaProductos = document.getElementById("lista");

botonAñadir.onclick = function() {
    let texto = inputProducto.value;
    if (texto == "") {
        return;
    }

    let li = document.createElement("li");
    li.innerText = texto;

    let btnQuitar = document.createElement("button");
    btnQuitar.innerText = "Eliminar";

    btnQuitar.onclick = function() {
        listaProductos.removeChild(li);
    }

    li.appendChild(btnQuitar);
    listaProductos.appendChild(li);

    inputProducto.value = "";
}
