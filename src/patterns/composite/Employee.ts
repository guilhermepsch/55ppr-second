import { Component } from "./Component";

export class Employee implements Component {
  constructor(private name: string) {}

  getName(): string {
    return this.name;
  }

  display(): string {
    return 'Employee: ' + this.name + ';';
  }
}
