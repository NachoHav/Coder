const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;
const division = (a, b) => a / b;
const modulo = (a, b) => a % b;

let operacion = ( n1,  n2,  op) => {

    switch(op){
        case 'suma':
             return suma(n1,n2);
        case 'resta':
            return resta(n1,n2);
        case 'multiplicacion':
            return multiplicacion(n1,n2);
        case 'division':
            return division(n1,n2);
        case 'modulo':
            return modulo(n1, n2);
    }

}

console.log(operacion(2,23, 'multiplicacion'));