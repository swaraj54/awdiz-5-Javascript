// Q Find out indec of three number which addition is target.



// [2, 3, 4]

// 1 - On
// 2 - On^2
// 3 - On^3

// for(){}
// for(){}
// On
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var target = 12;
for (var i = 0; i < array.length - 2; i++) {
    for (var j = i + 1; j < array.length - 1; j++) {
        for (var k = j + 1; k < array.length; k++) {
            // console.log(array[i], array[j], array[k])
            if (array[i] + array[j] + array[k] == target) {
                // console.log(array[i], array[j], array[k])
                console.log([i, j, k])
            }
        }
    }
}

// Function 

// syntax 
function kuchbhi() {
    console.log("Hello from inside function.")
}
kuchbhi();
kuchbhi();
kuchbhi();
kuchbhi();



// var kuchbhi2 = "hello" 
// console.log(kuchbhi2)


function Even() {
    console.log("Number is even.")
}

function Odd() {
    console.log("Number is odd.")
}

var number = 87654;

if(number % 2 == 0){
    Even()
} else {
    Odd()
}