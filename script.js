function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  // Check if username and password are correct
  if (username === "admin" && password === "password") {
    // If correct, navigate to homepage.html
    window.location.href = "google.com";
  } else {
    alert("Incorrect username or password.");
  }
}
