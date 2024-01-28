import { Component } from "./Component";

export class Employee implements Component {
  constructor(private name: string) {}

  public getName(): string {
    return this.name;
  }

  public display(): string {
    return 'Employee: ' + this.name + ';';
  }
}
