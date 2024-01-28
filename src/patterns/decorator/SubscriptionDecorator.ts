import { Subscription } from "./Subscription";

export abstract class SubscriptionDecorator implements Subscription {
  constructor(protected subscription: Subscription) {}

  public price() {
    return this.subscription.price();
  }

  public description() {
    return this.subscription.description();
  }
}
