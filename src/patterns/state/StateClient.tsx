import { ActiveState } from './ActiveState';
import { UserState } from './UserState';

export default function StateClient() {
	let userState: UserState;

	const handleChangeState = (state: UserState) => {
		userState = state;
	};

	userState = new ActiveState(handleChangeState);

	const handleViewState = () => {
		userState.viewContent();
	};

	const handleComment = () => {
		userState.comment();
	};

	const handleSuspendSubscription = () => {
		userState.suspendSubscription();
	};

	const renewSubscription = () => {
		userState.renewSubscription();
	};

	const handleCancelSubscription = () => {
		userState.cancelSubscription();
	};

	return (
		<div className="bg-red-800 text-white p-4">
			<h2 className="text-2xl font-bold">User Subscription State</h2>
			<p className="text-lg">
				O padrão State é utilizado para permitir que um objeto altere
				seu comportamento quando seu estado interno muda. Neste exemplo
				fictício, representamos estados de assinatura de usuários em um
				serviço de streaming de vídeo. Dependendo do estado do usuário
				(Ativo, Suspenso ou Cancelado), diferentes ações estão
				disponíveis. Por exemplo, um usuário Ativo pode visualizar
				conteúdo, postar comentários e cancelar sua assinatura, enquanto
				um usuário Suspenso tem restrições em suas ações, e um usuário
				Cancelado não pode mais acessar o conteúdo.{' '}
				<strong>
					A saída do exemplo está sendo exibida no console do
					navegador.
				</strong>
			</p>

			<div className="mt-4">
				<button
					onClick={handleViewState}
					className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">
					View Content
				</button>
				<button
					onClick={handleComment}
					className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
					Post Comment
				</button>
				<button
					onClick={handleCancelSubscription}
					className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">
					Cancel Subscription
				</button>
				<button
					onClick={handleSuspendSubscription}
					className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2">
					Suspend Subscription
				</button>
				<button
					onClick={renewSubscription}
					className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
					Renew Subscription
				</button>
			</div>
		</div>
	);
}
