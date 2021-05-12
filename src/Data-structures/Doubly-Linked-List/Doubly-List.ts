import {IDoublyNode} from "./IDoublyNode";
import {IDoublyList} from "./IDoublyList";
import {DoublyNode} from "./DoublyNode";

export class DoublyList implements IDoublyList {
    head: IDoublyNode;
    length: number;
    tail: IDoublyNode;

    constructor() {
        this.length = 0;
    }

    delete(index: number): IDoublyNode {
        if (!this.head) return null;

        let elementForDelete = this.get(index);

        if (!elementForDelete.previous) {
            this.head = this.head.next || null;
        } else {
            elementForDelete.previous.next = elementForDelete.next;
        }
        this.length -= 1;
        return elementForDelete;
    }

    get(index: number): IDoublyNode {
        if (index === 0) return this.head;

        let element: IDoublyNode = this.head.next;
        let currentIndex = 1;

        while (element != null) {
            if (currentIndex === index) return element;

            element = element.next;
            currentIndex += 1;
        }

        return null;
    }

    pop(): IDoublyNode {
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

    push(element: IDoublyNode): void {
        if (!this.head) {
            this.head = element;
        } else {
            this.tail.next = element;
            element.previous = this.tail;
        }
        this.tail = element;
        this.length += 1;
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

    shift(): IDoublyNode {
        if (!this.head) return undefined;

        const nodeForDelete = this.head;
        this.head = nodeForDelete.next;
        this.length -= 1;

        return nodeForDelete;
    }

    unshift(value: any): IDoublyList {
        const node = new DoublyNode(value);
        node.next = this.head;
        this.head = node;
        this.length += 1;
        return this;
    }

    reverse(): IDoublyList {
        [this.head, this.tail] = [this.tail, this.head];

        let next: IDoublyNode;
        let prev: IDoublyNode;
        let node: IDoublyNode = this.head;

        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}
