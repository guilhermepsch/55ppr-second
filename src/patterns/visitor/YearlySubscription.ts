import { Subscription } from "./Subscription";
import { SubscriptionVisitor } from "./SubscriptionVisitor";

export class YearlySubscription implements Subscription {
  accept(visitor: SubscriptionVisitor): void {
    visitor.visitYearlySubscription(this);
  }
}