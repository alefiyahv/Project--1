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
