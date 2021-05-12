import {INode} from "./INode";

export interface IStack {
    first: INode;
    last: INode;
    size: number;

    push(value: any): number;

    pop(): any;
}
