export class ECommerceSystem {
	private products: Map<
		string,
		{ code: string; name: string; stock: number; price: number }
	> = new Map();

	public addProduct(
		productCode: string,
		productName: string,
		stock: number,
		price: number,
	) {
		this.products.set(productCode, { code: productCode, name: productName, stock, price });
	}

	public getProductInfo(productCode: string) {
		return this.products.get(productCode);
	}

	public listProducts() {
		return Array.from(this.products.values());
	}
}
