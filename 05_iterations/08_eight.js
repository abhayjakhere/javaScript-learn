// reduce function reduces the array in single value where it travels from left to right and stores the value in accumulator

const nums = [299,221,589,399,320]

// const total = nums.reduce( function(acc,currentValue) {
//     console.log(`accumulator value is: ${acc} and current value is: ${currentValue}`);
//     return acc+currentValue
// },0 )

// const total = nums.reduce( (acc,currentValue) => acc+currentValue,0)

// console.log(total);

const shoppingCart = [
    {
        itemName:"laptopStand",
        price:299
    },
    {
        itemName:"Poster",
        price:399
    },
    {
        itemName:"Cosmetics",
        price:1870
    },
    {
        itemName:"Butter",
        price:560
    },
    {
        itemName:"Buds",
        price:1990
    }
]

const totalCartPrice = shoppingCart.reduce( (acc,item) => acc+item.price,0)

console.log(totalCartPrice);
