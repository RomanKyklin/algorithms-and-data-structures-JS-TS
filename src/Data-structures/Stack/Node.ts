import {INode} from "./INode";

export class Node implements INode {
    next: INode;
    value: any;

    constructor() {
        this.next = null;
        this.value = null;
    }
}
