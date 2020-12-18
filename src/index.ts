import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList/LinkedList';
import { Node } from './LinkedList/Node';

const numbersCollection = new NumbersCollection([-1, 3, -5, 0])
numbersCollection.sort()
console.log(numbersCollection.data)

const charactersCollection = new CharactersCollection('aXyzbahx');
charactersCollection.sort()
console.log(charactersCollection.data)

// // Create nodes for linked list for testing
let linkedList = new LinkedList();
linkedList.add(500)
linkedList.add(5)
linkedList.add(-1)
linkedList.add(56)
linkedList.sort()
linkedList.print()
