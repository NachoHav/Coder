import express from 'express';
// const fs = require("fs/promises");
import fs from 'fs/promises';
const path = './productos.txt';

const app = express();

// let visitas = 0;

// app.get('/', function(req, res){
//     console.log('request recibido');
//     res.json("<h1>Bienvenidos al servidor express</h1>");
// });

// app.get('/visitas', (req, res) =>{    
//     console.log('Request recibido ' + visitas);
//     visitas++;
//     res.json(`La cantidad de visitas es: ${visitas}`);
// });

// app.get('/fyh', (req, res) => {
//     console.log('Request recibido');
//     res.json(`fyh: ${moment()}`)
// })



// const server = app.listen(8080, () =>{
//     console.log('Ejemplo en puerto 8080')
// });

// server.on("error", error => console.log(`Error en el servidor. ${error}`));


app.get('/items', async (req, res) =>{
    try{

        const data =  await fs.readFile(path, 'utf-8');

        const obj = JSON.parse(data);


        // res.json(`{items: [${obj}], Cantidad: ${obj.length}}`);
        let arr = {
            items: obj,
            totalItems: obj.length
        }
        res.json(arr);

        

    }catch(err){
        console.log(err);
    }
});

app.get('/item-random', async (req, res) =>{
    try{
        const data =  await fs.readFile(path, 'utf-8');
        const obj = JSON.parse(data);

        let rand = Math.floor(Math.random() * (obj.length - 1 + 1) + 1);

        let objRand = obj[rand];
        let arr = {
            item: objRand
        }
        // console.log(rand);
        res.json(arr);

    }catch(err){
        console.log(err);
    }

});


const server = app.listen(8080, () => {
    console.log('Escuchando desde puerto 8080');
});

server.on('error', error => console.log(`Error en el servidor. ${error}`));