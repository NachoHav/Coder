import http from 'http';

const res = () =>{

    let id = () => {
        return Math.floor((Math.random() * (10 - 1 + 1) + 1));
    }

    let titulo = () =>{
        return "Producto: " + Math.floor((Math.random() * (10 - 1 + 1) + 1));
    }

    let price = () =>{
        return (Math.random() * (9999.99 - 0.00 + 1) + 0.00);
    }

    let foto = () =>{
        return "Foto" + (Math.random() * (10 - 1 + 1) + 1);
    }


    const obj = {
        id: id(),
        title: titulo(),
        price: price().toFixed(2),
        thumbnail: foto(),

    }

    return obj;
}


const server = http.createServer((request, response) =>{

   try{

    response.end(JSON.stringify(res()));
   }
   catch(error){
    response.end(error);
   }


});

server.listen(8080, () =>{
    console.log("Escuchando desde el puerto 8080");
})