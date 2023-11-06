// const tinderUser = new Object() // this is a way to create a singleton object

const tinderUser = {}

tinderUser.id = "123ab"
tinderUser.name = "Abhay"
tinderUser.age = 20
tinderUser.isLoggedIn = true

// console.log(tinderUser);

const regularUser = {
    email : "abhay@google.com",
    fullName : {
        userFullName:{
            firstName:"Abhay",
            lastName:"Jakhere"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullName);
// console.log(regularUser.fullName.userFullName.firstName);
// console.log(regularUser.fullName.userFullName.lastName);

const obj1 = {1:"a",2:"b"}
const obj2 = {2:"1",3:"b"}
const obj3 = {4:"1",5:"b"}

// Object.assign(obj1,obj2,obj3) // this will make obj1 as target and others source and push all objects in obj1
// console.log(obj1);

// const obj4 = Object.assign({},obj1,obj2,obj3)  // it will combine all objects and push in object where we first declare it empty
// console.log(obj4);


const obj4 = {...obj1,...obj2,...obj3} // this is known as spread where it spread and combine 
// console.log(obj4);

// *********** Array of objects *************

const users =[
    {
        id:"001A",
        name: "Abhay",
        age: 20
    },
    {
        id:"001A",
        name: "Abhay",
        age: 20
    },
    {
        id:"001A",
        name: "Abhay",
        age: 20
    }
]

// console.log(users[1]);

// console.log(Object.keys(tinderUser)); // it will display all keys present in object mention
// console.log(Object.values(tinderUser)); // it will display all value present in object mention


console.log(Object.entries(tinderUser)); // it will display all key values pair in arrays in array 

console.log(tinderUser.hasOwnProperty('name')); // gives boolean answer if object has that property or not