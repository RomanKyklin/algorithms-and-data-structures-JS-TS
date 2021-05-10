import {IList} from "./IList";
import {INode} from "./INode";

export class LinkedList implements IList {
    public length: number;
    public head: INode;
    public tail: INode;

    constructor() {
        this.length = 0;
    }

    delete(index: number): void {
        if (!this.head) return null;

        let previous = this.get(index - 1);

        if (!previous) {
            this.head = this.head.next || null;
        } else {
            previous.next = previous.next.next;
        }
        this.length -= 1;
    }

    get(index: number): INode | null {
        if (index === 0) return this.head;

        let element: INode = this.head.next;
        let currentIndex = 1;

        while (element != null) {
            if (currentIndex === index) return element;

            element = element.next;
            currentIndex += 1;
        }

        return null;
    }

    pop(): INode {
        if (this.head) {
            if (this.length === 1) {
                this.length = 0;
                let tmp = this.head;
                this.head = null;
                return tmp;
            }
            let previousLastNode = this.get(this.length - 2);
            let lastNode = previousLastNode.next;
            previousLastNode.next = null;

            this.length -= 1;

            return lastNode;
        }

        return null;
    }

    push(element: INode): void {
        if (!this.head) {
            this.head = element;
        } else {
            this.tail.next = element;
        }
        this.tail = element;
        this.length += 1;
    }

    shift(node: INode): INode {
        return undefined;
    }
}
