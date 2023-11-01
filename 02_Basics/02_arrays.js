const animeChara = ["luffy","Ace","zoro","sanji"]
const dcHeros = ["Batman","Flash","Superman"]

// animeChara.push(dcHeros) // it will directly push complete array as a last single element
// console.log(animeChara);

// const allHeros = animeChara.concat(dcHeros) // it will combine two arrays in new array
// console.log(allHeros);

 const allNewHeros = [...animeChara,...dcHeros] // it will combine all arrays in one single array
//  console.log(allNewHeros);

const anotherArray = [1,2,3,[4,5,6],[2,3,[3,2,[3,2]],5,7]]

const anotherArray2 = anotherArray.flat(Infinity)

// console.log(anotherArray2)

console.log(Array.isArray("Abhay")) /// check if given variable is array or not 

console.log(Array.from("Abhay")) // converts i/o in array

