
import {palindrome, palindromeTwo} from "./palindrome_checker.js";

function makeId(length) {
    const result = [];
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let multiplier = length/16383;

    let maxlength = 16383;
    for(let j=0; j<multiplier;j++)
    { 
        const randomValues = new Uint32Array(maxlength);
        crypto.getRandomValues(randomValues);
        for (let i = 0; i < maxlength; i++) {
      result.push(characters.charAt(randomValues[i] % charactersLength));
    }
  
    
     }
     return result.join('').substring(1,length);
    }
  
 function megaPalindrome (num) {
    
    let word = makeId(num);
    let pal = word + word.split('').reverse().join('');
    return pal;    
}




let start = Date.now();
let String=megaPalindrome(30000);
let timeTaken = Date.now() - start;
console.log("Total time taken : " + timeTaken + " milliseconds");
let secondstart = Date.now();
console.log(palindromeTwo(String));
let secondTimeTaken = Date.now() - secondstart;
console.log("Total time taken : " + secondTimeTaken + " milliseconds");

