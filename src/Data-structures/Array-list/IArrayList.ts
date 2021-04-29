export interface IArrayList {
    length: number;
    push: (element: any) => void;
    pop: () => void;
    get: (index: number) => void;
    delete: (index: number) => void;
}
