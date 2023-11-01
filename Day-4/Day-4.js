// Conditional Statement 

// 1. if else 
// 2. switch 


// if else

// syntax 

// if (conditions){
//     statement 1
// } else {
//     statement 2
// }

// Q 1. Find user age is greter than 19 or not. 

var userAge = 20;
// console.log(userAge > 19)

if (userAge > 19) {
    console.log("You are allowed for dl.")
} else {
    console.log("You are not allowed for dl.")
}



// Q  2. Find user age is greter than 19 and lesser than 90 or not . 

var userAge = 10;

if(userAge > 19 && userAge < 90 ){
    console.log("Your age is greter tnhan 19 and lesser than 90. You are allow..")
} else {
    console.log("Your age is might be lesser than 19 or more than 90.")
}


// Q  3. Find user age is greter than 19 and lesser than 90  then "allow for dl" ,
// if age is lesser than 19 then return "you are under age" ,
// if age more than 90, then return "You are over age.",
// if age is 19 then return " you are allow for LL." . 


var userAge = 19;

if (userAge > 19 && userAge < 90) {
    console.log("Your allowd/")
} else if (userAge < 19) {
    console.log("You are under age.")
} else if (userAge >= 90) {
    console.log("You are over age.")
} else {
    console.log("You are allow for LL.")
}



// Switch
// switch ("value2") {
//     case "value1":
//         console.log("hji")
//         break;

//     case "value2":
//         console.log("hji")
//         break;

//     case "value3":
//         console.log("hji")
//         break;

//     default:
//         console.log("hji")
//         break;
// }





var material = "steel";

switch (material) {
    case "steel":
        console.log("Material is steel")
        break;
    case "copper":
        console.log("Material is copper")
        break;
    case "plastic":
        console.log("Material is plastic")
        break;
    default:
        console.log("Material is not defined.")
        break;
}


// Datatype String, number, boolean , 
// undefined
// array 


var myName 
console.log(myName)
console.log(typeof myName)

// syntax[]


var myData = ["Swaraj", 25, true, "Hii", 23456, [1, 2, 3]]
console.log(myData)
console.log(myData.length) // 6
console.log(myData[0])
console.log(myData[1])
console.log(myData[2])
console.log(myData[3])
console.log(myData[4])
console.log(myData[5]) // [1,2,3]
console.log(myData[5][0]) // 1


var students = ['jay', 'raj', 'abc'];

console.log(students)

students.push("xyz") // add the element at the end of array

console.log(students)


var number = [1, 2, 4, 5]
number.pop(); // remove last element
number.pop();
number.pop();
console.log(number) // [1]