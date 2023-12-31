let score = undefined

console.log(typeof (score));

let valueInNumber = Number(score)
console.log(valueInNumber)
console.log(typeof (valueInNumber))

/*
    33 -> number
    "33" -> string
    "33aa" -> type will convert into number but value will be NaN (Not a Number)
    true -> 1 if false -> 0
    undefined -> type will convert into number but value will be NaN (Not a Number)
*/

let isLoggedIn = "0a"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
/*
    1 -> true
    0 -> false
    "" -> false
    "aba" -> true
*/
let num = 3
let inString = String(num)
console.log(typeof (inString));
console.log(inString);

/********************************************** OPERATIONS **************************************************** */

console.log(2+2);  // Addition
console.log(2-2);  // Subtraction 
console.log(2*2);  // Multiplication
console.log(2**3); // 2 to the power 3
console.log(2/2);  // Divide
console.log(2%2);  // Reminder