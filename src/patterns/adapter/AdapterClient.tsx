import { LegacyPaymentSystem } from "./LegacyPaymentSystem";
import { PaymentGatewayAdapter } from "./PaymentGatewayAdapter";

export default function AdapterClient() {
	const legacyPaymentSystem = new LegacyPaymentSystem();
	const adapter = new PaymentGatewayAdapter(legacyPaymentSystem);
	adapter.processPayment(100);

	return (
		<div className="bg-red-800 text-white p-4">
			<h2 className="text-2xl font-bold">
				Aplicação: Adaptar um sistema de pagamento legado.
			</h2>
			<p className="text-lg">
				O padrão Adapter é implementado neste exemplo para adaptar um sistema
				de pagamento legado para um novo sistema de pagamento. O sistema de
				pagamento legado é representado pela classe <code>LegacyPaymentSystem</code>,
				enquanto o novo sistema de pagamento é representado pela classe{' '}
				<code>PaymentGatewayAdapter</code>.
			</p>
		</div>
	);
}
