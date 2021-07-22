// class Usuario{
//     constructor(nombre, apellido){
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.libros = new Array();
//         this.mascotas = new Array();
//     }

//     getFullName(){
//         return `Nombre y apellido: ${this.nombre} ${this.apellido}`;
//     }

//     addMascota(masc){
//         this.mascotas.push(masc);
//     }

//     getMascotas(){
//         let cont = 0;
        
//         // for(masc of this.mascotas){
//         //     cont++;
//         // }

//         for(let i = 0; i < this.mascotas.length; i++){
//             cont++;
//         }

//         return cont;
//     }

//     addBook(book, autor){

//         let obj = {nombre: book, autor: autor}

//         this.libros.push(obj);
//     }

//     getBooks(){
//         // return `Nombre libro: ${this.libros.map => this.libros.nombre}`;
//         // return this.libros.map(libro => this.libros.nombre);
//         const nombres = [];
//         for(const libro of this.libros){
//             nombres.push(libro.nombre);
//         }
//         return nombres;

//     }
// }

function Usuario(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = new Array();
    this.mascotas = new Array();
}

Usuario.prototype.getFullName = function(){
    return `Nombre y apellido: ${this.nombre + " " + this.apellido}`
}

Usuario.prototype.addMascota = function(mascota){
    this.mascotas.push(mascota);
}

Usuario.prototype.getMascotas = function(){
    let cont = 0;
    
    for(mascota of this.mascotas){
        cont++;
    }
    return cont;
}

Usuario.prototype.addBook = function(libro, autor){
    const obj = {nombre: libro, autor: autor}
    this.libros.push(obj);
}

Usuario.prototype.getBooks = function(){
    const nombres = [];

    for(var libro of this.libros){
        nombres.push(libro.nombre);
    }

    return nombres;
}


 let Carlos = new Usuario("Carlos", "Godoy");

 Carlos.addBook('El Señor de los anillos', "Tolkien");
 Carlos.addBook('Why we Sleep?', "Matthew Walker");


Carlos.addMascota('Perro');
Carlos.addMascota('Gato');


console.log(`${Carlos.getFullName()} 
mascotas: ${Carlos.getMascotas()} 
libros: ${Carlos.getBooks()}`);