// Subscription.ts
import { Component } from "./Component";

export class Subscription implements Component {
  constructor(private name: string) {}

  public getName(): string {
    return this.name;
  }

  public display(): string {
    return 'Subscription: ' + this.name + ';';
  }
}
