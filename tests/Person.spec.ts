import { Person } from "../src/Person";

test("should say hi to the other person", () => {
  const me = new Person("Foo");
  const other = new Person("Bar");
  expect(me.sayHi(other)).toBe("Hi Bar, I'm Foo");
});
