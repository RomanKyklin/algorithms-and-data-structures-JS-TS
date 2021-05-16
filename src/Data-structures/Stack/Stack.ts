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
        if (!this.first) return null;

        let tmp = this.first;

        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size -= 1;
        return tmp;
    }

    push(value: any): number {
        const newNode = new Node(value);

        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            const tmp = this.first;
            this.first = newNode;
            this.first.next = tmp;
        }
        this.size += 1;

        return this.size;
    }
}
