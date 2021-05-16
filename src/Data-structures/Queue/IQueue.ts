import {INode} from "./INode";

/**
 * Queue data structure interface
 * BigO of Queue:
 * Insertion - O(1)
 * Removal - O(1)
 * Searching - O(n)
 * Access - O(n)
 */
export interface IQueue {
    first: INode;
    last: INode;
    size: number;

    enqueue(value: any): number;
    dequeue(): INode;
}
