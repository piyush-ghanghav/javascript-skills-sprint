// Activity 5: Practical Applications
// • Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). 
// Log whether the password is valid.



const password = "Password@123!";
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const isPasswordValid = passwordRegex.test(password);

console.log("Task 9 - Is the password valid?", isPasswordValid);


// • Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.

const url = "https://www.example.com";
const urlRegex = /^(https?:\/\/)?([\w.-]+)+(:\d+)?(\/[\w.-]*)*\/?$/;
const isUrlValid = urlRegex.test(url);

console.log("Task 10 - Is the URL valid?", isUrlValid);