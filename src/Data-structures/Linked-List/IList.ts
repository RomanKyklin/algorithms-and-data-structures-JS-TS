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

export interface IList extends IArrayList {
    head: INode;
    tail: INode;

    delete(index: number): INode | IDoublyNode;

    get(index: number): INode | IDoublyNode;

    pop(): INode | IDoublyNode;

    push(node: INode | IDoublyNode): void;

    shift(): INode | IDoublyNode;

    unshift(value: any): IList | IDoublyList;

    insert(value: any, index: number): boolean;
}
