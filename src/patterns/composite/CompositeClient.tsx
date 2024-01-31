import { Department } from './Departament';
import { Subscription } from './Subscription';

export default function CompositeClient() {
  const streamingSubscription = new Subscription('Streaming');
  const musicSubscription = new Subscription('Music');
  const newsSubscription = new Subscription('News');

  const customBundle = new Department('Custom Bundle');
  customBundle.add(streamingSubscription);
  customBundle.add(musicSubscription);
	customBundle.add(newsSubscription);

	return (
		<div className="bg-red-800 text-white p-4">
			<h2 className="text-2xl font-bold">Pacotes de Assinatura</h2>
			<p className="text-lg">
				O padrão Composite é usado para representar uma estrutura
				organizacional hierárquica. Neste exemplo fictício, temos
				uma estrutura organizacional com um departamento e várias
				assinaturas. Fazendo com que a assinatura seja um nó folha
				e o departamento seja um nó composto. Permitindo venda de pacotes
				de assinaturas.
			</p>

			<div className="mt-4">
				<strong>{customBundle.getName()}</strong>
				<ul>{customBundle.display().split(';').map((item, index) => <li key={index}>{item}</li>)}</ul>
			</div>
		</div>
	);
}
