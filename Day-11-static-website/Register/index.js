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
    var userData = { name: name, email, password }
    // console.log("All fields found.")

    var users = JSON.parse(localStorage.getItem("Users")) || [];

    users.push(userData)

    localStorage.setItem("Users", JSON.stringify(users))

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";

    alert("Registration Successfull.")

    window.location.href = './../Login/index.html'

}