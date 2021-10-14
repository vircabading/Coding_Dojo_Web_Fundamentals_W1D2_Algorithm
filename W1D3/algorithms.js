//////////////////////////////////////////
// Algorithms : W1D3
// Virgilio D. Cabading Jr.
// Date: October 14, 2021
//////////////////////////////////////////

console.log("//// ALWAYS IS SUNNY ////////////")

var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";
    
if(isSunny) {
  whatToBring += "sunglasses, ";
}
if(temperature < 50) {
  whatToBring += "a coat, ";
}
if(isRaining) {
  whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";
    
console.log(whatToBring);

console.log("");
console.log("//// PREPARE FOR COUNTDOWN ////////////")
console.log("");

for(var i=10; i>0; i--) {
    if(i != 2) {
      console.log(i);
    } else {
      console.log("ignition!");
    }
  }
      
  console.log("liftoff!");
  
console.log("");
console.log("//// COUNT POSITIVES ////////////")
console.log("");

var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
    
/////////////////////////////////// your code here!

for (var x=0; x< numbers.length; x++) {
    if (numbers[x] > 0) {
        countPositives++;
    }
}
    
console.log("there are " + countPositives + " positive values");
