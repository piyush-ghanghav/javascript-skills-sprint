// Task 9: Define a class Account with private fields for balance and methods to deposit and withdraw money

class Account {
    #balance; // Private field
  
    constructor(initialBalance) {
      this.#balance = initialBalance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
        console.log(`Deposited: ${amount}. New balance: ${this.#balance}`);
      } else {
        console.log('Deposit amount must be positive.');
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
        console.log(`Withdrew: ${amount}. New balance: ${this.#balance}`);
      } else {
        console.log('Invalid withdraw amount.');
      }
    }
  
    getBalance() {
      return this.#balance;
    }
  }
  


  // Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation
  
  const account1 = new Account(1000); 
  
  account1.deposit(500); // Deposited: 500. New balance: 1500
  
  // Test withdraw method
  account1.withdraw(200); // Withdrew: 200. New balance: 1300
  
  account1.withdraw(2000); // Invalid withdraw amount.
  
  console.log(`Final balance: ${account1.getBalance()}`); // Final balance: 1300
  