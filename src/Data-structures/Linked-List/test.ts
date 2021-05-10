import {LinkedList} from "./List";
import {Node} from "./Node";
import {INode} from "./INode";

describe('LinkedList', function () {
    let list: LinkedList;
    let firstNode: INode;
    let secondNode: INode;
    let thirdNode: INode;
    let deletedNode: INode;

    beforeEach(() => {
        list = new LinkedList();
        firstNode = new Node('first');
        secondNode = new Node('second');
        thirdNode = new Node('third');
        list.push(firstNode);
        list.push(secondNode);
        list.push(thirdNode);
    })

    it('constructor', () => {
        expect(list).toEqual(jasmine.any(LinkedList));
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
        deletedNode = list.delete(1);
        expect(deletedNode).toEqual(secondNode);
        expect(list.length).toEqual(2);
        expect(list.get(0)).toEqual(firstNode);
        expect(list.get(1)).toEqual(thirdNode);
        deletedNode = list.delete(0);
        expect(deletedNode).toEqual(firstNode);
        expect(list.length).toEqual(1);
        expect(list.get(0)).toEqual(thirdNode);
    });

    it('shift', () => {
        deletedNode = list.shift(thirdNode);
        expect(deletedNode).toEqual(firstNode);
        expect(list.head).toEqual(thirdNode);
        expect(list.length).toEqual(3);
        deletedNode = list.shift(secondNode);
        expect(deletedNode).toEqual(thirdNode);
        expect(list.head).toEqual(secondNode);
        expect(list.length).toEqual(3);
    });
});
