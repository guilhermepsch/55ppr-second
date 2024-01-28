import { AnimalVisitor } from "./AnimalVisitor";

export interface Animal {
  accept(visitor: AnimalVisitor): void;
}
