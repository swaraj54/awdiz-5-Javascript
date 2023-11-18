// 1 Save

// localStorage.setItem(key, value)

localStorage.setItem("mystudents", ["Virat", "rOHIT"])


// 2 Read

// localStorage.getItem(key)


var data = localStorage.getItem("mystudents")

// 3 delete


// localStorage.removeItem(key)

localStorage.removeItem("mystudents")





JSON.stringify(), JS -> JSON

{ name: "awdiz" } -> { "name": "awdiz" }


JSON.parse(),  JSON -> JS 

{ "name": "awdiz" } -> { name: "awdiz" }