const objeto = 
{meses: 
    ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],

    mostrarMeses: function(){
        return this.meses;
    },

    getNumeroMes: function(nombre){
        const resultado = this.meses.indexOf(nombre, 0) + 1;
        return resultado;
    },

    getLetrasMes: function(cant){
        let result = '';
        for(var i = 0; i < this.meses.length; i++){
            result += this.meses[i].substr(0, cant);
        }
        return result;
    }
}



// console.log(objeto.getNumeroMes('junio'));
// console.log(objeto.getLetrasMes(4));
