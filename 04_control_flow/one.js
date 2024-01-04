 //comaprisons or conditions
 // >,<,>=,<=,!,!=,==,=== , && , ||

 if(true){ // if condition is true it will enter in scope
    console.log("Enter in scope");
 }

 // conditions can by anything like:
 // 2==2 (true), 2 == "2" (true) , 2 === "2" (false) its strict check it will not only check values but data types too
 // if(3!=2) (true) cause 3 is not equal to 2
let score = 100
if(score<10){
    console.log("Score is less than 10");
}
else if(score<40){
    console.log("Score is less than 40");
}
else if(score<60){
    console.log("Score is less than 60");
}
else if(score<80){
    console.log("Score is less than 80");
}
else{
    console.log("Score is less than or equal to 100");
}
const balance = 250
if(balance>200)console.log("balance is greater than 250"); // its implicit scope

const userLoggedIn = true
const debitCard = true
if(userLoggedIn && debitCard && 2!=3){
    console.log("all the conditions are true");
}

if(2!=2 || !userLoggedIn || debitCard){
    console.log("at least one condition is true");
}