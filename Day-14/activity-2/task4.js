// • Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.
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
  
    greet() {
      return `${super.greet()} My student ID is ${this.studentId}.`;
    }
  }
  
  // Create an instance of the Student class
  const student1 = new Student('OM', 20, 'UCE10');
  
  // Log the overridden greeting message
  console.log(student1.greet());
  