const fs = require("fs/promises");
class Archivo{
    
    constructor(nombre){
        this.nombre = nombre;
    }

    leer = async () =>{
        try{

            const data = await fs.readFile(this.nombre, 'utf-8');

            const obj = JSON.parse(data)
    
            console.log(obj);

        }catch(err){
            console.log(err);
        }
       
    }

    guardar = async (title, price, thumbnail) =>{
        try{
            const data = await fs.readFile(this.nombre);
        
            const dataS = JSON.parse(data);

            let id = dataS.length + 1;

            const obj = {
                "title": title,
                "price": price,
                "thumbnail": thumbnail,
                "id": id
            }
    
            fs.appendFile('./productos.txt',
            JSON.stringify(obj, null, '\t'));

            // console.log(obj);
            


        }catch(err){
            console.log(err);
        }
        
        


    }
}

let arc = new Archivo('./productos.txt');

arc.guardar("Borrador", "453.89", "image4");