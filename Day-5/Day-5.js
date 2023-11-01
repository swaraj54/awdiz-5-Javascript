// push
// pop
// shift
// unshift


var letters = ["a", "b", 'c', "d", "e"]

letters.shift(); // it removes first element of array
letters.shift();
letters.shift();
console.log(letters)

var numbers = [1, 2, 4, 5, 6, 7, 8];
numbers.unshift(23,45)
numbers.unshift(98) // it adds element to start of an array
console.log(numbers) 


// loops 

// for 
// while

// Q Print numbers from 1 - 1000.
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)


// for 

// for (starting, ending, sequence){ log("code")}


for (var i = 1; i <= 10; i++) { // i = i + 1
    console.log(i) // 1
    // i++
}

// 1 st iteration:
// i = 1, i <= 10, 1 <= 10, true, log(1), i++, i = 2

// 2 st iteration:
// i = 2, i <= 10, 2 <= 10, true, log(2), i++, i = 3

// 3rd iteration
// i = 3, i <= 10, 3 <= 10, true, log(3), i++, i = 4

// 4th iteration
// i = 4, i <= 10, 4 <= 10, true, log(4), i++, i == 5

// 5 th
// 6th
// 7
// 8
// 9 th
// i = 9, i <= 10, 9 <= 10, true, log(9), i++, i = 10

// 10 th
// i = 10, i <= 10, 10 <= 10, true; log(10), i++, i = 11

// 11 th
// i = 11, i <= 10, 11 <= 10, false, loop end.



for(var i = 20 ; i <= 25; i++){
    console.log(i)
}


for (var i = 40; i < 100; i += 10) {
    console.log(i)
}