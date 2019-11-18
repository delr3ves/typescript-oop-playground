import Promotion from "../../../src/basics/adalab/Promotion";
import Student from "../../../src/basics/adalab/Student";
import Adalab from "../../../src/basics/adalab/Adalab";

const graceStudents = [
  new Student("Andre", new Date("1995/06/04"), "email", false),
  new Student("Marta G", new Date("1996/06/04"), "email", false),
  new Student("Marta P", new Date("1995/06/04"), "email", false),
  new Student("Clara", new Date("1999/06/04"), "email", false),
  new Student("Alex", new Date("1992/06/04"), "email", false),
  new Student("Patri", new Date("1992/06/04"), "email", true),
  new Student("Coco", new Date("1985/06/04"), "email", true),
  new Student("Eva", new Date("1991/06/04"), "email", true),
];

const hamiltonStudents = [
  new Student("Nisu", new Date("1995/06/04"), "email", false),
  new Student("Super advanced!!!", new Date("1995/06/04"), "email", true)
];

const promoG = new Promotion(graceStudents);
const promoH = new Promotion(hamiltonStudents);

const adalab = new Adalab([promoG, promoH]);

describe("Promotions", () => {
  it("should calculate proper percentage of promo Grace", () => {
    expect(promoG.percentageOfStudentsWorking()).toBe(37.5);
  });

  it("should calculate proper percentage of promo Hamilton", () => {
    expect(promoH.percentageOfStudentsWorking()).toBe(50);
  });

  it("should calculate proper averge age of promo Grace", () => {
    expect(promoG.getAverageAge()).toBe(25.875);
  });

  it("should calculate proper averge age of promo Hamilton", () => {
    expect(promoH.getAverageAge()).toBe(24);
  });
});

describe("Adalab", () => {
  it("should calculate proper percentage of promo the whole promotions", () => {
    expect(adalab.percentageOfStudentsWorking()).toBe(43.75);
  });

});
