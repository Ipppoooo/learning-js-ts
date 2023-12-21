"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = require("readline-sync");

function phoneticLookup(val) {
    let result = "";
  
    // Only change code below this line
    const lookup = {
  
      "alpha" : "Adams",
        
      "bravo" : "Boston",
      
      "charlie":"Chicago",
        
      "delta": "Denver",
       
      "echo":"Easy",
        
      "foxtrot":"Frank"
    }
    result= lookup[val]
  
    // Only change code above this line
    return result;
  }
  const firstStr = (0, readline_sync_1.question)('Enter first string\n');
  console.log(phoneticLookup(firstStr));