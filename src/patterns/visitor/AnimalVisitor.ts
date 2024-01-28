import { Elephant } from "./Elephant";
import { Giraffe } from "./Giraffe";
import { Lion } from "./Lion";

export interface AnimalVisitor {
  visitLion(lion: Lion): void;
  visitElephant(elephant: Elephant): void;
  visitGiraffe(giraffe: Giraffe): void;
}
