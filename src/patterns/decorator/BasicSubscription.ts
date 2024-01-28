import { Subscription } from "./Subscription";

export class BasicSubscription implements Subscription {
  public price() {
    return 9.99;
  }

  public description() {
    return "Basic Subscription";
  }
}
