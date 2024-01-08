const myNums = [1,2,3,4,5,6,7,8]

// const newNums = myNums.map( (val) => val+10 )

const newNums = myNums
                .map( (val) => val*10 )
                .map( (val) => val+1 )
                .filter( (val) => val>40 )
console.log(newNums);