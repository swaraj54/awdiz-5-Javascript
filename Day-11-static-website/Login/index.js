function Login(event) {
    event.preventDefault();
    // alert("Hi from login function..")

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (!email || !password) {
        return alert("All fields are mandatory")
    }

    var users = JSON.parse(localStorage.getItem("Users"));
    console.log(users)

    for (var i = 0; i < users.length; i++) {
        // console.log(users[i],"users[i]")
        if (users[i].email == email && users[i].password == password) {
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
            window.location.href = "./../index.html";
            return alert("Login successfull.")
        }
    }

    return alert("Please check your email & password.")

}