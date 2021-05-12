/**
 BigO of List: Insertion - O(1), Removal - O(1) or O(n), Searching - O(n), Access - O(n)
 length - integer  - How many elements in the list
 push   - function - accepts a value and adds to the end of the list
 pop    - function - removes the last value in the list and returns it
 get    - function - accepts an index and returns the value at that position
 delete - function - accepts an index, removes value from list, collapses, and returns removed value
 shift -  function - replaces first element, and return replaced element
 unshift  function - added new node to the beginning of the list and returns list
 insert   function - added new node to the given position of the list and returns true
 */
import {IArrayList} from "../Array-list/IArrayList";
import {INode} from "./INode";
import {IDoublyNode} from "../Doubly-Linked-List/IDoublyNode";
import {IDoublyList} from "../Doubly-Linked-List/IDoublyList";
import {ICircularListNode} from "../Circular-Doubly-Linked-List/ICircularListNode";
import {ICircularDoublyList} from "../Circular-Doubly-Linked-List/ICircularDoublyList";

export interface IList extends IArrayList {
    head: INode | IDoublyNode | ICircularListNode;
    tail: INode | IDoublyNode | ICircularListNode;
    length: number;

    delete(index: number): INode | IDoublyNode | ICircularListNode;

    get(index: number): INode | IDoublyNode | ICircularListNode;

    pop(): INode | IDoublyNode | ICircularListNode;

    push(node: INode | IDoublyNode | ICircularListNode): void;

    shift(): INode | IDoublyNode | ICircularListNode;

    unshift(value: any): IList | IDoublyList | ICircularDoublyList;

    insert(value: any, index: number): boolean;
}
