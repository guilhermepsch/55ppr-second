import { Department } from './Departament';
import { Employee } from './Employee';

export default function CompositeClient() {
	// Cria departamentos
	const engineering = new Department('Engineering');
	const marketing = new Department('Marketing');

	// Criar funcionários
	const engineer1 = new Employee('John Doe');
	const engineer2 = new Employee('Jane Smith');
	const marketer1 = new Employee('Alice Johnson');

	// Adiciona funcionários aos departamentos
	engineering.add(engineer1);
	engineering.add(engineer2);
	marketing.add(marketer1);

	// Creia uma empresa e adiciona os departamentos
	const organization = new Department('Empresa');
	organization.add(engineering);
	organization.add(marketing);

	return (
		<div className="bg-red-800 text-white p-4">
			<h2 className="text-2xl font-bold">Estrutura Organizacional</h2>
			<p className="text-lg">
				O padrão Composite é usado para representar uma estrutura
				organizacional hierárquica. Neste exemplo fictício, temos
				departamentos e funcionários. Departamentos podem conter tanto
				funcionários quanto subdepartamentos. Isso permite criar uma
				estrutura complexa, onde cada componente (departamento ou
				funcionário) pode ser tratado de forma uniforme.
			</p>

			<div className="mt-4">
				<strong>{organization.getName()}</strong>
				<ul>{organization.display().split(';').map((item, index) => <li key={index}>{item}</li>)}</ul>
			</div>
		</div>
	);
}
