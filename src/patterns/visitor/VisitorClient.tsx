import { Lion } from './Lion';
import { Elephant } from './Elephant';
import { Giraffe } from './Giraffe';
import { ZooVisitor } from './ZooVisitor';

export default function VisitorClient() {
	const lion = new Lion();
	const elephant = new Elephant();
	const giraffe = new Giraffe();
	const zooVisitor = new ZooVisitor();

	lion.accept(zooVisitor);
	elephant.accept(zooVisitor);
	giraffe.accept(zooVisitor);

	return (
		<div className="bg-black text-white p-4">
			<h2 className="text-2xl font-bold">Zoo Visitor Pattern</h2>
			<p className="text-lg">
				O padrão Visitor é usado neste exemplo fictício para realizar
				diferentes operações em animais no zoológico, como alimentação,
				limpeza e tirar fotos. Temos três tipos de animais: leões,
				elefantes e girafas. O visitante do zoológico visita cada animal
				e executa operações específicas para cada tipo.{' '}
				<strong>
					A saída do console mostra o resultado da visita.
				</strong>
			</p>
		</div>
	);
}
