// Primitive (Pass by value). Datatypes are divided into two parts primitve (Pass by value (copy)) and non-primitive(Pass by reference).
// 7 Types
/*
    1. string
    2. number
    3. boolean
    4. null (empty)
    5. undefined (memory declare hai but value kya rahegi abhi malum nhi)
    6. symbol (use to make value unique)
    7. BigInt (values which are big and not cover in number are manage by bigint).
 */

// non-primitive
/*
    1. array
    2. objects  // if you want to master javascript master objects in javascript and master browser web events or browser events master this two topics you will become javascript master.
    3. functions
 */


// all the primitive values goes in stack and makes copy
// all the non - primitive values are store in heap memory where they get address of value and works on same value if any reference
// make change in it then it will change the actual value

let myName = "Abhay"

let myOtherName = myName

myName = "Abhijeet"

console.log(myName);
console.log(myOtherName);

let userOne = {
    name : "Abhay",
    rollNo : 22
}

let userTwo = userOne

userTwo.name = "Abhijeet"

console.log(userOne.name);
console.log(userTwo.name);