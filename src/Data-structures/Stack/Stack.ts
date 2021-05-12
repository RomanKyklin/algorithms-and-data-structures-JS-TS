import {IStack} from "./IStack";
import {INode} from "./INode";

export class Stack implements IStack {
    first: INode;
    last: INode;
    size: number;

    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    pop(): any {
    }

    push(value: any): number {
        return 0;
    }
}
