var attempt = 3; 
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "admin" && password == "password") {
        alert("Login successfully");
        window.location = "user.html"; 
        return false;
    }
    else {
        attempt--;
        alert(`Incorrect login details. You have  attempt ${attempt} left`);
        if (attempt == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}

document.getElementById("logout").addEventListener("click", function() {
    alert("Logged out successfully");
    window.location = "index.html";
})