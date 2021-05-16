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

        queue = new Queue();
        queue.enqueue('first');
        queue.enqueue('second');
        queue.enqueue('third');
    });

    it('should set nodes properly', function () {

    });

    it('should enqueue properly', function () {

    });

    it('should dequeue properly', function () {

    });
})
