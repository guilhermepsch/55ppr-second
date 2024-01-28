import { Animal } from "./Animal";
import { AnimalVisitor } from "./AnimalVisitor";

export class Elephant implements Animal {
  accept(visitor: AnimalVisitor): void {
    visitor.visitElephant(this);
  }
}
