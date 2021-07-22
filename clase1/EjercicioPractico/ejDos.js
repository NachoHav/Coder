class Usuario{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = new Array();
        this.mascotas = new Array();
    }

    getFullName(){
        return `Nombre y apellido: ${this.nombre} ${this.apellido}`;
    }

    addMascota(masc){
        this.mascotas.push(masc);
    }

    getMascotas(){
        let cont = 0;
        
        for(let masc of this.mascotas){
            cont++;
        }

        // for(let i = 0; i < this.mascotas.length; i++){
        //     cont++;
        // }

        return cont;
    }

    addBook(book, autor){

        let obj = {nombre: book, autor: autor}

        this.libros.push(obj);
    }

    getBooks(){
        const nombres = [];
        for(const libro of this.libros){
            nombres.push(libro.nombre);
        }
        return nombres;

    }
}

// function Usuario(nombre, apellido, libros){
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.libros = libros;
//     this.mascotas = new Array();
// }

// Usuario.prototype.getFullName = function(){
//     return `Nombre y apellido: ${this.nombre + " " + this.apellido}`
// }

// Usuario.prototype.addMascota = function(mascota){
//     this.mascotas.push(mascota);
// }

// Usuario.prototype.getMascotas = function(){
//     let cont = 0;
    
//     for(mascota of this.mascotas){
//         cont++;
//     }
//     return cont;
// }


 let Carlos = new Usuario("Carlos", "Godoy");

 Carlos.addBook('El Señor de los anillos', "Tolkien");
 Carlos.addBook('Why we Sleep?', "Matthew Walker");
//  console.log(Carlos.getBooks());

// console.log(Carlos.getFullName());
Carlos.addMascota('Perro');
Carlos.addMascota('Gato');
console.log(Carlos.getMascotas());


