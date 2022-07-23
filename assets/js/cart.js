const filasDeProductosComprados = document.getElementById('filasDeProductos');
const valorTotalCarrito = document.getElementById('totalCarrito');

let carritoDeCompras = [];

localStorage.getItem('carrito') && (carritoDeCompras = JSON.parse(localStorage.getItem('carrito')));

const totalCarrito = (carritoDeCompras) => {
    valorTotalCarrito.innerText = carritoDeCompras.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
}

const mostrarProductos = (carritoDeCompras) => {

    carritoDeCompras.forEach(prod => {
        let totalProductos = prod.cantidad * prod.precio;
        let crearfilasDeProductosComprados = document.createElement('tr');
        crearfilasDeProductosComprados.innerHTML += `                                                
                                                <tr>
                                                    <td id="nombre-producto">${prod.nombre}</td>
                                                    <td id="valor-producto">${prod.precio}</td>
                                                    <td id="cantidad">${prod.cantidad}</td>                                                    
                                                    <td id="valor-producto">$ ${totalProductos}</td>                                                    
                                                </tr>
                                            `

        filasDeProductosComprados.appendChild(crearfilasDeProductosComprados);
        totalCarrito(carritoDeCompras);

    });
}

document.addEventListener("DOMContentLoaded", () => {

    mostrarProductos(carritoDeCompras);

    setTimeout(() => {
        Swal.fire(
            '¡Gracias por tu compra!',
            'Regresa pronto!',
            'success'
        )
    }, 2000);
})