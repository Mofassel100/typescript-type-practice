// /* class make and with object created */

// class Food {
//   name: string;
//   Ftype: string;
//   cooking: string;
//   constructor(name: string, Ftype: string, cooking: string) {
//     this.name = name;
//     this.Ftype = Ftype;
//     this.cooking = cooking;
//   }
// }
class Food {
  name: string;
  Ftype: string;
  cooking: string;
  constructor(name: string, Ftype: string, cooking: string) {
    this.name = name;
    this.Ftype = Ftype;
    this.cooking = cooking;
  }
  FoodCourse() {
    console.log(`${this.name} its very testy this food ${this.Ftype}`);
  }
}
const HotFood = new Food("Birani", "tehery", "nithg");
HotFood.FoodCourse();
console.log(HotFood);
