/************************************************ COMPARISONS ******************************************************/
console.log("Common comparisons: ");

console.log(2>3);
console.log("2">3);
console.log("3">2);
console.log("2"<=3);
console.log("3"==3);
console.log(null>0);
console.log(null==0);
console.log(null>=0);

// Euqality check and comparison are two different concepts in comparison null is converted into number then check so
// null is converted to 0 and 0 is not greater than zero but zero is greater than or equal to zero so its true
// in equality check null is not converted to number so its null is not equal to number

console.log("strict check ===");

console.log("3"==3); // it will convert string to number and give ans as true
console.log("3"===3); // it is strict equality chech where it not only check for equal values but datatypes too so ans is false