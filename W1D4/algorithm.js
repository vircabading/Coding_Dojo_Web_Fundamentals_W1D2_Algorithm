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