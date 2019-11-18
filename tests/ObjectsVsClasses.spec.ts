import {Person, Sergio} from "../src/ObjectsVsClasses";

describe("Person suite:", () => {
  const sergio: Person = new Person("Sergio Arroyo", new Date("1983/05/23"), "sergio@serch.dev");

  it("should intialize proper name", () => {
    expect(sergio.name).toBe("Sergio Arroyo");
  });

  it("should intialize proper email", () => {
    expect(sergio.email).toBe("sergio@serch.dev");
  });

  it("should calculate proper age", () => {
    expect(sergio.age()).toBe(36);
  });

  it("should say hi to another person using the class", () => {
    const andre = new Person("Andreina Romero", new Date("2000/01/01"), "superandre@gmail.com");
    expect(sergio.sayHi(andre)).toBe("Hi Andreina Romero I'm Sergio Arroyo");
  });

});
