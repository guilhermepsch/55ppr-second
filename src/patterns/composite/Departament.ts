// Department.ts
import { Component } from "./Component";

export class Department implements Component {
  private children: Component[] = [];

  constructor(private name: string) {}

  public add(subscription: Component): void {
    this.children.push(subscription);
  }

  public remove(subscription: Component): void {
    const index = this.children.indexOf(subscription);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }

  public getName(): string {
    return this.name;
  }

  public display(): string {
    let result = 'Department: ' + this.name + ';';

    for (const child of this.children) {
      result += child.display();
    }

    return result;
  }
}
