import { Person } from "../../ObjectsVsClasses";

export default class Student extends Person {
  public isWorking: boolean;

  constructor(name: string, birth: Date, email: string, isWorking: boolean) {
    super(name, birth, email);
    this.isWorking = isWorking;
  }
}
