import { sayHi } from "../src/greetings";

test("should say hi to the name", () => {
  expect(sayHi("Serch")).toBe("Hi Serch");
});
