import { Animal } from "./Animal";
import { AnimalVisitor } from "./AnimalVisitor";

export class Lion implements Animal {
  accept(visitor: AnimalVisitor): void {
    visitor.visitLion(this);
  }
}
