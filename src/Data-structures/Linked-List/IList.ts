/**
 length - integer  - How many elements in the list
 push   - function - accepts a value and adds to the end of the list
 pop    - function - removes the last value in the list and returns it
 get    - function - accepts an index and returns the value at that position
 delete - function - accepts an index, removes value from list, collapses,
 and returns removed value
 */
import {IArrayList} from "../Array-list/IArrayList";
import {INode} from "./INode";

export interface IList extends IArrayList {
    head: INode;
    tail: INode;
}
