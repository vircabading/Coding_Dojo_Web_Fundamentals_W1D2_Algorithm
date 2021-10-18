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

