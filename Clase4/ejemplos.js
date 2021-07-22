//FUNCION SINGLE PULL
// function foo(){
//     console.log("Hola");
//     return 42;
// }

// const x = foo.call();
// console.log(x);

// GENERADORES/ITERADORES/MULTIPLE PULL

// function* hacedorIds(){
//      var indice = 0;
//      while(true){
//         yield indice++;
//      }
// }

// var gen = hacedorIds();

// console.log(gen.next().value);

// function crearIterador(arr){
//     var siguienteIndice = 0;

//     return {
//         next: function(){
//             return siguienteIndice < arr.length ?
//             {value: arr[siguienteIndice++], done: false}:
//             {done:true};
//         }
//     }
// }

// var it = crearIterador(['na', 'cho','havelka']);

// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().done);




function* hacedorIds(min, max){
     var indice = 0;
     while(true){
        yield indice++;        

        let rn = Math.random() * (max - min) + min;

        console.log(`Orden:${indice}, Numero: ${rn}, ${Date.now()} `);

     }





}

var gen = hacedorIds(1, 10);

console.log(gen.next().value);