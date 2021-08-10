/* eslint-disable linebreak-style */
/* eslint-disable prefer-const */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable object-curly-newline */
export let productos = [
  {
    id: 1,
    title: 'Regla',
    price: 250,
    thumbnail:
      'https://cdn1.iconfinder.com/data/icons/education-filled-outline-8/64/Education-Filled_2-256.png',
  },
  {
    id: 2,
    title: 'Calculadora',
    price: 1200,
    thumbnail:
      'https://cdn0.iconfinder.com/data/icons/shopping_icons_set2/256/2.png',
  },
  {
    id: 3,
    title: 'Lapicera',
    price: 100,
    thumbnail: 'https://cdn2.iconfinder.com/data/icons/bitsies/128/Pen-256.png',
  },
];

export class Producto {
  constructor(title, price, id) {
    this.title = title;
    this.price = price;
    this.id = id;
  }
}
