import {IArrayList} from "./IArrayList";

export class ArrayList implements IArrayList {
    private data: {
        [index: number]: any
    };
    public length: number;

    constructor() {
        this.length = 0;
        this.data = {};
    }

    delete(index: number): void {
        if (this.data[index]) {
            delete this.data[index];
            this.length -= 1;

            if (index !== this.length - 1) {
                this.collapseTo(index);
            }
        }
    }

    get(index: number): any {
        return this.data[index];
    }

    pop(): any {
        const lastElement = this.data[this.length - 1];

        if (lastElement) {
            delete this.data[this.length - 1];
            this.length -= 1;
            return lastElement;
        }
    }

    push(element: any): void {
        this.data[this.length] = element;
        this.length += 1;
    }

    private collapseTo(index: number) {
        for (let prop in this.data) {
            if (Number(prop) > index) {
                this.data[Number(prop) - 1] = this.data[prop];
            }
        }
    }
}
