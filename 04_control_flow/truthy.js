const userMail = "abhay@google.com"
if(userMail){
    console.log("Got user mail");
}
else{
    console.log("User mail not found");
}
// falsy values
// false , 0 , -0 , In BigInt 0n, "", null, undefined, NaN

// true values
// true , 1, "0",  "false", " ", [], {}, function(){}

// Nullish coalecing Operator (??): null undefined

let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 10
console.log(val1);

// Terniary operator
// condition ? true : false

const iceTea = 100 
iceTea >= 100 ? console.log("iceTea is expensive") : console.log("iceTea is cheap");;