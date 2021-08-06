export let productos = [
  { id: 1, title: 'Regla', price: 321, thumbnail: 'imagen1' },
  { id: 2, title: 'Producto 2', price: 431, thumbnail: 'imagen2' },
];

export class Producto {
  constructor(title, price, id) {
    this.title = title;
    this.price = price;
    this.id = id;
  }
}
