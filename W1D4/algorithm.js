/////////////////////////////////////////////////
// Algorithm
// By: Virgilio D. Cabading Jr.
// Date: October 14, 2021
/////////////////////////////////////////////////

import { print_desc } from "./module.js";
import { print_ln } from "./module.js";

//// CODE FLOW - FUNCTIONS //////////////////////
print_desc("Code Flow - Funcitons");

var x = 5;
    
function setX(newValue) {
    x = newValue; 
}
    
console.log(x);
setX(15);
console.log(x);
print_ln();

//// THE RETURN OF RETURN ///////////////////////
print_desc("The Return of return");

var x = 5;
    
function addToX(amount) {
    return x + amount;
    console.log("hello there");
}
    
console.log(x);
var result = addToX(-10);
console.log(result);
console.log(x);

print_ln();

//// CODE FLOW - IS THE ARRAY A PLALINDROME /////
print_desc("Code Flow - Is the array a palindrome");

function isPal(arr) {
    for(var left=0; left<arr.length/2; left++) {
        var right = arr.length-1-left;
        if(arr[left] != arr[right]) {
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}
    
var result1 = isPal( [1, 1, 2, 2, 1] );
console.log(result1);
    
var result2 = isPal( [3, 2, 1, 1, 2, 3] );
console.log(result2);

