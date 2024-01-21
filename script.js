function redirectToSignupPage() {
    // Specifying the URL of the signup.html page
    var signupPageUrl = "signup.html";

    // Redirecting to the signup.html page
    window.location.href = signupPageUrl;
}

// Attaching the function to the button click event
document.getElementById("signup-btn").addEventListener("click", redirectToSignupPage);

document.getElementById('learn-more-btn').addEventListener('click', function() {
    window.location.href = 'signup.html'; // Redirects to the sign-up page
});
function handleSubmit() {
    // Here you would typically send data to the server
    // For demonstration, we'll just simulate a submission and redirect
    alert('Form submitted! Redirecting to home page...');
    window.location.href = 'index.html'; // Redirect to the home page (index.html)
    return false; // Prevent the default form submission since we're simulating it
}

document.getElementById('signup-form').onsubmit = handleSubmit;

