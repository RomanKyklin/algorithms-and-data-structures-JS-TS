import {IQueue} from "./IQueue";
import {INode} from "./INode";

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
        return undefined;
    }

    enqueue(value: any): INode {
        return undefined;
    }
}
