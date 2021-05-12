import {ICircularListNode} from "./ICircularListNode";

export class CircularListNode implements ICircularListNode {
    val: any;
    next: ICircularListNode;
    previous: ICircularListNode;

    constructor(val: any) {
        this.val = val;
        this.next = null;
        this.previous = null;
    }
}
