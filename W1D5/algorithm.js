/////////////////////////////////////////////////
// Subj:    Algorithm W1D5
// By:      Virgilio D. Cabading Jr.
// Created: October 17, 2021
/////////////////////////////////////////////////

import { print_desc } from "./module.js";
import { print_ln } from "./module.js";

//// HOW TO SWAP VARIABLES //////////////////////
print_desc("How to swap variables");
var fruit1 = "apples";
var fruit2 = "oranges";
    
fruit2 = fruit1;
    
console.log(fruit2 + " and " + fruit1);
print_ln();

//// HOW TO SWAP VARIABLES version 2 ////////////

var fruit1 = "apples";
var fruit2 = "oranges";
    
var temp = fruit1; // temp is a common name for this
fruit1 = fruit2;
fruit2 = temp;
    
console.log(fruit2 + " and " + fruit1);
print_ln();

//// WHILE LOOPS ////////////////////////////////
print_desc("While Loops");

