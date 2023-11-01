const myArr = [2,4,6,7,9]

const strArr = ["luffy","zoro","sanji","Ace"]

// console.log(myArr);
// console.log(strArr);

// console.log(myArr[2]);
// console.log(strArr[3]);

// myArr.push(0) // push value in array
// console.log(myArr);
// myArr.pop() // pop the last value from array
// console.log(myArr);

// myArr.unshift(8) // push number in starting of array // dont use that much as it is time consuming we have to shift every element
// console.log(myArr);
// myArr.shift() // pop first element in array
// console.log(myArr);

// console.log(myArr.includes(9)); // gives ans in true false if number is present in array or not

// console.log(strArr.indexOf("Ace")); 

const newArr = myArr.join()

// console.log(typeof myArr);
// console.log(typeof newArr);

// slice , splice
console.log("original array before slice: ",myArr);
const newArr1 = myArr.slice(1,3)
console.log("slice array: ",newArr1);
console.log("original array after slice: ",myArr);

console.log("original array before splice: ",myArr);
const newArr2 = myArr.splice(1,3)
console.log("splice array: ",newArr2);
console.log("original array after splice: ",myArr);