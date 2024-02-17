class user{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`USERNAME is: ${this.username}`);
    }
}

class Teacher extends user{
    constructor(username,rank,subject){
        super(username)
        this.rank = rank
        this.subject = subject
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`); 
    }
}

const chai = new Teacher("chai",1,"DSA")

console.log(chai);
chai.addCourse()
chai.logMe() 