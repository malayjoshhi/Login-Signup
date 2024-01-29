document.getElementById('loginform').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('loginusername').value;
    const password = document.getElementById('loginpasswd').value;

    if(username === 'admin' && password === 'password') {
        alert('Login successful');
    } else {
        alert('Invalid username or password');
    }
});

document.getElementById('registrationform').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('regusername').value;
    const email = document.getElementById('regemail').value;
    const password = document.getElementById('regpasswd').value;
    const confirmPassword = document.getElementById('regconfpasswd').value;

    if(username && email && password && confirmPassword) {
        if(password === confirmPassword) {
            alert('Registration successful');
        } else {
            alert('Passwords do not match');
        }
    } else {
        alert('Please fill in all fields');
    }

});