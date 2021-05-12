import {ICircularDoublyList} from "./ICircularDoublyList";
import {ICircularListNode} from "./ICircularListNode";

export class CircularDoublyList implements ICircularDoublyList {
    head: ICircularListNode;
    length: number;
    tail: ICircularListNode;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    delete(index: number): ICircularListNode {
        return undefined;
    }

    get(index: number): ICircularListNode {
        return undefined;
    }

    insert(value: any, index: number): boolean {
        return false;
    }

    pop(): ICircularListNode {
        return undefined;
    }

    push(node: ICircularListNode): void {
    }

    reverse(): ICircularDoublyList {
        return undefined;
    }

    shift(): ICircularListNode {
        return undefined;
    }

    unshift(value: any): ICircularDoublyList {
        return undefined;
    }
}
