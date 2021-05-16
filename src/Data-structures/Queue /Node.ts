import {INode} from "./INode";

export class Node implements INode {
    next: INode;
    value: any;

    constructor(value: any) {
        this.next = null;
        this.value = value;
    }
}
