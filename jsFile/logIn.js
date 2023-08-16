document.querySelector('#submit-btn').addEventListener('click', function name(params) {
    const getUserEmail = inputTypeLogIn('user-email');

    const getUserPassword = inputTypeLogIn('user-password')

    if (getUserEmail === 'tansimahmedtasjid@gmail.com' && getUserPassword === '1212') {
        window.location.href = "bank.html"
    }
    else{
        alert('Invalid user')
        return;
    }
    
})