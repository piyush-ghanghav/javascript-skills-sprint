// • Task 3: Define a class Student that extends the Person class. Add a property studentld and a method to return the student ID. Create an instance of the Student class and log the student ID.
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
  
  class Student extends Person {
    constructor(name, age, studentId) {
      super(name, age); 
      this.studentId = studentId;
    }
  
    getStudentId() {
      return `Student ID: ${this.studentId}`;
    }
  }
  
  const student1 = new Student('OM', 20, 'CE10');
  
  console.log(student1.getStudentId());

