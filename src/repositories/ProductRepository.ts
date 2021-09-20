import Product from '../models/Product';

export default class ProductRepository {
  private products: Array<Product>;

  constructor() {
    this.products = [];
  }

  public findAll(): Array<Product> {
    return this.products;
  }

  public findByCode(code: number): Product | undefined {
    return this.products.find(v => v.code === code);
  }

  // // Criar a rota apagar 
  // public delete(code: number): Product | undefined{
  //   const produto = this.products.find(v => v.code == code)
  //   const index = this.products.findIndex(v => v.code == code)
  //   this.products.splice(index, 1)
  //   return produto
  // }

  public save({
    buyPrice,
    code,
    category,
    description,
    lovers,
    sellPrice,
    tags,
  }: Product): Product {
    const product = new Product({
      buyPrice,
      code,
      category,
      description,
      lovers,
      sellPrice,
      tags,
    });
    this.products.push(product);
    return product;
  }
}