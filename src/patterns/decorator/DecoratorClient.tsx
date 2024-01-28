import { BasicSubscription } from './BasicSubscription';
import { UnlimitedDownloadsDecorator } from './UnlimitedDownloadsDecorator';
import { PremiumAudioDecorator } from './PremiumAudioDecorator';

export default function DecoratorClient() {
	// Cria uma assinatura básica
	const basicSubscription = new BasicSubscription();

	// Aplicação de decoradores para adicionar funcionalidades extras
	const premiumSubscription = new UnlimitedDownloadsDecorator(
		new PremiumAudioDecorator(basicSubscription),
	);

	return (
		<div className="bg-red-800 text-white p-4">
			<h2 className="text-2xl font-bold">Music Streaming Subscription</h2>
			<p className="text-lg">
				O padrão Decorator é usado para adicionar funcionalidades extras
				a objetos de forma dinâmica. Neste exemplo, representamos
				diferentes tipos de assinaturas de streaming de música. A
				assinatura básica inclui recursos padrão, enquanto decoradores
				adicionam funcionalidades extras, como downloads ilimitados e
				qualidade de áudio premium, mantendo a flexibilidade para
				combinar diferentes opções de funcionalidades.
			</p>

			<div className="mt-4">
				<strong>{premiumSubscription.description()}</strong>
				<p>Preço: $ {premiumSubscription.price().toFixed(2)}</p>
			</div>
		</div>
	);
}
