import {IList} from "./IList";

export class LinkedList implements IList {
    public length: number;
    private list: any[];

    constructor() {
        this.length = 0;
        this.list = [];
    }

    delete(index: number): void {

    }

    get(index: number): void {
        return this.list[index];
    }

    pop(): void {
        this.length -= 1;
        return this.list.pop();
    }

    push(element: any): void {
        this.list.push(element);
        this.length += 1;
    }
}
