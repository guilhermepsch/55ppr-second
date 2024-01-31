import { MonthlySubscription } from "./MonthlySubscription";
import { YearlySubscription } from "./YearlySubscription";

export interface SubscriptionVisitor {
  visitMonthlySubscription(subscription: MonthlySubscription): void;
  visitYearlySubscription(subscription: YearlySubscription): void;
}