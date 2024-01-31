import { SubscriptionVisitor } from './SubscriptionVisitor';
import { MonthlySubscription } from './MonthlySubscription';
import { YearlySubscription } from './YearlySubscription';

export class SubscriptionAnalyticsVisitor implements SubscriptionVisitor {
	visitMonthlySubscription(subscription: MonthlySubscription): void {
		console.log('Generating analytics for monthly subscription...');
	}

	visitYearlySubscription(subscription: YearlySubscription): void {
		console.log('Generating analytics for yearly subscription...');
	}
}
