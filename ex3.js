let Person = function (name, age, favouriteFood) {
  this.name = name;
  this.age = age;
  this.favouriteFood = favouriteFood;
};

const avery = Person("Avery", 20, "Dark Chocolate");
const jackie = new Person("Jackie", 35, "Sourdough Bread");
console.log(avery);
console.log(jackie);
