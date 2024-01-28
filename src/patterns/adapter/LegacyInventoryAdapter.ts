import { ECommerceSystem } from "./ECommerceSystem";
import { LegacyInventorySystem } from "./LegacyInventorySystem";

export class LegacyInventoryAdapter extends ECommerceSystem {
  constructor(private legacyInventorySystem: LegacyInventorySystem) {
    super();
  }

  public integrateLegacyData() {
    const legacyProductCode = this.legacyInventorySystem.getProductCode();
    const legacyProductName = this.legacyInventorySystem.getProductName();
    const legacyStock = this.legacyInventorySystem.getStock();
    const legacyPrice = this.legacyInventorySystem.getPrice();

    this.addProduct(legacyProductCode, legacyProductName, legacyStock, legacyPrice);
  }
}
