// Add any necessary JavaScript functionality here
document.querySelector(".login-button").addEventListener("click", function() {
    // Handle login functionality
    alert("Login button clicked");
});

document.querySelector(".signup-link").addEventListener("click", function() {
    // Handle sign up functionality
    alert("Sign up clicked");
});

document.querySelector(".forgot-password").addEventListener("click", function() {
    // Handle forgot password functionality
    alert("Forgot password clicked");
});

// Added event listeners for About, Contact Us
document.querySelectorAll(".nav-item").forEach(function(item) {
    item.addEventListener("click", function() {
        alert(item.textContent + " clicked");
    });
});

// Get Started button
document.querySelector(".get-started-button").addEventListener("click", function() {
    alert("Get Started clicked");
});

// Remember me checkbox
document.querySelector("#remember-me").addEventListener("change", function() {
    alert("Remember me " + (this.checked ? "checked" : "unchecked"));
});