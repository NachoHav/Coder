var valores = [true, 5, false, "hola", "adios", 2];

function masCaracteres(array){
    let mayor = "";
    for(let i = 0; i < valores.length; i++){
        if(array[i].length > mayor.length){
            mayor = array[i];
        }
    }
    console.log(mayor);
}

function encontrarFalse(array){
    for(let i=0; i < valores.length; i++){
        if(array[i] == false && array[i]){
            console.log(i);
        }
    }
}


