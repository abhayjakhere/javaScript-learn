
let a = 400
var c = 200

if(true){
    let a = 10
    const b = 20
    var c = 30
}

console.log(a);  //a and b will not print due to block scope but c which is var will give problem out of block scope
// console.log(b);
console.log(c);  // c is goint out of scope and changing value for global variable

