import {IList} from "./IList";
import {INode} from "./INode";

export class LinkedList implements IList {
    public length: number;
    public node: INode;

    constructor() {
        this.length = 0;
    }

    delete(index: number): void {
        if (!this.node) return null;

        let previous = this.get(index - 1);

        if (!previous) {
            this.node = this.node.next || null;
        } else {
            previous.next = previous.next.next;
        }
        this.length -= 1;
    }

    get(index: number): INode | null {
        if (index === 0) return this.node;

        let element: INode = this.node.next;
        let currentIndex = 1;

        while (element != null) {
            if (currentIndex === index) return element;

            element = element.next;
            currentIndex += 1;
        }

        return null;
    }

    pop(): INode {
        if (this.node) {
            if (this.length === 1) {
                this.length = 0;
                let tmp = this.node;
                this.node = null;
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
        if (!this.node) {
            this.node = element;
        } else {
            let lastElement = this.get(this.length - 1);
            lastElement.next = element;
        }
        this.length += 1;
    }
}
