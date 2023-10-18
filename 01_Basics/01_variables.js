const accountId = 144553
let accountEmail = "abhay@google.com"
var accountPassord = "12345"
accountCity = "Pune"

/*
    in modern development we use let instead of vat because of in issue in block scope and functional scope
    so always use let
*/

// accountId = 1111 -> not allowed

accountEmail = "hi@google.com"
accountPassord="0000"
accountCity="Banglore"

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassord);
// console.log(accountCity);

console.table([accountId,accountEmail,accountPassord,accountCity]);