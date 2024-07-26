
// Activity 1: Class Definition

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
  
    greet() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

const person1 = new Person('Piyush', 20);

console.log(person1.greet());



