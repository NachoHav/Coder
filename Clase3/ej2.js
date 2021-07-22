const fin = () => console.log('Termine!');

const arr = [];

const mostrarLetras = (cadena, func, tiempo = 1000) => {

    const max = cadena.length;
    let contador = 0;
    

    return new Promise((resolve, reject) => {
        let timer = setInterval(() => {    
            console.log(cadena[contador]);
            contador++;
            arr.push(cadena[contador]);
    
            if(contador >= max){
                func();
                clearInterval(timer);
                resolve();
            }
        }, tiempo)        
    });

    
}

mostrarLetras("Bit", fin, 500)
    .then(() => mostrarLetras("coin", fin, 500))
    .then(() => mostrarLetras("ETH",fin, 500))
    .then(() => {console.log(`Proceso completo. Cantidad de letras: ${arr.length}`)});

    const mostrarPalabras = (texto, func, tiempo = 1000) => {
        return new Promise((resolve, reject) => {
            let timer = setInterval(() => {
                console.log(object);
            }, tiempo);
        })
    }
