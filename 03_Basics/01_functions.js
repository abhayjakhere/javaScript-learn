function sayMyName(){
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("Y");
}


// sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }
function addTwoNumbers(number1,number2){
    let result = number1 + number2
    return result
}
// console.log(addTwoNumbers(3,4));

function userLoggedInMessage(username="sam"){
    if(!username){
        console.log("Please Enter a username");
        return
    }
    return `${username} just logged In`
}

// console.log(userLoggedInMessage());

// function calculateCartPrice(...num1){ // it will take mulitple values and bunddle them in single array and will return it just like spread.its called rest
//     return num1;
// }

// console.log(calculateCartPrice(200,300,400));

function calculateCartPrice(val1,val2,...num1){ // hear 200 and 100 goes into val1 and val2 and rest of numbers goes in num1 in arrray format
    return num1;
}
// console.log(calculateCartPrice(200,100,500,1000));

const user = {
    ProductName : "tshirt",
    price: 200
}
function handleObject(anyObject){
    console.log(`product is ${anyObject.ProductName} and its price is ${anyObject.price}`);
}
// handleObject(user);
// handleObject({
//     ProductName : "Jeans",
//     price:1999 
// })

const MyFavAnime = ["OnePiece","Jujutsu Kaisen","Haikyuu","SpyXfamily"]

function handleArray(anyArray){
    let last = anyArray.length-1
    return `First Favourite anime is ${anyArray[0]} and last favourite is ${anyArray[last]}`
}
console.log(handleArray(MyFavAnime));