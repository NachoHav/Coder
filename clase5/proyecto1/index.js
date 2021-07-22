let aleatorio = (max, min) => {
        let num = Math.floor((Math.random() * (max - min + 1) + min));       
        return num;        
    }

// console.log(Math.floor(aleatorio(10, 1)));



let res = (max, min) => {
    const obj = {};
    for(let i = 0; i < 10000; i++){
        let num = aleatorio(max, min);

        if (obj[num]) Math.floor(obj[num] += 1);
        else obj[num] = 1;
    }
    console.log(obj);
}




res(32, 0);
