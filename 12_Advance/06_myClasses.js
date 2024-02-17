class User{
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword(){
       return `${this.password}abc` 
    }
    changeUsername(){
        return `${this.username.toLowerCase()}`
    }
}

const chai = new User("CHAI","chai@google.com",123)

console.log(chai);
console.log(chai.encryptPassword()); 
console.log(chai.changeUsername()); 

// behind the scene

function user(username,email,password){
    this.username = username
    this.email = email
    this.password = password
}

user.prototype.encryptPassword = function(){
    return `${this.password}sqrqzq`
}
user.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new user("tea","tea@gmail.com",4321)

console.log(tea.encryptPassword());