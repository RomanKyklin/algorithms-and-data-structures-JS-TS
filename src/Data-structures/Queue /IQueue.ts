import {INode} from "./INode";

export interface IQueue {
    first: INode;
    last: INode;
    size: number;

    enqueue(value: any): INode;
    dequeue(): INode;
}
