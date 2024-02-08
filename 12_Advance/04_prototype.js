// let myName = "Abhay   "
// let myChannel = "chai   "
// console.log(myName.truelength());



let myHeros = ["thor","spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

heroPower.hitesh()
myHeros.hitesh()

Array.prototype.heyAbhay = function(){
    console.log(`Hey abhay is printing`);
}

myHeros.heyAbhay()

// heroPower.heyAbhay()

//Inheritance

const user = {
    name:'chai',
    mail:'chai@google.com'
}

const Teacher = {
    makeVideo : true
}

const TeacherSupport={
    isAvailable: false
}

const TASupport = {
    makeAssignments : 'JavaScript',
    fullTime:true,
    __proto__:TeacherSupport
}
Teacher.__proto__=user

// modern syntax

Object.setPrototypeOf(TeacherSupport,Teacher)

console.log(TeacherSupport.makeVideo)

let anotherUsername = 'chaiAurCode    '

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`true lengh is ${this.trim().length}`);
}

anotherUsername.truelength()