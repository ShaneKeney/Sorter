import { Node } from './Node';
import { Sorter } from '../Sorter';

export class LinkedList extends Sorter {
    head: Node | null = null;

    get length(): number {
        if(!this.head) return 0;
        let length = 1
        let node = this.head;
        while(node.next) {
            length++;
            node = node.next
        }

        return length;
    }

    add(data: number): void {
        const node = new Node(data)

        // If there isn't a start to the linked list make the created node the start (head)
        if(!this.head) {
            this.head = node
            return
        }

        // Already a head to the linked list
        // Add to the linked list instead
        let tail = this.head;
        while(tail.next) {
            tail = tail.next;
        }

        tail.next = node;
    }

    at(index: number): Node {
        if(!this.head) throw new Error('Index out of bounds!')

        let counter: number = 0;
        let node: Node | null = this.head;
        while(node)  {
            if(counter === index) return node
            counter++;
            node = node.next
        }

        throw new Error('Index out of bounds!')
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        if(!this.head) throw new Error('List is empty!');

        return this.at(leftIndex).data > this.at(rightIndex).data
    }

    swap(leftIndex: number, rightIndex: number): void {
        const leftNode = this.at(leftIndex)
        const rightNode = this.at(rightIndex)

        const leftHand = leftNode.data
        leftNode.data = rightNode.data
        rightNode.data = leftHand
    }

    print(): void {
        let builtList: string = ''
        if(!this.head) return
        let node: Node | null = this.head
        while(node) {
            if(node.next === null) {
                builtList = builtList.concat(node.data.toString())
            } else {
                builtList = builtList.concat(node.data.toString() + ' --> ')
            }
            node = node.next
        }

        console.log(builtList)
    }
}