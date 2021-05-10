import {IList} from "./IList";
import {INode} from "./INode";
import {Node} from "./Node";

export class LinkedList implements IList {
    public length: number;
    public head: INode;
    public tail: INode;

    constructor() {
        this.length = 0;
    }

    delete(index: number): INode {
        if (!this.head) return null;

        let previous = this.get(index - 1);
        let elementForDelete: INode;

        if (!previous) {
            elementForDelete = this.head || null;
            this.head = this.head.next || null;
        } else {
            elementForDelete = previous.next;
            previous.next = previous.next.next;
        }
        this.length -= 1;

        return elementForDelete;
    }

    get(index: number): INode | null {
        if (index === 0) return this.head;

        if(index > 0 && index === this.length - 1) return this.tail;

        let element: INode = this.head.next;
        let currentIndex = 1;

        while (element != null) {
            if (currentIndex === index) return element;

            element = element.next;
            currentIndex += 1;
        }
        console.log(currentIndex, this)
        return null;
    }

    pop(): INode {
        if (this.head) {
            if (this.length === 1) {
                this.length = 0;
                let tmp = this.head;
                this.head = null;
                return tmp;
            }
            let previousLastNode = this.get(this.length - 2);
            let lastNode = previousLastNode.next;
            previousLastNode.next = null;

            this.length -= 1;

            return lastNode;
        }

        return null;
    }

    push(element: INode): void {
        if (!this.head) {
            this.head = element;
        } else {
            this.tail.next = element;
        }
        this.tail = element;
        this.length += 1;
    }

    shift(): INode {
        if (!this.head) return undefined;

        const nodeForDelete = this.head;
        this.head = nodeForDelete.next;
        this.length -= 1;

        return nodeForDelete;
    }

    unshift(value: any): IList {
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.length += 1;
        return this;
    }

    insert(value: any, index: number): boolean {
        if (index < 0 || index > this.length) {
            return false;
        }

        const node = new Node(value);

        if (index === this.length) this.push(node);

        if (index === 0) this.unshift(node);

        const previousNode = this.get(index - 1);
        node.next = previousNode.next;
        previousNode.next = node;
        this.length += 1;

        return true;
    }

    // reverse(): void {
    //     if (this.length <= 1) return;
    //
    //     let node = this.head;
    //     let prevTail = this.get(this.length - 1);
    //
    //     [this.head, this.tail] = [this.tail, this.head];
    //
    //     this.head.next = node.next;
    //     this.tail.next = null;
    //     prevTail.next = this.tail;
    //
    //     let next;
    //     let prev;
    //     let currentIndex = 1;
    //
    //     while (node.next !== this.tail) {
    //         next = node.next;
    //         prev = this.get(currentIndex - 1);
    //         console.log(currentIndex - 1, prev)
    //         prev.next = next;
    //
    //
    //         if (next) {
    //             node.next = next.next;
    //             next.next = node;
    //
    //         }
    //
    //         currentIndex += 1;
    //     }
    // }
}
