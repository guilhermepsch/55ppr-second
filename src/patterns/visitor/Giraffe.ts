import { Animal } from "./Animal";
import { AnimalVisitor } from "./AnimalVisitor";

export class Giraffe implements Animal {
  accept(visitor: AnimalVisitor): void {
    visitor.visitGiraffe(this);
  }
}
