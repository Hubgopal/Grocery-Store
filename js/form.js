// Select Form Container and Close Buttons
const fContainer = document.getElementById("fContainer");
const fCloseRegister = document.getElementById("fCloseRegister");
const fCloseLogin = document.getElementById("fCloseLogin");

// Function to prevent scrolling when login form is open
function preventScroll() {
  document.body.style.overflow = "hidden"; // Disable scrolling
}

// Function to allow scrolling when login form is closed
function allowScroll() {
  document.body.style.overflow = "auto"; // Enable scrolling
}

// Close Form Container
fCloseRegister.addEventListener("click", () => {
  fContainer.style.display = "none";
  allowScroll(); // Allow scrolling again
});

fCloseLogin.addEventListener("click", () => {
  fContainer.style.display = "none";
  allowScroll(); // Allow scrolling again
});

// Toggle Between Registration and Login Forms
const fRegister = document.getElementById("fRegister");
const fLogin = document.getElementById("fLogin");

document.getElementById("fToLogin").addEventListener("click", (e) => {
  e.preventDefault();
  fRegister.classList.add("hidden");
  fLogin.classList.remove("hidden");
  preventScroll(); // Prevent scrolling when login form is shown
});

document.getElementById("fToRegister").addEventListener("click", (e) => {
  e.preventDefault();
  fLogin.classList.add("hidden");
  fRegister.classList.remove("hidden");
  preventScroll(); // Prevent scrolling when registration form is shown
});

// Handle Registration
document.getElementById("fRegisterForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("fUsername").value;
  const email = document.getElementById("fEmail").value;
  const password = document.getElementById("fPassword").value;

  localStorage.setItem("user", JSON.stringify({ username, email, password }));
  alert("Registration successful! Please log in.");
  fRegister.classList.add("hidden");
  fLogin.classList.remove("hidden");
  preventScroll(); // Prevent scrolling after registration form submission
});

// Handle Login
document.getElementById("fLoginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("fLoginEmail").value;
  const password = document.getElementById("fLoginPassword").value;

  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.email === email && user.password === password) {
    alert(`Welcome back, ${user.username}!`);
  } else {
    alert("Invalid login credentials. Please try again.");
  }
  allowScroll(); // Allow scrolling again after login
});

// Add Event Listener for User Button to Open Login Form
const fUserButton = document.getElementById("fUserButton");
fUserButton.addEventListener("click", () => {
  fContainer.style.display = "block"; // Show the form container
  fRegister.classList.add("hidden"); // Hide the registration form
  fLogin.classList.remove("hidden"); // Show the login form
  preventScroll(); // Prevent scrolling when the login form is displayed
});
