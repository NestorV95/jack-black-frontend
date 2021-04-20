const showSignUpForm = () => {
    const bodyDiv = document.querySelector('.body-div')
    const formContainer = document.createElement('div')
    formContainer.className = "form-container"
    const signUpForm = document.createElement('form')
    signUpForm.className = 'sign-up-form'
    const imageDiv = document.createElement('div')
    const imageLabel = document.createElement('label')
    imageLabel.className = 'sign-up-label'
    imageLabel.innerText = 'Profile Picture:'
    const imageBr = document.createElement('br')
    const imageInput = document.createElement('input')
    imageInput.className = 'sign-up-input'
    imageInput.type = 'text'
    imageInput.name = 'picture'
    imageDiv.append(imageLabel, imageBr, imageInput)
    const usernameDiv = document.createElement('div')
    const usernameLabel = document.createElement('label')
    usernameLabel.className = 'sign-up-label'
    usernameLabel.innerText = 'Username:'
    const usernameBr = document.createElement('br')
    const usernameInput = document.createElement('input')
    usernameInput.className = 'sign-up-input'
    usernameInput.type = 'text'
    usernameInput.name = 'name'
    usernameDiv.append(usernameLabel, usernameBr, usernameInput)
    const passwordDiv = document.createElement('div')
    const passwordLabel = document.createElement('label')
    passwordLabel.className = 'sign-up-label'
    passwordLabel.innerText = 'Password:'
    const passwordBr = document.createElement('br')
    const passwordInput = document.createElement('input')
    passwordInput.className = 'sign-up-input'
    passwordInput.type = 'text'
    passwordInput.name = 'password'
    passwordDiv.append(passwordLabel, passwordBr, passwordInput)
    const confirmDiv = document.createElement('div')
    const confirmLabel = document.createElement('label')
    confirmLabel.className = 'sign-up-label'
    confirmLabel.innerText = 'Confirm Password:'
    const confirmBr = document.createElement('br')
    const confirmInput = document.createElement('input')
    confirmInput.className = 'sign-up-input'
    confirmInput.type = 'text'
    confirmInput.name = 'confirmation'
    confirmDiv.append(confirmLabel, confirmBr, confirmInput)
    const submitDiv = document.createElement('div')
    const submitButton = document.createElement('input')
    submitButton.className = 'sign-up-button'
    submitButton.type = 'submit'
    submitButton.innerText = 'Sign Up'
    submitDiv.append(submitButton)
    signUpForm.append(imageDiv,usernameDiv,passwordDiv,confirmDiv,submitDiv)
    signUpForm.addEventListener('submit',event =>{
        event.preventDefault()
        createUser(event)  
        hideSignUpForm()  
    })
    formContainer.append(signUpForm)
    bodyDiv.append(signUpForm)
} 

const hideSignUpForm = () => {
    const bodyDiv = document.querySelector('.body-div')
    const formContainer = document.querySelector('.form-container')
    bodyDiv.remove(formContainer)
}
