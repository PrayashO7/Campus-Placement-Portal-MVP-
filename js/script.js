// Campus Placement Portal JavaScript

// Welcome message when the homepage loads
window.onload = function () {
    console.log("Campus Placement Portal Loaded Successfully!");
};

// Login validation
function loginUser(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    alert("Login Successful!");
    window.location.href = "jobs.html";
}

// Registration validation
function registerUser(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (name === "" || email === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    alert("Registration Successful!");
    window.location.href = "login.html";
}

// Job application
function applyJob(event) {
    event.preventDefault();

    alert("Application Submitted Successfully!");
    window.location.href = "jobs.html";
}

// Admin add job
function addJob(event) {
    event.preventDefault();

    alert("Job Added Successfully!");
}
