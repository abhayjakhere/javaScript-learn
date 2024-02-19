const descriptionOfPi = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descriptionOfPi);

const chai={
    name:"chai",
    price:10,
    isAvailable:true
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,"name",{
    writable:false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));