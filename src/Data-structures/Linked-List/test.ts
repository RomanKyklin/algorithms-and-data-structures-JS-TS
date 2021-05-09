import {LinkedList} from "./List";
import {Node} from "./Node";
import {INode} from "./INode";

describe('LinkedList', function () {
    const range = (length: number) => Array.apply(null, {length: length}).map(Number.call, Number);
    const abcRange = (length: number) => range(length).map((num: number) => String.fromCharCode(97 + num));
    let list: LinkedList;
    let firstNode: INode;
    let secondNode: INode;
    let thirdNode: INode;

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
        expect(list.node).toEqual(firstNode);
        expect(list.node.next).toEqual(secondNode);
        expect(list.node.next.next).toEqual(thirdNode);
        expect(list.node.next.next.next).toEqual(null);
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
        abcRange(26).map((character: any) => list.push(character));
        list.delete(13);
        expect(list.length).toEqual(25);
        expect(list.get(12)).toEqual('m');
        expect(list.get(13)).toEqual('o');
        list.delete(0);
        expect(list.length).toEqual(24);
        expect(list.get(0)).toEqual('b');
    });

});
