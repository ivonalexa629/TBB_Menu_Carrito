const contenedorTarjetas = document.getElementById("productos-container");


function crearTarjetasProductosInicio(productos){
    productos.forEach(producto => {
        const nuevaComida = document.createElement("div");
        nuevaComida.classList = "tarjeta-producto";
        nuevaComida.innerHTML =  `
        <img src="./img/productos/${producto.id}.jpg">
        <h3>${producto.nombre}</h3>
        <p>${producto.precio}</p>
        <button>Agregar al carrito</button>      
        `    
        contenedorTarjetas.appendChild(nuevaComida); 
        nuevaComida.getElementsByTagName("button")[0].addEventListener("click",() => agregarAlCarrito(producto));
        
    });
}

crearTarjetasProductosInicio(comida);