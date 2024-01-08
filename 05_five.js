const codingLang = ["C","Cpp","JS","PY","JAVA"]

// codingLang.forEach( function(val){
//     console.log(val);
// })

// codingLang.forEach((val)=>{
//     console.log(val);
// })

// codingLang.forEach(element => {
//     console.log(element);
// });

// function printMe(item){
//     console.log(item);
// }

// codingLang.forEach(printMe)

// codingLang.forEach( (val,index,arr)=>{{
//     console.log(val," ",index," ",arr);
// }} )

const myCOdingLang = [
    {
        languageName:"C++",
        fileName:"cpp"
    },
    {
        languageName:"JavSCcript",
        fileName:"js"
    },
    {
        languageName:"Python",
        fileName:"py"
    }
]

myCOdingLang.forEach( (obj)=>{
    console.log(obj.languageName);
} )