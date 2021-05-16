import {IQueue} from "./IQueue";
import {INode} from "./INode";
import {Queue} from "./Queue";
import {Node} from "./Node";

describe('Queue', function () {
    let queue: IQueue;
    let firstNode: INode;
    let secondNode: INode;
    let thirdNode: INode;

    beforeEach(() => {
        firstNode = new Node('first');
        secondNode = new Node('second');
        thirdNode = new Node('third');

        firstNode.next = secondNode;
        secondNode.next = thirdNode;

        queue = new Queue();
        queue.enqueue('first');
        queue.enqueue('second');
        queue.enqueue('third');
    });

    it('should set nodes properly', function () {
        expect(queue.size).toEqual(3);
        expect(queue.first).toEqual(firstNode);
        expect(queue.first.next).toEqual(secondNode);
        expect(queue.last).toEqual(thirdNode);
    });

    it('should enqueue properly', function () {
        let newNodeValue = 'forth';
        queue.enqueue(newNodeValue);
        expect(queue.size).toEqual(4);
        expect(queue.last.value).toEqual(newNodeValue);
    });

    it('should dequeue properly', function () {
        let dequeueNode = queue.dequeue();
        expect(queue.size).toEqual(2);
        expect(dequeueNode).toEqual(firstNode);
        expect(queue.first).toEqual(secondNode);
        expect(queue.last).toEqual(thirdNode);
    });
})
