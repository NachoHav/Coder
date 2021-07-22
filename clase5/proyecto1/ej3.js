import http from 'http';


const msj = () =>{
    let getFechayHora = new Date();
    let getHora = getFechayHora.getHours();

    if(getHora > 6 && getHora < 12) {
        return 'Buenos dias';
    }
    else if(getHora > 13 && getHora < 19) {
        return 'Buenas tardes';
    }
    else{
        return 'Buenas noches';
    }

}

const server = http.createServer((request, response) =>{

   

    response.end(msj());
});

server.listen(8080, () =>{
    console.log("Escuchando desde el puerto 8080");
})