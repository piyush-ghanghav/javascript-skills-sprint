// • Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.

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
  
    static genericGreeting() {
      return 'Hello, this is a generic greeting!';
    }
  }
  
  console.log(Person.genericGreeting());
  




// • Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
class Student extends Person {
    static numberOfStudents = 0;
  
    constructor(name, age, studentId) {
      super(name, age); 
      this.studentId = studentId;
      Student.numberOfStudents++; 
    }
  
    getStudentId() {
      return `Student ID: ${this.studentId}`;
    }
  
    greet() {
      return `${super.greet()} My student ID is ${this.studentId}.`;
    }
  
    static getStudentCount() {
      return `Total number of students: ${Student.numberOfStudents}`;
    }
  }
  
  const student1 = new Student('OM', 20, 'UCE10');
  const student2 = new Student('Piyush', 22, 'UCS10');
  
  // Log the overridden greeting message
  console.log(student1.greet());
  console.log(student2.greet());
  
  console.log(Student.getStudentCount());