import {IList} from "../Linked-List/IList";
import {IDoublyNode} from "./IDoublyNode";

export class DoublyList implements IList {

    head: IDoublyNode;
    length: number;
    tail: IDoublyNode;

    constructor() {
        this.length = 0;
    }

    delete(index: number): void {
        if (!this.head) return null;

        let elementForDelete = this.get(index);

        if (!elementForDelete.previous) {
            this.head = this.head.next || null;
        } else {
            elementForDelete.previous.next = elementForDelete.next;
        }
        this.length -= 1;
    }

    get(index: number): IDoublyNode {
        if (index === 0) return this.head;

        let element: IDoublyNode = this.head.next;
        let currentIndex = 1;

        while (element != null) {
            if (currentIndex === index) return element;

            element = element.next;
            currentIndex += 1;
        }

        return null;
    }

    pop(): IDoublyNode {
        if (this.head) {
            let result: IDoublyNode;

            if (this.length === 1) {
                [result, this.head] = [this.head, null];
            } else {
                result = {...this.tail};
                this.tail = result.previous;
                this.tail.next = null;
            }

            this.length -= 1;

            return result;
        }

        return null;
    }

    push(element: IDoublyNode): void {
        if (!this.head) {
            this.head = element;
        } else {
            this.tail.next = element;
            element.previous = this.tail;
        }
        this.tail = element;
        this.length += 1;
    }
}
