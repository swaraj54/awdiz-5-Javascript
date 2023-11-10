// var myArray = [1, 2, 3, "knjbh", true]



// object

// syntax

// var myObject = { key: value }


// var myData = { name: "Awdiz", myAge: 10, studentsList: ["Rahul", "rohit", "virat"], kuchbhi: true, myTest: { hi: "hello" } }

// console.log(myData.name)
// console.log(myData.myAge)
// console.log(myData.studentsList)
// console.log(myData.studentsList[0])
// console.log(myData.myTest)
// console.log(myData.myTest.hi);

// var myObject = {};
// myObject["Name"] = "Akash";
// myObject["Age"] = 25;
// myObject["IscompletedAssignment"] = true;
// myObject["IsActiveOndays"] = ["Monday", "Tuesday"]
// console.log(myObject)

// Q  Given an array and Return only unique numbers . 

// var numbers = [0, 1, 2, 3, 3, 4, 4, 0, 1, 2, 5, 6, 6, 5]

// // answer - [0, 1, 2, 3, 4, 5, 6]

const numbers = [0, 1, 2, 3, 3, 4, 4, 0, 1, 2, 5, 6, 6, 5, 5];

let temp = {};

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] in temp) {
        temp[numbers[i]] += 1;
    } else {
        temp[numbers[i]] = 1;
    }
    // console.log(temp, i)
}
console.log(temp)
console.log(Object.keys(temp));

