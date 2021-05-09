import {INode} from "./INode";

export class Node implements INode {
    val: any;
    next: Node;

    constructor(val: any) {
        this.val = val;
        this.next = null;
    }
}
