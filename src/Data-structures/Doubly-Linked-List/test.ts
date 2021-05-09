import {DoublyList} from "./Doubly-List";
import {IDoublyNode} from "./IDoublyNode";
import {DoublyNode} from "./DoublyNode";

describe('Doubly Linded List', function () {
    let list: DoublyList;
    let firstNode: IDoublyNode;
    let secondNode: IDoublyNode;
    let thirdNode: IDoublyNode;

    beforeEach(() => {
        list = new DoublyList();
        firstNode = new DoublyNode('first');
        secondNode = new DoublyNode('second');
        thirdNode = new DoublyNode('third');
        list.push(firstNode);
        list.push(secondNode);
        list.push(thirdNode);
    })

    it('constructor', () => {
        expect(list).toEqual(jasmine.any(DoublyList));
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
        list.delete(1);
        expect(list.length).toEqual(2);
        expect(list.get(0)).toEqual(firstNode);
        expect(list.get(1)).toEqual(thirdNode);
        list.delete(0);
        expect(list.length).toEqual(1);
        expect(list.get(0)).toEqual(thirdNode);
    });
});
