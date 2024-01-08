// for of

let arr = [1,2,3,4,5,6]
for(const num of arr){
    // console.log(num);
}

let greeting = "Hello world"

for(const greet of greeting){
    // console.log(`Each char is: ${greet}`);
}

// MAPS

const map = new Map()

map.set("IN","INDIA")
map.set("CND","CANADA")
map.set("USA","UNITED STATES OF AMERICA")
map.set("JPN","JAPAN")
map.set("IN","INDIA")

// console.log(map);

// in for of loop if we want to print key and value separately of map we can print it as follow

for(const [key,value] of map){
    // console.log(`for key: ${key} value is: ${value}`);
}

const myGames = {
    "game1" : "GTAV",
    "game2" : "NFS",
    "game3" : "PUBG"
}

// for(const [key,value] of myGames){
//     console.log(`object key: ${key} and value is: ${value}`);
// } //  we can not itereate objects with this method
