const showLoginForm = () => {
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(json => renderLoginForm(json))
}

const renderLoginForm = (json) => {
    const homeFormDiv = document.querySelector('.home-form-container')
    homeFormDiv.innerHTML = ''
    const loginForm = document.createElement("form")
    loginForm.className = 'login-form'
    const usernameDiv = document.createElement('div')
    usernameDiv.className = 'login-name-container'
    const userNameLabel = document.createElement("label")
    userNameLabel.className = 'login-label'
    userNameLabel.innerText = 'Username'
    const usernameBr = document.createElement("br")
    const userNameText = document.createElement("input")
    userNameText.className = 'login-input'
    userNameText.type ="text"
    usernameDiv.append(userNameLabel,usernameBr,userNameText)
    const passwordDiv = document.createElement('div')
    passwordDiv.className = 'login-password-container'
    const passwordLabel= document.createElement("label") 
    passwordLabel.className = 'login-label'
    passwordLabel.innerText = 'Password'
    const passwordBr = document.createElement("br")
    const passwordText= document.createElement("input")
    passwordText.className = 'login-input'
    passwordText.type ="text"
    passwordDiv.append(passwordLabel,passwordBr,passwordText)
    const loginDiv = document.querySelector('.login-button-container')
    loginDiv.style.top = '28.5vh'
    loginDiv.style.left = '12vw'
    const loginButton = document.createElement("button")
    loginButton.class = 'home-login-button' 
    loginButton.type = 'submit'
    loginButton.innerText = "Log in"
    loginDiv.append(loginButton)
    loginForm.append(usernameDiv, passwordDiv, loginDiv)
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault()
        let username= e.target[0].value
        let password= e.target[1].value
        let currentUsers=""
        json["data"].forEach(user =>{
            if (user.attributes.name == username && user.attributes.password == password) {
                globalUser = user
                showMainPage(user)
                renderUser(user)
            }
        })

    })
    homeFormDiv.append(loginForm)
    // fillSignUpButton()
}


