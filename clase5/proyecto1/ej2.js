const productos = [
    { id: 1, nombre: 'Escuadra', precio: 323.5 },
    { id: 2, nombre: 'Calculadora', precio: 234.1 },
    { id: 3, nombre: 'Globo Terraqueo', precio: 18.5 },
    { id: 4, nombre: 'Paleta Pintura', precio: 56.8 },
    { id: 5, nombre: 'Reloj', precio: 200 },
  ];

  
let obtener = (productos) => {
    // NOMBRE
    let nombres = productos.map((producto) => producto.nombre);
    nombres = nombres.join(", ")
    
    // PRECIOS
    let precios = productos.map((producto) => producto.precio);

    let total = 0;
    let promedio = 0;
    let menor = 0;
    let mayor = 0;

    for(let precio of precios){
        total += precio
        promedio++;

        if(precio < menor || menor == 0){
            menor = precio;
        }

        if(precio > mayor){
            mayor = precio;
        }
    }

    promedio = total / promedio;

    const obj = {
        Productos: nombres,
        Total: '$'+total.toFixed(2),
        Promedio: '$'+promedio.toFixed(2),
        Menor: '$'+menor.toFixed(2),
        Mayor: '$'+mayor.toFixed(2)
    }

    console.log(obj);
    
}

obtener(productos)