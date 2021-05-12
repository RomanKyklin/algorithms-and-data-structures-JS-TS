import {ICircularDoublyList} from "./ICircularDoublyList";
import {ICircularListNode} from "./ICircularListNode";
import {CircularDoublyList} from "./Circular-Doubly-List";
import {CircularListNode} from "./Circular-List-Node";

describe('Circular Doubly Linked List', function () {
    let list: ICircularDoublyList;
    let reversedList: ICircularDoublyList;
    let firstNode: ICircularListNode;
    let secondNode: ICircularListNode;
    let thirdNode: ICircularListNode;
    let forthNode: ICircularListNode;
    let fifthNode: ICircularListNode;
    let deletedNode: ICircularListNode;
    let insertReturnValue: boolean;
    let defaultListLength: number;

    beforeEach(() => {
        list = new CircularDoublyList();
        firstNode = new CircularListNode('first');
        secondNode = new CircularListNode('second');
        firstNode.next = secondNode;
        secondNode.previous = firstNode;
        thirdNode = new CircularListNode('third');
        thirdNode.previous = secondNode;
        secondNode.next = thirdNode;
        firstNode.previous = thirdNode;
        thirdNode.next = firstNode;
        list.push(firstNode);
        list.push(secondNode);
        list.push(thirdNode);

        forthNode = new CircularListNode('forth');
        fifthNode = new CircularListNode('fifth');

        defaultListLength = list.length;
    })

    it('constructor', () => {
        expect(list).toEqual(jasmine.any(CircularDoublyList));
    });

    it('push', () => {
        expect(list.length).toEqual(3);
        expect(list.head).toEqual(firstNode);
        expect(list.head.next).toEqual(secondNode);
        expect(list.head.next.next).toEqual(thirdNode);
        expect(list.head.next.next.next).toEqual(null);
    });

    it('pop', () => {
        expect(list.pop()).toEqual(thirdNode);
        expect(list.length).toEqual(2);

        expect(list.pop()).toEqual(secondNode);
        expect(list.length).toEqual(1);

        expect(list.pop()).toEqual(firstNode);
        expect(list.length).toEqual(0);

        expect(list.pop()).toEqual(null);
        expect(list.length).toEqual(0);
    });

    it('get', () => {
        expect(list.get(0)).toEqual(firstNode);
        expect(list.get(1)).toEqual(secondNode);
        expect(list.get(2)).toEqual(thirdNode);
        expect(list.get(3)).toEqual(null);
    });

    it('delete', () => {
        deletedNode = list.delete(1) as ICircularListNode;
        expect(deletedNode).toEqual(secondNode);
        expect(list.length).toEqual(2);
        expect(list.get(0)).toEqual(firstNode);
        expect(list.get(1)).toEqual(thirdNode);
        deletedNode = list.delete(0) as ICircularListNode;
        expect(deletedNode).toEqual(firstNode);
        expect(list.length).toEqual(1);
        expect(list.get(0)).toEqual(thirdNode);
    });

    it('shift', () => {
        deletedNode = list.shift() as ICircularListNode;
        expect(deletedNode).toEqual(firstNode);
        expect(list.head).toEqual(secondNode);
        expect(list.length).toEqual(2);

        deletedNode = list.shift() as ICircularListNode;
        expect(deletedNode).toEqual(secondNode);
        expect(list.head).toEqual(thirdNode);
        expect(list.length).toEqual(1);

        deletedNode = list.shift() as ICircularListNode;
        expect(deletedNode).toEqual(thirdNode);
        expect(list.head).toEqual(null);
        expect(list.length).toEqual(0);

        deletedNode = list.shift() as ICircularListNode;
        expect(deletedNode).toEqual(undefined);
    });

    it('unshift', () => {
        const expectedValue = 'forth';
        list.unshift('forth');

        expect(list.head.val).toEqual(expectedValue);
        expect(list.head.next).toEqual(firstNode);
        expect(list.tail).toEqual(thirdNode);
        expect(list.length).toEqual(4);
    })

    it('insert', () => {
        let expectedValue = 'forth';

        insertReturnValue = list.insert(expectedValue, 10);
        expect(insertReturnValue).toEqual(false);
        expect(list.length).toEqual(defaultListLength);

        insertReturnValue = list.insert(expectedValue, 1);
        expect(insertReturnValue).toEqual(true);
        expect(list.head.next.val).toEqual(expectedValue);
        expect(list.length).toEqual(defaultListLength + 1);
    });

    it('should reverse with base 3 elements', () => {
        reversedList = new CircularDoublyList();
        reversedList.push(thirdNode);
        reversedList.push(secondNode);
        reversedList.push(firstNode);

        list.reverse();
        expect(list).toEqual(reversedList);
    })

    it('should reverse with 5 elements', () => {
        reversedList = new CircularDoublyList();
        reversedList.push(fifthNode);
        reversedList.push(forthNode);
        reversedList.push(thirdNode);
        reversedList.push(secondNode);
        reversedList.push(firstNode);

        list.push(forthNode);
        list.push(fifthNode);
        list.reverse();

        expect(list).toEqual(reversedList);
    })
});
