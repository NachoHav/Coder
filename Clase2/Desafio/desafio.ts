function operacion(n1: number, n2: number, op: string){
    return new Promise((resolve, reject) =>{
        import('./funciones.js').then((modulo) => {
            if(op == 'suma') resolve(modulo.suma(n1, n2));
            else resolve(modulo.resta(n1, n2));
        });
    });
};

let operaciones = () =>{
    operacion(10, 20, 'suma')
        .then((resultado) =>{
            console.log(resultado);
        });

    operacion(20, 10, 'resta')
        .then((resultado) =>{
            console.log(resultado);
        })
    .catch((error) => console.log(error));
}

operaciones();