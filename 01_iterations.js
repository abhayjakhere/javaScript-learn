// for

for (let index = 0; index < 10; index++) {
    const element = index+1;
    // console.log(element);
    
}

// we can declare loop inside loop which is known as nested loop or we can add as many condition as we need

// for(let i=1; i<=10;i++){
//     console.log(`${i} table: `);
//     for(let j=1;j<=10;j++){
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
//     console.log("\n");
// }

//printing array

let myHeros = ["Spiderman","Batman","Thor","Flash","Hulk"]

for(let i=0;i<myHeros.length;i++){
    // console.log(myHeros[i]);
}

// if we dont want to iterate the whole loop we can add break statement to exit the loop

// for(let i=0;i<=20;i++){
//     if(i==5){
//         console.log(`Detected 5`);
//         break;
//     }
//         console.log(`value of i is ${i}`);
// }

for(let i=0;i<=20;i++){
    if(i==5){
        console.log(`Detected 5`);
        continue;
    }
    console.log(`5 is at index ${i}`);
}
