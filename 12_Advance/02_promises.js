const promiseOne = new Promise(function(resolve,reject){
    // Do async task
    // Do calls , cryptography, network
    setTimeout(() => {
        console.log('Async task complete');
        resolve()
    },1000);
});

promiseOne.then(()=>{
    console.log('Promise consumed');
});


new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async Task 2");
        resolve()
    },1000)
}).then(()=>{
    console.log("Async 2 resolved");
})

const promiseThree = new Promise( (resolve,reject)=>{
    setTimeout( ()=>{
        resolve({userName:'Adi',email:'abhay@google.com'})
    },1000)
})

promiseThree.then((user)=>{
    console.log(user);
})


const promiseFour = new Promise( (resolve,reject)=>{
    setTimeout(()=>{
        let error = false
        if(!error){
            resolve({userName:'Abhay',Password:'1234'})
        }else{
            reject('ERROR: something went wrong')
        }
    },1000)
})

promiseFour.then( (user)=>{
    console.log(user);
    return user.userName
}).then((userName)=>{
    console.log(userName);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log('The promise is either resolve or rejected');
})


// async await

const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({userName:'JavaScript',password:'1234'})
        }else{
            reject('ERROR: js went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        return response.userName
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json() // conversion of response will also take some time so we also have to make it await
//         console.log(data);
//     }catch(error){
//         console.log('Error: ',error);
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=> console.log(error))