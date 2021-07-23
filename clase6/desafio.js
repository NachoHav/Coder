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

            let arr = [];

          
            var keys = Object.keys(dataS);

            keys.forEach(function(key){
                arr.push(dataS[key]);
            });

            let id = dataS.length + 1;

            const obj = {
                "title": title,
                "price": price,
                "thumbnail": thumbnail,
                "id": id
            }
            
            arr.push(obj);
            

            await fs.writeFile(this.nombre,
            JSON.stringify(arr, null, '\t'));

            // console.log(arr);            

        }catch(err){
            console.log(err);
        }
    }

    borrar = async () => {
        try{
            fs.unlink(this.nombre);
        }catch(err){
            console.log(err);
        }
    }
}

let arc = new Archivo('./productos.txt');

arc.leer();
// arc.borrar();
// arc.guardar("Boligoma", 253.89, "image5");