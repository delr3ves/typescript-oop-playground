import { Agent } from "http";

export class Person {
  public name: string;
  public email: string;
  private birth: Date;

  constructor(name: string, birth: Date, email: string) {
    this.name = name;
    this.birth = birth;
    this.email = email;
  }

  public age(): number {
    const now = new Date();
    return now.getFullYear() - this.birth.getFullYear();
  }

  public sayHi(another: Person): string {
    return `Hi ${another.name} I'm ${this.name}`;
  }

}

export const Sergio = {
  name: "Sergio Arroyo",
  email: "sergio@serch.dev",
  birth: new Date("1983/05/23"),
};

function sayHi(person: Person): string {
  return `Hi ${person.name}`;
}
