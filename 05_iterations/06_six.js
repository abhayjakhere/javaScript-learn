const codingLang = ["C++","Java","JavaScript","Python","Ruby"]

// const values = codingLang.forEach( (item) => {
//     // console.log(item);
//     return item
// } )

// console.log(values); // in for each loop it will not return anything for an array

const myNums = [1,2,3,4,5,6,7,8,9,10]

const result = myNums.filter( (val) => val>5 ) // it will return the value   here we have to give an condition after declaring the item each item who satisfies the condition it will be return
// if we oepn scope in arrow function {} the we have to write return statement else we can directly return it with one line
// console.log(result);

// const newNums =[]
// myNums.forEach( (val) => {
//     if(val>5){
//         newNums.push(val)
//     }
// })

// console.log(newNums);

const books = [
    {title:"Book One", genre:"Fiction",publish:1981,edition:2004},
    {title:"Book Two", genre:"Non-Fiction",publish:1992,edition:2008},
    {title:"Book Three", genre:"History",publish:1999,edition:2007},
    {title:"Book Four", genre:"Non-Fiction",publish:1989,edition:2010},
    {title:"Book Five", genre:"Science",publish:2009,edition:2014},
    {title:"Book Six", genre:"Fiction",publish:1987,edition:2010},
    {title:"Book Seven", genre:"History",publish:1986,edition:1996},
    {title:"Book Eight", genre:"Science",publish:2011,edition:2016},
    {title:"Book Nine", genre:"Non-Fiction",publish:1981,edition:1989},
];

let userBooks = books.filter( (bk) => bk.genre==="History")

userBooks = books.filter( (bk) => bk.publish>=1995 && bk.genre==="History" )

console.log(userBooks);