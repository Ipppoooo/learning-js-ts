"use Strict"
// Object.defineProperty(exports, "__esModule", { value: true });
// const readline_sync_1 = require("readline-sync");

function removeSpacesAndSpecialChars(str) {
    // Remove spaces and special characters using regex
    let cleanString = str.replace(/[^a-zA-Z0-9]/g, '');
  
    return cleanString;
  }
  
  export function palindrome(str) {
    //makes sure all the chars are lower case
    str = str.toLowerCase();
    str = removeSpacesAndSpecialChars(str);
    // turns str into an array, reverses it and reconverts to a string
    let reversedString = str.split('').reverse().join('');
    //compares the two strings
    
    if (str === reversedString)
    {
        return "Palindrome";
    }
    else
    {
        return "Not a Palindrome";
    }
  }

  export function palindromeTwo(str) {
    //makes sure all the chars are lower case
    str = str.toLowerCase();
    str = removeSpacesAndSpecialChars(str);
    for(let i=0; i<str.length/2; i++)
    {
      if(str[i] != str[str.length-i-1])
      {
        return "Not a Palindrome";
      }
  
    }
    return "palindrome";
  }
  

  
  // const firstStr = (0, readline_sync_1.question)('Enter word to check\n');
  // console.log(palindrome(firstStr)); 
  

  