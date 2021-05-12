import {IList} from "../Linked-List/IList";

/**
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
    reverse(): IDoublyList;
}
