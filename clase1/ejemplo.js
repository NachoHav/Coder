class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
        Persona.contador++;
    }

    static contador = 0;


    saludo(){
        return(`Hola, soy la persona nro: ${Persona.contador} y mi nombre es: ${this.nombre + " " + this.edad}`);
    }
}

let juan = new Persona('Juan', 23);

console.log(juan.nombre);
console.log(juan.edad);
console.log(juan.saludo());

let pedro = new Persona('Pedro', 29);
console.log(pedro.saludo())