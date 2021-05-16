import {IStack} from "./IStack";
import {Stack} from "./Stack";
import {Node} from "./Node";
import {INode} from "./INode";

describe('Stack', function () {
    let stack: IStack;
    let firstNode: INode;
    let secondNode: INode;
    let thirdNode: INode;

    beforeEach(() => {
        stack = new Stack();
        firstNode = new Node('first');
        secondNode = new Node('second');
        firstNode.next = secondNode;
        thirdNode = new Node('third');
        secondNode.next = thirdNode;

        stack.push('first');
        stack.push('second');
        stack.push('third');
    });

    it('should correctly set first, last and size', function () {
        expect(stack.size).toEqual(3);
        expect(stack.first).toEqual(firstNode);
        expect(stack.last).toEqual(thirdNode);
    })

    it('should push', function () {
        let pushedNode = new Node('forth');
        let returnedValue = stack.push('forth');
        expect(stack.last).toEqual(pushedNode);
        expect(returnedValue).toEqual(4);
        expect(stack.size).toEqual(4);
    });

    it('should pop', function () {
        const poppedValue = stack.pop();
        expect(stack.size).toEqual(2);
        expect(poppedValue).toEqual(thirdNode);
    });
})
