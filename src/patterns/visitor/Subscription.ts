import { SubscriptionVisitor } from "./SubscriptionVisitor";

export interface Subscription {
	accept(visitor: SubscriptionVisitor): void;
}
