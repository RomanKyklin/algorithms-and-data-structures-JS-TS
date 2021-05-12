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
        return this.first;
    }

    push(value: any): number {
        const newNode = new Node(value);

        if (!this.first) {
            this.first = newNode;
            this.last = this.first;
        } else {
            let tmp = this.last;
            this.last.next = newNode;
            this.last = tmp;
        }
        this.size += 1;

        return this.size;
    }
}
