class Pesson {
  _name: string;
  constructor(_name: string) {
    this._name = _name;
  }
  get name() {
    return this._name;
  }
}
const pG = new Pesson("Mofassel");
pG._name = "Hosain";
console.log(pG._name);
