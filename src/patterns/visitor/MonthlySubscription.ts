import { Subscription } from "./Subscription";
import { SubscriptionVisitor } from "./SubscriptionVisitor";

export class MonthlySubscription implements Subscription {
  accept(visitor: SubscriptionVisitor): void {
    visitor.visitMonthlySubscription(this);
  }
}
