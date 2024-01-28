export class LegacyInventorySystem {
  private productCode: string;
  private productName: string;
  private stock: number;
  private price: number;

  constructor() {
    this.productCode = "ABC123";
    this.productName = "Old Product";
    this.stock = 50;
    this.price = 25.99;
  }

  public getProductCode() {
    return this.productCode;
  }

  public getProductName() {
    return this.productName;
  }

  public getStock() {
    return this.stock;
  }

  public getPrice() {
    return this.price;
  }
}