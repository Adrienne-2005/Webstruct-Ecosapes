document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const submitBtn = document.querySelector('.submit-btn');

    loginForm.addEventListener('submit', function(event) {
        // 1. Prevent standard browser form reload
        event.preventDefault(); 
        
        // 2. Extract values from fields
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const remember = document.getElementById('remember').checked;

        // 3. Simple log display (Replace this with your actual database/API login call)
        console.log('Sending login credentials...', { email, password, remember });
        
        // 4. Provide visual feedback on successful click interaction
        submitBtn.textContent = 'Signing in...';
        submitBtn.style.background = '#22c55e'; // Shifts color to green dynamically
        
        setTimeout(() => {
            alert(`Logged in with: ${email}`);
            
            // Reset button to normal state
            submitBtn.textContent = 'Sign in';
            submitBtn.style.background = '#4f46e5';
        }, 800);
    });
});