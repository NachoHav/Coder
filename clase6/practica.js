const fs = require("fs");

const pathArchivo = './fyh.txt';

const fyh =  new Date();


try{
    fs.writeFileSync(pathArchivo, fyh.toString());
    const data = fs.readFileSync(pathArchivo, 'utf-8');
    // fs.writeFileSync(pathArchivo, "Nuevo textoasddd")
    console.log(data);

}catch(err){
    console.log('Error en la lectura sincronica');
}

