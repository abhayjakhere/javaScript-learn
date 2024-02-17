class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is: ${this.username}`);
    }
    static createID(){
        return `123`
    }
}

const chai = new User("chai")
console.log(chai.createID());