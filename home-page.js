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
    // const loginDiv = document.createElement('div')
    // loginDiv.className = 'login-button-container'
    // const signUpDiv = document.createElement('div')
    // signUpDiv.className = 'sign-up-button-container'
    homeSignInDiv.append(homeFormDiv)
    bodyDiv.append(homeSignInDiv)
}

const fillLoginContainers = () => {
    showLoginContainers()
    fillLoginButton()
    fillSignUpButton()
    
}

const fillLoginButton = () => {
    const homeSignInDiv = document.querySelector('.home-sign-in-container')
    const loginDiv = document.createElement('div')
    loginDiv.className = 'login-button-container'
    const welcomeLogin = document.createElement("button")
    welcomeLogin.className = 'home-login-button'
    welcomeLogin.innerText = 'Login'
    welcomeLogin.addEventListener("click", () => {
        fillSignUpButton()
        showLoginForm()
    })
    loginDiv.append(welcomeLogin)
    homeSignInDiv.append(loginDiv)
}

const fillSignUpButton = () => {
    const homeSignInDiv = document.querySelector('.home-sign-in-container')
    const signUpDiv = document.createElement('div')
    signUpDiv.className = 'sign-up-button-container'
    const signUpButton= document.createElement("button")
    signUpButton.className = 'home-sign-up-button'
    signUpButton.innerText= 'Sign Up'
    signUpButton.addEventListener("click", () => {
        fillLoginButton()
        showSignUpForm()
    })
    signUpDiv.append(signUpButton)
    homeSignInDiv.append(signUpDiv)
}

