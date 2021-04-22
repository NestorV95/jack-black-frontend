const showWelcome = () => {
    // showFullAgeCheck()
    fillLoginContainers()
}

const showHomePage= () =>{
    clearBodyDiv()
    fillLoginContainers()
}

const showLoginContainers = () =>{
    const bodyDiv = document.querySelector('.body-div')
    const homeSignInDiv = document.createElement('div')
    homeSignInDiv.className = 'home-sign-in-container'
    const homeFormDiv = document.createElement('div')
    homeFormDiv.className ='home-form-container'
    const loginDiv = document.createElement('div')
    loginDiv.className = 'login-button-container'
    const signUpDiv = document.createElement('div')
    signUpDiv.className = 'sign-up-button-container'
    homeSignInDiv.append(homeFormDiv, loginDiv, signUpDiv)
    bodyDiv.append(homeSignInDiv)
}

const fillLoginContainers = () => {
    showLoginContainers()
    fillLoginButton()
    fillSignUpButton()
    
}

const fillLoginButton = () => {
    const loginDiv = document.querySelector('.login-button-container')
    loginDiv.innerHTML = ''
    const welcomeLogin = document.createElement("button")
    welcomeLogin.className = 'login-button'
    welcomeLogin.innerText = 'Login'
    loginDiv.append(welcomeLogin)
    welcomeLogin.addEventListener("click", () => {
        showLoginForm()
        fillSignUpButton()
    })
}

const fillSignUpButton = () => {
    const signUpDiv = document.querySelector('.sign-up-button-container')
    signUpDiv.innerHTML = ''
    const signUpButton= document.createElement("button")
    signUpButton.className = 'sign-up-button'
    signUpButton.innerText= 'Sign Up'
    signUpButton.addEventListener("click", () => {
        showSignUpForm()
        fillLoginButton()
    })
    signUpDiv.append(signUpButton)
}

