/* eslint-disable eqeqeq */
/* eslint-disable class-methods-use-this */
/* eslint-disable prefer-const */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable import/prefer-default-export */
export let productos = [
  { id: 1, title: 'Producto 1', price: 321, thumbnail: 'imagen1' },
  { id: 2, title: 'Producto 2', price: 431, thumbnail: 'imagen2' },
];

export class Producto {
  constructor(title, price, id) {
    this.title = title;
    this.price = price;
    this.id = id;
  }

  //   listar(dato) {
  //     return dato;
  //   }

  //   listarId(id) {
  //     const producto = productos.find((idProd) => idProd.id == id);
  //     return producto;
  //   }

  //   guardar(dato) {
  //     productos.push({
  //       id: productos.length + 1,
  //       title: dato.title,
  //       price: dato.price,
  //     });
  //   }

  //   eliminar(id) {
  //     productos.splice(id - 1, 1);
  //   }
}
