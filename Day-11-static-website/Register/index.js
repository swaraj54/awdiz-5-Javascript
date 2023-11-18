function Register(event) {
    event.preventDefault();
    // alert("Hi from register fucntion")
    // console.log("ihiii")

    var name = document.getElementById("name").value;// assignging
    console.log(name, "- name")
    var email = document.getElementById("email").value
    console.log(email, "- email ")
    var password = document.getElementById("password").value;
    console.log(password, "- password")

    if (!name || !email || !password) {
        return alert("All fields are is required")
    }
    var userData = { name: name, email: email, password: password }
    // console.log("All fields found.")

    // store data into localstorage
    localStorage.setItem("Users", JSON.stringify(userData))


    alert("Registration Successfull.")

}