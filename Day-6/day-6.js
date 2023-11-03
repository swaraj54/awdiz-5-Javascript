// Reverse for loop

// 10 - 1

for (var i = 10; i > 0; i--) {
    console.log(i) // 10 - 9
}



// 750 - 350 , 5

for (var i = 750; i >= 350; i -= 5) {
    console.log(i)
}


//  50 - 10 , 2

for (var i = 50; i >= 10; i -= 2) {
    console.log(i)
}


for (var i = 10; i > 0; i--) {
    console.log(i)
}


for(var i = 30; i > 10; i-=5){
    console.log(i)
}


var students = ["Virat", "Rohit", "Rahul", "Surya"];

// // console.log(students[2])
// // console.log(students[0])

for (var i = 0; i < students.length; i++){
    console.log(students[i], i) // 0 1 2 3 
}


var numbers = [2, 3, 4, 5, 6, 7, 8]

for (var i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i], i) // 6 5 4 3 2 1 0
}


var numbers = [10, 20, 30, 40, 50, 60]

for (var i = numbers.length - 2; i >= 0; i -= 10) {
    console.log(numbers[i]) // i = 4, numbers[4] = 50,
    // i = 4, i = 4 - 10,  -6
}

// 1st iteration
// i = 6 - 2 = 4
// i = 4, i >= 0, 4 >= 0, true, log(50),

//     i = 4 - 10 = -6
// 2nd iteration
// i = -6, i >= 0; -6 >= 0,, false
// loop end


// var i = 4;
// i = i - 10
// console.log(i)

var numbers = [1,2,3,4,5,6]

for (var i = 10; i > 1; i -= 5) {
    console.log(numbers[i])
}