import {ICircularDoublyList} from "./ICircularDoublyList";
import {ICircularListNode} from "./ICircularListNode";
import {IDoublyNode} from "../Doubly-Linked-List/IDoublyNode";
import {DoublyNode} from "../Doubly-Linked-List/DoublyNode";

export class CircularDoublyList implements ICircularDoublyList {
    head: ICircularListNode;
    length: number;
    tail: ICircularListNode;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    delete(index: number): ICircularListNode {
        if (!this.head) return null;

        let elementForDelete = this.get(index);

        if (!elementForDelete.previous || index === 0) {
            this.head = this.head.next || null;
        } else {
            elementForDelete.previous.next = elementForDelete.next;
        }
        this.length -= 1;
        return elementForDelete;
    }

    get(index: number): ICircularListNode {
        if (index >= this.length) return null;

        if (index === 0) return this.head;

        let element: IDoublyNode = this.head.next;
        let currentIndex = 1;

        while (element != null) {
            if (currentIndex === index) return element;

            element = element.next;
            currentIndex += 1;
        }

        return null
    }

    insert(value: any, index: number): boolean {
        if (index < 0 || index > this.length) {
            return false;
        }

        const node = new DoublyNode(value);

        if (index === this.length) this.push(node);

        if (index === 0) this.unshift(node);

        const previousNode = this.get(index - 1);
        node.next = previousNode.next;
        previousNode.next = node;
        this.length += 1;

        return true;
    }

    pop(): ICircularListNode {
        if (this.head) {
            let result: IDoublyNode;

            if (this.length === 1) {
                [result, this.head] = [this.head, null];
            } else {
                result = {...this.tail};
                this.tail = result.previous;
                this.tail.next = null;
            }

            this.length -= 1;

            return result;
        }

        return null;
    }

    push(node: ICircularListNode): void {
        if (!this.head) {
            this.head = node;
        } else {
            this.tail.next = node;
            node.previous = this.tail;
            node.next = this.head;
            this.head.previous = node;
        }
        this.tail = node;
        this.length += 1;
    }

    reverse(): ICircularDoublyList {
        [this.head, this.tail] = [this.tail, this.head];

        let next: IDoublyNode;
        let prev: IDoublyNode;
        let node: IDoublyNode = this.head;

        do {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        } while (next);

        return this;
    }

    shift(): ICircularListNode {
        if (!this.head) return undefined;

        const nodeForDelete = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = nodeForDelete.next;
            this.head.previous = this.tail;
        }
        this.length -= 1;

        return nodeForDelete;
    }

    unshift(value: any): ICircularDoublyList {
        const node = new DoublyNode(value);
        node.next = this.head;
        this.head = node;
        this.length += 1;
        return this;
    }
}
