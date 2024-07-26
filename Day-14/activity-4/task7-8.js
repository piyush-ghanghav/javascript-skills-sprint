class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
  }

  updateAge(newAge) {
    this.age = newAge;
    console.log(`Updated age: ${this.age}`);
  }

  static genericGreeting() {
    return 'Hello, this is a generic greeting!';
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(name) {
    const [firstName, lastName] = name.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

// Task 7: Create an instance of the Person class and log the full name using the getter
const person1 = new Person('P', 'G', 30);
console.log(person1.fullName); 

// Task 8: Update the name using the setter and log the updated full name
person1.fullName = 'O B';
console.log(person1.fullName); 
