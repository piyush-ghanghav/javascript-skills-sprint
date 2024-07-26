
// • Task 2: Add a method to the Person class that updates the age property and logs the updated age.

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  
    updateAge(newAge) {
      this.age = newAge;
      console.log(`Updated age: ${this.age}`);
    }
  }
  
  const person2 = new Person('Piyush', 20);
  
  console.log(person2.greet());
  
  person2.updateAge(10);
  