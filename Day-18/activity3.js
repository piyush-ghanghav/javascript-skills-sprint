
// Activity 3: String Algorithms
// • Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.

function countCharacterOccurrences(str) {
    const counts = {};
    
    for (let char of str) {
        if (counts[char]) {
            counts[char]++;
        } else {
            counts[char] = 1;
        }
    }
    
    return counts;
}

console.log(countCharacterOccurrences("hello world")); 

// • Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.
function longestSubstringWithoutRepeatingCharacters(str) {
    let maxLength = 0;
    let start = 0;
    const seenChars = {};

    for (let end = 0; end < str.length; end++) {
        const char = str[end];

        if (seenChars[char] !== undefined && seenChars[char] >= start) {
            start = seenChars[char] + 1;
        }

        seenChars[char] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

console.log(longestSubstringWithoutRepeatingCharacters("abcabcbb")); 
console.log(longestSubstringWithoutRepeatingCharacters("bbbbb")); 
console.log(longestSubstringWithoutRepeatingCharacters("pwwkew")); 
