import {IDoublyNode} from "../Doubly-Linked-List/IDoublyNode";

export interface ICircularListNode extends IDoublyNode {
    previous: ICircularListNode;
    next: ICircularListNode;
    val: ICircularListNode;
}
