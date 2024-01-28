import { Component } from "./Component";

export class Department implements Component {
  private children: Component[] = [];

  constructor(private name: string) {}

  add(component: Component): void {
    this.children.push(component);
  }

  getName(): string {
    return this.name;
  }

  display(): string {
    let result = 'Department: ' + this.name + ';';

    for (const child of this.children) {
      result += child.display();
    }

    return result;
  }
}
