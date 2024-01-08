let index = 0

// loop runs while the condition is true we have to write some statement which will break the loop else it will stuck in infinite loop
while(index<=10){
    // console.log(`value of index is ${index}`);
    index = index + 2
}

let i = 0
let myHeros = ["Batman","Spiderman","Thor","Flash","Hulk"]

while(i<myHeros.length){
    // console.log(myHeros[i]);
    i++;
}

// do while it will process the loop at least one whether it satisfies condition or not 
let j = 0
do{
    console.log(`Hero number ${j+1}: ${myHeros[j++]}`);
}while(j<myHeros.length)

// herer score is already greater than 10 though it will execute the loop once
let score = 12
do{
    console.log(`Score is: ${score++}`);
}while(score<=10)
