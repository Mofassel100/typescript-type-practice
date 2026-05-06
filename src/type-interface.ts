interface User {
  name: string;
  email: string;
  phone: number;
}
const user: User = {
  name: "Mofassel",
  email: "mofassel6145@gmail.com",
  phone: 1752615522,
};
/* Function type interface */
interface Add {
  (a: number, b: number): number;
}
const sum: Add = (x, y) => x * y;
const mul = sum(10, 5);
console.log(sum);
//  interface extends
interface Persone {
  name: string;
}
interface Student extends Persone {
  roll: number;
}
