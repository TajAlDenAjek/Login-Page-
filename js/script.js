const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordError = document.getElementById('passwordError')

const button = document.getElementById('submitButton')


button.addEventListener('click', (e) => {
    if (password.value === '') {
        passwordError.style.display = 'block'
        passwordError.innerHTML = `Password can't be blank`
    } else if (password.value.length < 8) {
        passwordError.style.display = 'block'
        passwordError.innerHTML = 'password must have at least 8 chars'
    } else if (password.value.length >20) {
        passwordError.style.display = 'block'
        passwordError.innerHTML = 'password must have at most 20 chars'
    } else {
        passwordError.style.display = 'none'
        handleSubmit()
    }
})

const handleSubmit = () => {
    alert('Success')
    window.location.reload(true);

}