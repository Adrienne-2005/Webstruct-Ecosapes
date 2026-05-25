const loginForm = document.getElementsByClassName('form-input');
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', function() {
    const textInt = document.getElementById('text');
    const passInt = document.getElementById('password');

    if (textInt.value.trim() == "") {
        return;
    }
    
    if (passInt.value.trim() == "") {
        return;
    }

    window.location.href = '/index.html';
    alert("Sign in successful!");
});
