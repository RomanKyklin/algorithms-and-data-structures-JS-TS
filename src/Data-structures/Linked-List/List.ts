import {IList} from "./IList";
import {INode} from "./INode";

export class LinkedList implements IList {
    public length: number;
    public node: INode;

    constructor() {
        this.length = 0;
    }

    delete(index: number): void {

    }

    get(index: number): void {
    }

    pop(): void {
        this.length -= 1;
    }

    push(element: INode): void {
        this.length += 1;

        if (!this.node) {
            this.node = element;
        }
        this.node.next = element;
    }
}
