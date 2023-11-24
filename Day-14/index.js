Pre defined functions for array 

push pop shift unshift

map 

var array = [1, 2, 3, 4]

console.log(array, "array")

var result = array.map((number) => number * 2) // return array with updates values
console.log(result, "result")

foreach 


var array = [2, 3, 4, 5];

array.forEach((number) => console.log(number * 2))



reduce 

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 10;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
);

console.log(sumWithInitial);


filter 

var list = ["abc", "awdiz", "rahul", "hi everyone", "welcome"];

var result = list.filter((str) => str.length < 8)

console.log(result,"result")



map     -> returned array of values
foreach => seperate values
reduce  => single value
filter  -> array of values but filtere


setTimeout(() => {
    console.log("Hii")
}, 5000)



setTimeout(() => {
    console.log("Hii")
    console.log("Hello")
}, 3000)

var counter = 0;
const message = setInterval(() => {
    counter++;
    console.log(counter)
}, 1000)

clearInterval(message)

