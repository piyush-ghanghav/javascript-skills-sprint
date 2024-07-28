// Activity 3: String Manipulation with Recursion
// • Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.

function stringReverse(str){
    // base case :
    if( str.length<=1 ){
        return str;
    }

    // return lastIndex + remaining recursion

    return  str.charAt(str.length-1) + stringReverse(str.slice(0,-1));

}


console.log(stringReverse('PIYUSH'));
console.log(stringReverse('Hello'));
console.log(stringReverse('BYE'));












// • Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.

function isPallindrome(str){
    
    if(str.length <= 1){
        return true;
    }

    if(str.charAt(0) === str.charAt(str.length -1)){
        return isPallindrome(str.slice(1,-1))
    }

    return false;
}

console.log(isPallindrome("EYE"));
console.log(isPallindrome("BYE"));
console.log(isPallindrome("MADAM"));