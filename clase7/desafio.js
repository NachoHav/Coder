import express from 'express';
// const fs = require("fs/promises");
import fs from 'fs/promises';
const path = './productos.txt';

const app = express();

let visitasItems = 0;
let visitasItemR = 0;

app.get('/items', async (req, res) =>{
    try{

        const data =  await fs.readFile(path, 'utf-8');

        const obj = JSON.parse(data);

        let arr = {
            items: obj,
            totalItems: obj.length
        }
        visitasItems++;
        res.json(arr);
        
    }catch(err){
        console.log(err);
    }
});

app.get('/item-random', async (req, res) =>{
    try{
        const data =  await fs.readFile(path, 'utf-8');
        const obj = JSON.parse(data);

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min);
          }


        let rand = getRandomInt(0, obj.length);

        let objRand = obj[rand];
        let arr = {
            item: objRand
        }
        visitasItemR++;
        res.json(arr);

    }catch(err){
        console.log(err);
    }

});

app.get('/visitas', (req, res) =>{
    let resp = {
        visitas:{
            items: visitasItems,
            item: visitasItemR
        }
    }

    res.json(resp);
});


const server = app.listen(8080, () => {
    console.log('Escuchando desde puerto 8080');
});

server.on('error', error => console.log(`Error en el servidor. ${error}`));