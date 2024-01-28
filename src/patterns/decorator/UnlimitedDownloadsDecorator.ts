import { SubscriptionDecorator } from "./SubscriptionDecorator";

export class UnlimitedDownloadsDecorator extends SubscriptionDecorator {
  public price() {
    return this.subscription.price() + 5.99;
  }

  public description() {
    return `${this.subscription.description()} + Unlimited Downloads`;
  }
}
