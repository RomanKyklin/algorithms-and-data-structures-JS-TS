import {IStack} from "./IStack";
import {INode} from "./INode";
import {Node} from "./Node";

export class Stack implements IStack {
    first: INode;
    last: INode;
    size: number;

    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    pop(): INode {
        let currentNode: INode = this.first;
        while (currentNode) {
            if (currentNode.next === this.last) {
                this.last = currentNode.next;
                break;
            }
            currentNode = currentNode.next;
        }
        this.size -= 1;
        return this.last;
    }

    push(value: any): number {
        const newNode = new Node(value);

        if (!this.first) {
            this.first = newNode;
            this.last = this.first;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size += 1;

        return this.size;
    }
}
