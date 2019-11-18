import Student from "./Student";
import Promotion from "./Promotion";

// export class Subjects {
//   public name: string;
//   public numberOfHours: number;
//   public fromDate: Date;
//   public toDate: Date;
// }

// export class Academic {
//   public subjects: Subject[];
// }

export default class Adalab {
  // public subject: Academic;
  private promotions: Promotion[];

  constructor(promotions: Promotion[]) {
    this.promotions = promotions;
  }

  public percentageOfStudentsWorking(): number {
    const percentagePerPromotion = this.promotions.map((promo) => (promo.percentageOfStudentsWorking()));
    return this.average(percentagePerPromotion);
  }

  private average(numbers: number[]): number {
    if (numbers.length === 0) {
        return 0;
    }
    const sum = numbers.reduce((acc: number, item: number): number => (acc + item), 0);
    return  sum / numbers.length;
  }
  // public subjectInProgress(reference: Date): Subjects {

  // }
}

// const adalab = {
//   promotions: [
//     {
//       students: [
//         {
//           name: "Andre",
//           isWorking: false
//         },
//         {
//           name: "Andre",
//           isWorking: false
//         },
//         {
//           name: "Andre",
//           isWorking: false
//         },
//         {
//           name: "Andre",
//           isWorking: false
//         },
//         {
//           name: "Andre",
//           isWorking: false
//         }
//       ]
//     },
//     {
//       students: [
//         {
//           name: "Andre",
//           isWorking: false
//         },
//         {
//           name: "Andre",
//           isWorking: true
//         },
//       ]
//     }
//   ]
// }


// export const percentageOfStudentsWorking = (adalab) => {
//   const promotions = adalab.promotions = [];
//   const percentageWorking = promotions.map((promotion)=> {
//     const students = promotion.students || [];
//     const working = students.filter(student => (student.isWorking));
//     const percentage = students.lenght ? working * 100 / students.lenght : 0;
//     return percentage;
//   });
//   const sumOfPercentages = percentageOfStudentsWorking.reduce((acc, i) => (acc + i), 0);
//   const average = promotions.lenght ? sumOfPercentages / promotions.length : 0;
//   return average;
// }


