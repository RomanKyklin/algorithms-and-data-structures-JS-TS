import {IList} from "../Linked-List/IList";
import {ICircularDoublyList} from "../Circular-Doubly-Linked-List/ICircularDoublyList";

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
 reverse  function - reversed the list and return void
 */
export interface IDoublyList extends IList {
    reverse(): IDoublyList | ICircularDoublyList;
}
