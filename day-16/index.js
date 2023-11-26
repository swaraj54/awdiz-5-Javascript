// Event Loop 
// Closure 


// Closure 


function outerFunction() {
    const myname = "awdiz";
    function innerFunction() {
        return `Hello everyone, Im ${myname}..`;
    }
    return innerFunction;
}
var result = outerFunction();
console.log(result())

// for(){
//     for(){
//         nested for loop
//     }
// }



// Event Loop 



console.log("Starting")

setTimeout(() => {
    console.log("settimeout")
 }, 0)

console.log("Ending")



// Promise  // - calling backend api
// resolve() - success
// reject()  - fail
// then catch

// asycn await - try catch - response -> varible


Promise.resolve((data) => {
    console.log(data)
}).rejct((error) => {
    console.log(error)
})

console.log("start")

Promise.resolve().then(() => {
    console.log("promise")
})

console.log("end")




console.log("start")
setTimeout(() => {
    console.log("st")
},0)
Promise.resolve().then(() => {
    console.log("promise")
})
console.log("end")















