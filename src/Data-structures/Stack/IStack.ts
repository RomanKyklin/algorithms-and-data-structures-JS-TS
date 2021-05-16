import {INode} from "./INode";

/**
 * Stack interface
 * BigO of Stacks:
 * Insertion - O(1)
 * Removal - O(1)
 * Searching - O(n)
 * Access - O(n)
 */
export interface IStack {
    first: INode;
    last: INode;
    size: number;

    push(value: any): number;

    pop(): INode;
}
