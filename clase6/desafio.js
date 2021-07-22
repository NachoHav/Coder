const fs = require("fs/promises");
class Archivo{
    
    constructor(nombre){
        this.nombre = nombre;
    }

    leer = async () =>{
        const data = await fs.readFile(this.nombre, 'utf-8');

        // const obj = JSON.parse(data)

        console.log(data);
    }

    // guardar = async (title, price, thumbnail) =>{

    //     const data = await fs.readFile(this.nombre);
        

    //     const obj = {
    //         title: title,
    //         price: price,
    //         thumbnail: thumbnail,
    //         id: id
    //     }


    // }
}

let arc = new Archivo('./productos.txt');

arc.leer();