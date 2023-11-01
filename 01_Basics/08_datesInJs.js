let myDate = new Date
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());

let myCreateDate = new Date(2023,2,16,5,3)
let myCreateDate1 = new Date("2022-01-08")
let myCreateDate2 = new Date("10-12-2018")

// console.log(myCreateDate.toLocaleString());
// console.log(myCreateDate1.toLocaleString());
// console.log(myCreateDate2.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myCreateDate.getTime());
// console.log(myTimeStamp);

let newDate = new Date()

// console.log(newDate.toLocaleString());

// console.log(newDate.getMonth()+1);  // +1 because in js month start from 0.

newDate.toLocaleString('default',{
    weekday: "short"
} )
console.log(newDate.toLocaleString());