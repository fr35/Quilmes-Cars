let carritoDeCompras1 = []
let carritoDeCompras2 = []
let carritoDeCompras3 = []
let carritoDeCompras4 = []

const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');

const botonTerminar = document.getElementById('terminar');
const finCompra = document.getElementById('fin-compra');

const contadorCarrito = document.getElementById('contador-carrito');
const precioTotal = document.getElementById('precioTotal');

const buscador = document.getElementById('search');


mostrarProductos()


// Logica Ecommerce
function mostrarProductos() {
    stockProductosOfertaColumna1.forEach(el=> {
        let div = document.createElement('div')
        div.className = 'col border border-2 bg-light me-3'
        div.innerHTML = `   <img src="${el.img}" class="w-50">
                            <p class="autos-tittle">${el.nombre}</p>
                            <p class="autos-price">Precio</p>
                            <p class="autos-tittle">$${el.precio}</p>
                            <button id="boton${el.id}" type="submit" class="btn btn-danger mb-3"></a>Comprar</button>`
        const padreColumna1 = document.querySelector('.column-1')
        padreColumna1.appendChild(div)
        let btnAgregar = document.getElementById(`boton${el.id}`)
        btnAgregar.addEventListener('click', ()=>{
            alert("Ha comprado "+`${el.nombre}`+" por el valor de $"+`${el.precio}`)
        })
        
    })

    stockProductosOfertaColumna2.forEach(el=> {
        let div = document.createElement('div')
        div.className = 'col border border-2 bg-light me-3'
        div.innerHTML = `   <img src="${el.img}" class="w-50">
                            <p class="autos-tittle">${el.nombre}</p>
                            <p class="autos-price">Precio</p>
                            <p class="autos-tittle">$${el.precio}</p>
                            <button id="boton${el.id}" type="submit" class="btn btn-danger mb-3"></a>Comprar</button>`
        const padreColumna1 = document.querySelector('.column-2')
        padreColumna1.appendChild(div)
        let btnAgregar = document.getElementById(`boton${el.id}`)
        btnAgregar.addEventListener('click', ()=>{
            alert("Ha comprado "+`${el.nombre}`+" por el valor de $"+`${el.precio}`)
        })
    })

    stockProductosOfertaColumna3.forEach(el=> {
        let div = document.createElement('div')
        div.className = 'col border border-2 bg-light me-3'
        div.innerHTML = `   <img src="${el.img}" class="w-50">
                            <p class="autos-tittle">${el.nombre}</p>
                            <p class="autos-price">Precio</p>
                            <p class="autos-tittle">$${el.precio}</p>
                            <button id="boton${el.id}" type="submit" class="btn btn-danger mb-3"></a>Comprar</button>`
        const padreColumna1 = document.querySelector('.column-3')
        padreColumna1.appendChild(div)
        let btnAgregar = document.getElementById(`boton${el.id}`)
        btnAgregar.addEventListener('click', ()=>{
            alert("Ha comprado "+`${el.nombre}`+" por el valor de $"+`${el.precio}`)
        })
    })

    stockProductosOfertaColumna4.forEach(el=> {
        let div = document.createElement('div')
        div.className = 'col border border-2 bg-light me-3'
        div.innerHTML = `   <img src="${el.img}" class="w-50">
                            <p class="autos-tittle">${el.nombre}</p>
                            <p class="autos-price">Precio</p>
                            <p class="autos-tittle">$${el.precio}</p>
                            <button id="boton${el.id}" type="submit" class="btn btn-danger mb-3"></a>Comprar</button>`
        const padreColumna1 = document.querySelector('.column-4')
        padreColumna1.appendChild(div)
        let btnAgregar = document.getElementById(`boton${el.id}`)
        btnAgregar.addEventListener('click', ()=>{
            alert("Ha comprado "+`${el.nombre}`+" por el valor de $"+`${el.precio}`)
        })
    })
}

