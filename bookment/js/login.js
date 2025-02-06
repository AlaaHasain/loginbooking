document.getElementById("signin").addEventListener("submit", function (event) {
    event.preventDefault(); 




    let loginEmail = document.getElementById("loginEmail").value;
    let loginPassword = document.getElementById("loginPassword").value;

    let storedEmail = localStorage.getItem("email");
    let storedPassword = localStorage.getItem("password");

    if (loginEmail === storedEmail && loginPassword === storedPassword) {
        alert("You have successfully logged in!");
        window.location.href = "#"; 
    } else {
        alert("Incorrect email or password!");
    }

    
});
