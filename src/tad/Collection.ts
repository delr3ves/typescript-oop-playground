export interface Collection {
  size(): number;
  empty(): boolean;
  notEmpty(): boolean;
  push(item: any): any;
  pop(): any;
  concat(another: Collection): Collection;
}
