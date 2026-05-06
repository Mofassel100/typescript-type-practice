class Dog {
  bark() {
    console.log("woof");
  }
}
class Cat {
  meow() {
    console.log("meow");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}
const d = new Dog();
const m = new Cat();
makeSound(d);
makeSound(m);
