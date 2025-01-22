const pet1 = {
  name: "Nemo",
  type: "Fish",
  age: 2,
};

// const pet2 = {
//   name: "Mofasa",
//   type: "Lion",
//   age: 5,
// };

function sayHello() {
  return `Hello, my name is ${this.name},MyKind is ${this.type},I am ${this.age} years old`;
}

let hello1 = sayHello.bind(pet1);
// let hello2 = sayHello.bind(pet2);
sayHello.name = "Mofasa";
sayHello.type = "Lion";
sayHello.age = 5;

console.log(hello1());
// console.log(hello2());
