import { MonthlySubscription } from './MonthlySubscription';
import { YearlySubscription } from './YearlySubscription';
import { SubscriptionAnalyticsVisitor } from './SubscriptionAnalyticsVisitor';

export default function VisitorClient() {
	const monthlySubscription = new MonthlySubscription();
	const yearlySubscription = new YearlySubscription();
	const analyticsVisitor = new SubscriptionAnalyticsVisitor();

	monthlySubscription.accept(analyticsVisitor);
	yearlySubscription.accept(analyticsVisitor);

	return (
		<div className="bg-black text-white p-4">
			<h2 className="text-2xl font-bold">Subscription Visitor Pattern</h2>
			<p className="text-lg">
				O padrão Visitor é usado neste exemplo fictício para realizar
				diferentes operações de análise em diferentes tipos de
				assinaturas. As assinaturas mensais e anuais são visitadas por
				um visitante de análise, que realiza operações diferentes em
				cada uma delas. Que são operações relacionadas a histórico e
				analytics{' '}
				<strong>
					A saída do console mostra o resultado da visita.
				</strong>
			</p>
		</div>
	);
}
