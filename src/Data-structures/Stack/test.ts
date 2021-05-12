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
        thirdNode = new Node('third');

        stack.push(firstNode);
        stack.push(secondNode);
        stack.push(thirdNode);
    });

    it('should correctly set first, last and size', function () {
        expect(stack.first).toEqual(firstNode);
        expect(stack.last).toEqual(thirdNode);
        expect(stack.size).toEqual(3);
    })

    it('should push', function () {
        let pushedNode = new Node('forth');
        let returnedValue = stack.push(pushedNode);
        expect(stack.last).toEqual(pushedNode);
        expect(thirdNode.next).toEqual(pushedNode);
        expect(returnedValue).toEqual(4);
        expect(stack.size).toEqual(4);
    });

    it('should pop', function () {
        const poppedValue = stack.pop();
        expect(stack.size).toEqual(2);
        expect(poppedValue).toEqual(thirdNode);
    });
})
