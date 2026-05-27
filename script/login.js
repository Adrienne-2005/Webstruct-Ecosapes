const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const textInt = document.getElementById('text');
    const passInt = document.getElementById('password');

    if (textInt.value.trim() == "" || passInt.value.trim() == "") return;

    alert("Sign in successful!"); 
    window.location.href = './index.html'; 
});
