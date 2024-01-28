import { AnimalVisitor } from './AnimalVisitor';
import { Elephant } from './Elephant';
import { Giraffe } from './Giraffe';
import { Lion } from './Lion';

export class ZooVisitor implements AnimalVisitor {
	visitLion(lion: Lion): void {
		console.log('Feeding the lion.');
		console.log('Taking photos of the lion.');
	}

	visitElephant(elephant: Elephant): void {
		console.log('Feeding the elephant.');
		console.log("Cleaning the elephant's enclosure.");
	}

	visitGiraffe(giraffe: Giraffe): void {
		console.log('Feeding the giraffe.');
		console.log('Taking photos of the giraffe.');
	}
}
