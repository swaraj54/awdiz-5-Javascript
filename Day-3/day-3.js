console.log("awdiz")
console.log(typeof ("awdiz"))
console.log(typeof ("123"))
console.log(typeof (1234))
console.log("123" + "123")
console.log(123 + 123)

// swaraj()

// 1. Pre defined function
// 2. User created function 

function add(num1, num2) {
    return num1 + num2
}
console.log(add(2, 3))



// Boolean 

// true , false 
console.log(true)
console.log(typeof (true))
console.log(false)
console.log(typeof (false)) // boolean
console.log(typeof ('false')) // string


// undefined

// varible 
// var 
// const 
// let 


// var 

// syntax 
var name = "Awdiz"
console.log(name)
console.log(typeof (name)) // string

var myStudentsCount = 20;
console.log(myStudentsCount)
console.log(typeof (myStudentsCount)) // number

var kuchbhi = true;
console.log(kuchbhi)

var number1 = 50;
var number2 = 100;
console.log(number1, number2) // 50 100
console.log(number1 + number2) // 150

// Arthmetic operations 

// + - * / %

// var num1 = 10;
// var num2 = 20;

console.log(30 % 2) // 0
console.log(31 % 2) // 1
console.log(123456789 % 2) // 1
console.log(2 == 21) // false
console.log(40 % 2 == 0) // true


// 20 / 2 = 10 
// 20 % 2 = 0

//       ___ 10  = Quiotient
//    2 / 20
//        20
//         0 = remainder



console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)




// Comparison Operator  
//  == , === 

console.log(2 == 2)
console.log("2" == 2) //  check only data true
console.log("2" === 2) // check data and datatypes false
console.log("40" == 40) // true
console.log("400" === 400) // false


// Logical operator 

// && , ||

// && - all conditions must be true then it'll return true otherwise false

// || - if even one condition found true then it'll true , and when all
//  conditions are false then then it'll return false

var userAge = 124;


console.log(userAge > 91 && userAge == 24 && userAge < 25) // false
console.log(userAge < 19 || userAge < 90 || userAge < 124) // false
// console.log()

console.log(2 > 1) // true
console.log(4 < 2) // false
console.log(6 >= 6) // true 
console.log(10 <= 8) // false