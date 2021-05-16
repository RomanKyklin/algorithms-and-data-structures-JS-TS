import {IQueue} from "./IQueue";
import {INode} from "./INode";
import {Node} from './Node';

export class Queue implements IQueue {
    first: INode;
    last: INode;
    size: number;

    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    dequeue(): INode {
        if (!this.first) return null;

        let tmp = this.first;

        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size -= 1;
        return tmp;
    }

    enqueue(value: any): number {
        let newNode = new Node(value);

        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.size += 1;

        return this.size;
    }
}
