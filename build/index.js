"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList/LinkedList");
var numbersCollection = new NumbersCollection_1.NumbersCollection([-1, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);
var charactersCollection = new CharactersCollection_1.CharactersCollection('aXyzbahx');
charactersCollection.sort();
console.log(charactersCollection.data);
// // Create nodes for linked list for testing
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(5);
linkedList.add(-1);
linkedList.add(56);
linkedList.sort();
linkedList.print();
