export default class CollectionOnSteroids {
  private items: number[];

  constructor(items: number[]) {
    this.items = items;
  }

  avg(): number {
    const sum = this.items.reduce((acc: number, item: number): number => (acc + item) , 0);
    return this.items.length > 0 ? sum/this.items.length: 0;
  }
}
