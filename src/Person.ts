export class Person {
    public name: string;
    constructor(theName: string) { this.name = theName; }
    public sayHi(other: Person) {
        return `Hi ${other.name}, I'm ${this.name}`;
    }
}
