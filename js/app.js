let carritoDeCompras1 = []
let carritoDeCompras2 = []
let carritoDeCompras3 = []
let carritoDeCompras4 = []

const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');

const botonTerminar = document.getElementById('terminar');
const finCompra = document.getElementById('fin-compra');

const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

const buscador = document.getElementById('search');


mostrarProductos1()
mostrarProductos2()
mostrarProductos3()
mostrarProductos4()
recuperar()


// Funcion Ofertas Columna 1
function mostrarProductos1() {
    stockProductosOfertaColumna1.forEach(el=> {
        let div = document.createElement('div')
        div.className = 'col border border-2 bg-light me-3'
        div.innerHTML = `   <img src="${el.img}" class="w-50">
                            <p class="autos-tittle">${el.nombre}</p>
                            <p class="autos-price">Precio</p>
                            <p class="autos-tittle">$${el.precio}</p>
                            <button id="boton${el.id}" type="submit" class="btn btn-danger mb-3"></a>Agregar al Carrito</button>`
        const padreColumna1 = document.querySelector('.column-1')
        padreColumna1.appendChild(div)
        let btnAgregar = document.getElementById(`boton${el.id}`)
        btnAgregar.addEventListener('click',()=>{
            agregarAlCarrito1(el.id)
        })
    })
}
function agregarAlCarrito1(id) {
    let productoAgregar1 = stockProductosOfertaColumna1.find(item => item.id === id)
    carritoDeCompras1.push(productoAgregar1)
    mostrarCarrito(productoAgregar1)
    actualizarCarrito1()
    localStorage.setItem('carrito',JSON.stringify(carritoDeCompras1))
}
function mostrarCarrito(productoAgregar1) {
    let div = document.createElement('div')
    div.classList.add('carrito-oferta-1')
    div.innerHTML =    `<p>${productoAgregar1.nombre}</p>
                        <p>Precio: $${productoAgregar1.precio}</p>
                        <button id=eliminar${productoAgregar1.id} class="boton-eliminar"><i class="bi bi-trash-fill"></i></button>`
    const PadreCarritoOferta1 = document.querySelector('.carrito')
    PadreCarritoOferta1.appendChild(div)
    let btnEliminar = document.getElementById(`eliminar${productoAgregar1.id}`)
    btnEliminar.addEventListener('click', ()=>{
        btnEliminar.parentElement.remove()
        carritoDeCompras1 = carritoDeCompras1.filter(elemento => elemento.id !== productoAgregar1.id)
        actualizarCarrito1()
        localStorage.setItem('carrito', JSON.stringify(carritoDeCompras1))
    })
}
function actualizarCarrito1() {
    contadorCarrito.innerText = carritoDeCompras1.length
    precioTotal.innerText = carritoDeCompras1.reduce((acc, el)=> acc + el.precio, 0)
}
function recuperar() {
    let recuperarLS = JSON.parse(localStorage.getItem('carrito'))
    if (recuperarLS) {
        for (const elemento of recuperarLS) {
            mostrarCarrito(elemento)
            carritoDeCompras1.push(elemento)
            actualizarCarrito1()
        }
    }
}


// Funcion Ofertas Columna 2
function mostrarProductos2() {
    stockProductosOfertaColumna2.forEach(el=> {
        let div = document.createElement('div')
        div.className = 'col border border-2 bg-light me-3'
        div.innerHTML = `   <img src="${el.img}" class="w-50">
                            <p class="autos-tittle">${el.nombre}</p>
                            <p class="autos-price">Precio</p>
                            <p class="autos-tittle">$${el.precio}</p>
                            <button id="boton${el.id}" type="submit" class="btn btn-danger mb-3"></a>Agregar al Carrito</button>`
        const padreColumna2 = document.querySelector('.column-2')
        padreColumna2.appendChild(div)
        let btnAgregar = document.getElementById(`boton${el.id}`)
        btnAgregar.addEventListener('click',()=>{
            agregarAlCarrito2(el.id)
        })
    })
}
function agregarAlCarrito2(id) {
    let productoAgregar2 = stockProductosOfertaColumna2.find(item => item.id === id)
    carritoDeCompras2.push(productoAgregar2)
    mostrarCarrito(productoAgregar2)
    actualizarCarrito2()
    localStorage.setItem('carrito',JSON.stringify(carritoDeCompras2))
}
function mostrarCarrito(productoAgregar2) {
    let div = document.createElement('div')
    div.classList.add('carrito-oferta-2')
    div.innerHTML =    `<p>${productoAgregar2.nombre}</p>
                        <p>Precio: $${productoAgregar2.precio}</p>
                        <button id=eliminar${productoAgregar2.id} class="boton-eliminar"><i class="bi bi-trash-fill"></i></button>`
    const PadreCarritoOferta2 = document.querySelector('.carrito')
    PadreCarritoOferta2.appendChild(div)
    let btnEliminar = document.getElementById(`eliminar${productoAgregar2.id}`)
    btnEliminar.addEventListener('click', ()=>{
        btnEliminar.parentElement.remove()
        carritoDeCompras2 = carritoDeCompras2.filter(elemento => elemento.id !== productoAgregar2.id)
        actualizarCarrito2()
        localStorage.setItem('carrito', JSON.stringify(carritoDeCompras2))
    })
}
function actualizarCarrito2() {
    contadorCarrito.innerText = carritoDeCompras2.length
    precioTotal.innerText = carritoDeCompras2.reduce((acc, el)=> acc + el.precio, 0)
}
function recuperar() {
    let recuperarLS = JSON.parse(localStorage.getItem('carrito'))
    if (recuperarLS) {
        for (const elemento of recuperarLS) {
            mostrarCarrito(elemento)
            carritoDeCompras2.push(elemento)
            actualizarCarrito2()
        }
    }
}


// Funcion Ofertas Columna 3
function mostrarProductos3() {
    stockProductosOfertaColumna3.forEach(el=> {
        let div = document.createElement('div')
        div.className = 'col border border-2 bg-light me-3'
        div.innerHTML = `   <img src="${el.img}" class="w-50">
                            <p class="autos-tittle">${el.nombre}</p>
                            <p class="autos-price">Precio</p>
                            <p class="autos-tittle">$${el.precio}</p>
                            <button id="boton${el.id}" type="submit" class="btn btn-danger mb-3"></a>Agregar al Carrito</button>`
        const padreColumna3 = document.querySelector('.column-3')
        padreColumna3.appendChild(div)
        let btnAgregar = document.getElementById(`boton${el.id}`)
        btnAgregar.addEventListener('click',()=>{
            agregarAlCarrito3(el.id)
        })
    })
}
function agregarAlCarrito3(id) {
    let productoAgregar3 = stockProductosOfertaColumna3.find(item => item.id === id)
    carritoDeCompras3.push(productoAgregar3)
    mostrarCarrito(productoAgregar3)
    actualizarCarrito3()
    localStorage.setItem('carrito',JSON.stringify(carritoDeCompras3))
}
function mostrarCarrito(productoAgregar3) {
    let div = document.createElement('div')
    div.classList.add('carrito-oferta-3')
    div.innerHTML =    `<p>${productoAgregar3.nombre}</p>
                        <p>Precio: $${productoAgregar3.precio}</p>
                        <button id=eliminar${productoAgregar3.id} class="boton-eliminar"><i class="bi bi-trash-fill"></i></button>`
    const PadreCarritoOferta3 = document.querySelector('.carrito')
    PadreCarritoOferta3.appendChild(div)
    let btnEliminar = document.getElementById(`eliminar${productoAgregar3.id}`)
    btnEliminar.addEventListener('click', ()=>{
        btnEliminar.parentElement.remove()
        carritoDeCompras3 = carritoDeCompras3.filter(elemento => elemento.id !== productoAgregar3.id)
        actualizarCarrito3()
        localStorage.setItem('carrito', JSON.stringify(carritoDeCompras3))
    })
}
function actualizarCarrito3() {
    contadorCarrito.innerText = carritoDeCompras3.length
    precioTotal.innerText = carritoDeCompras3.reduce((acc, el)=> acc + el.precio, 0)
}
function recuperar() {
    let recuperarLS = JSON.parse(localStorage.getItem('carrito'))
    if (recuperarLS) {
        for (const elemento of recuperarLS) {
            mostrarCarrito(elemento)
            carritoDeCompras3.push(elemento)
            actualizarCarrito3()
        }
    }
}



// Funcion Ofertas Columna 4
function mostrarProductos4() {
    stockProductosOfertaColumna4.forEach(el=> {
        let div = document.createElement('div')
        div.className = 'col border border-2 bg-light me-3'
        div.innerHTML = `   <img src="${el.img}" class="w-50">
                            <p class="autos-tittle">${el.nombre}</p>
                            <p class="autos-price">Precio</p>
                            <p class="autos-tittle">$${el.precio}</p>
                            <button id="boton${el.id}" type="submit" class="btn btn-danger mb-3"></a>Agregar al Carrito</button>`
        const padreColumna4 = document.querySelector('.column-4')
        padreColumna4.appendChild(div)
        let btnAgregar = document.getElementById(`boton${el.id}`)
        btnAgregar.addEventListener('click',()=>{
            agregarAlCarrito4(el.id)
        })
    })
}
function agregarAlCarrito4(id) {
    let productoAgregar4 = stockProductosOfertaColumna4.find(item => item.id === id)
    carritoDeCompras4.push(productoAgregar4)
    mostrarCarrito(productoAgregar4)
    actualizarCarrito4()
    localStorage.setItem('carrito',JSON.stringify(carritoDeCompras4))
}
function mostrarCarrito(productoAgregar4) {
    let div = document.createElement('div')
    div.classList.add('carrito-oferta-2')
    div.innerHTML =    `<p>${productoAgregar4.nombre}</p>
                        <p>Precio: $${productoAgregar4.precio}</p>
                        <button id=eliminar${productoAgregar4.id} ><i class="bi bi-trash-fill"></i></button>`
    const PadreCarritoOferta4 = document.querySelector('.carrito')
    PadreCarritoOferta4.appendChild(div)
    let btnEliminar = document.getElementById(`eliminar${productoAgregar4.id}`)
    btnEliminar.addEventListener('click', ()=>{
        btnEliminar.parentElement.remove()
        carritoDeCompras4 = carritoDeCompras4.filter(elemento => elemento.id !== productoAgregar4.id)
        actualizarCarrito4()
        localStorage.setItem('carrito', JSON.stringify(carritoDeCompras4))
    })
}
function actualizarCarrito4() {
    contadorCarrito.innerText = carritoDeCompras4.length
    precioTotal.innerText = carritoDeCompras4.reduce((acc, el)=> acc + el.precio, 0)
}
function recuperar() {
    let recuperarLS = JSON.parse(localStorage.getItem('carrito'))
    if (recuperarLS) {
        for (const elemento of recuperarLS) {
            mostrarCarrito(elemento)
            carritoDeCompras4.push(elemento)
            actualizarCarrito2()
        }
    }
}



