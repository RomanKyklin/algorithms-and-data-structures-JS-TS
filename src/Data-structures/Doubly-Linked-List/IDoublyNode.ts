import {INode} from "../Linked-List/INode";

export interface IDoublyNode extends INode {
    previous: IDoublyNode;
    next: IDoublyNode;
    val: IDoublyNode;
}
