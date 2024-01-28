import { LegacyInventorySystem } from './LegacyInventorySystem';
import { LegacyInventoryAdapter } from './LegacyInventoryAdapter';

export default function AdapterClient() {
	const legacyInventorySystem = new LegacyInventorySystem();
	const inventoryAdapter = new LegacyInventoryAdapter(legacyInventorySystem);

	// Tentativa de integração direta sem o adaptador (Exemplo fictício):
	// legacyInventorySystem.integrateWithECommerce(); // Operação inexistente no sistema legado
	// const productInfo = legacyInventorySystem.getProductInfo('ABC123'); // Não existe essa operação no sistema legado

	// O adaptador é usado para integrar o sistema legado com o novo site de e-commerce
	inventoryAdapter.integrateLegacyData();

  // Informação do sistema legado é obtida através do adaptador de maneira transparente.
	const productInfo = inventoryAdapter.getProductInfo('ABC123');
	if (!productInfo) {
		return (
			<div className="bg-red-800 text-white p-4">Produto não encontrado!</div>
		);
	}

	return (
		<div className="bg-red-800 text-white p-4">
			<h2 className="text-2xl font-bold">
				Aplicação: Adaptar um sistema de inventário legado
			</h2>
			<p className="text-lg">
				O padrão Adapter é implementado neste exemplo para integrar um
				novo site de e-commerce com um antigo sistema de inventário
				legado. Este sistema legado fornece dados em um formato
				incompatível com o novo site. Para solucionar esse problema,
				utilizamos um "adaptador" que atua como uma camada
				intermediária. O adaptador traduz as solicitações feitas pelo
				novo site para que o sistema legado possa entendê-las e
				vice-versa.
			</p>

			<div className="mt-4">
				<h3 className="text-xl font-semibold">Informações do Produto:</h3>
				<ul>
					<li>
						<strong>Código do Produto:</strong> {productInfo.code}
					</li>
					<li>
						<strong>Nome do Produto:</strong> {productInfo.name}
					</li>
					<li>
						<strong>Estoque:</strong> {productInfo.stock}
					</li>
					<li>
						<strong>Preço:</strong> ${productInfo.price.toFixed(2)}
					</li>
				</ul>
			</div>
		</div>
	);
}
