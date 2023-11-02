// singleton when we make object like literals its not singleton but when we make it with constructor its singleton
// object literals way to declare object
// Object.create // constructor method

const mySym = Symbol("Key1")

const JsUser = {
    name : "Abhay",
    "full name": "Abhay Jakhere",
    [mySym]: "MyKey1",
    age : 21,
    gender : "male",
    id : 1203,
    email: "aj.com",
    location: "kurla",
    lastLoggedIn: ["monday", "sunday"]
}

console.log(JsUser.name);
console.log(JsUser["name"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "ajgoogle.com"
// Object.freeze(JsUser)  // this will freeze object and wont let make any changes in it 
JsUser.email = "ajmicrosoft.com"
console.log(JsUser["email"]);

console.log(JsUser)

JsUser.greeting = function(){
    console.log("hello user");
}

JsUser.greeting();

JsUser.greetingTwo = function(){
    console.log(`hello, ${this.name}`); // this key points on value of current object
}

JsUser.greetingTwo();