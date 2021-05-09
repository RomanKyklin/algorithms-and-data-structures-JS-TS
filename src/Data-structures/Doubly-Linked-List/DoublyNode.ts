import {IDoublyNode} from "./IDoublyNode";

export class DoublyNode implements IDoublyNode {
    next: IDoublyNode;
    previous: IDoublyNode;
    val: any;

    constructor(val: any) {
        this.val = val;
        this.next = null;
        this.previous = null;
    }
}
