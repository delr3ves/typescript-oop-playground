import CollectionOnSteroids from "./CollectionOnSteroids";
import Student from "./Student";

export default class Promotion {
  public students: Student[];
  constructor(students: Student[]) {
    this.students = students;
  }

  public percentageOfStudentsWorking() {
    const working = this.students.filter((student) => {
      return student.isWorking;
    }).length;
    return working * 100 / this.students.length;
  }
  public getAverageAge() {
    const ages = this.students.map((student) => student.age());
    return new CollectionOnSteroids(ages).avg();
  }
}
