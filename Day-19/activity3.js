// Activity 3: Grouping and Capturing
// • Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g.,(123) 456-7890).
const phoneNum = "(123) 456-7890";
const phoneRegex = /\((\d{3})\)\s(\d{3})-(\d{4})/;
const matches = phoneNum.match(phoneRegex);
if(matches){
    const[fullMatch, areaCode, centralOfficeCode, lineNumber] = matches;
    console.log("Phone Number : ",fullMatch);
    console.log("Area Code: ",areaCode);
    console.log("centralOfficeCode: ",centralOfficeCode);
    console.log("Line Number: ",lineNumber);
}

// • Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.

const email  = "abc@gmail.com"
const emailRegex = /^([\w.+-]+)@([\w.-]+\.[a-zA-Z]{2,})$/;
const matches1 = email.match(emailRegex);
if(matches1){
    const[fullMail, userName, domain] = matches1;
    console.log("Email: ",fullMail);
    console.log("userName: ",userName);
    console.log("Domain: ",domain);
}