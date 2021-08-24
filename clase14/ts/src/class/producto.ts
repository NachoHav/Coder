export default class Producto {
  title;
  price;
  thumbnail;
  id;
  constructor(title: string, price: number, thumbnail: string, id: number) {
    this.title = title;
    this.price = price;
    this.thumbnail = thumbnail;
    this.id = id;
  }
}
