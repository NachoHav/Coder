// import mom from 'moment';

const moment = require('moment');

const fechaNacimiento = moment('08-08-2000', 'DD-MM-YYYY');
const now = moment();

console.log('Hoy es', now.format('DD-MM-YYYY'));
console.log('Naci el', fechaNacimiento.format('DD-MM-YYYY'));


const añosVividos = now.diff(fechaNacimiento, 'years');
const diasVividos = now.diff(fechaNacimiento, 'days');

console.log(añosVividos);
console.log(diasVividos);


