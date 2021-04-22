const showLoginForm = () => {
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(json => renderLoginForm(json))
}

const renderLoginForm = (json) => {
    const homeFormDiv = document.querySelector('.home-form-container')
    const loginForm = document.createElement("form")
    loginForm.className = 'login-form'
    const usernameDiv = document.createElement('div')
    usernameDiv.className = 'login-name-container'
    const userNameLabel = document.createElement("label") 
    userNameLabel.innerText = 'Username'
    const usernameBr = document.createElement("br")
    const userNameText = document.createElement("input")
    userNameText.type ="text"
    usernameDiv.append(userNameLabel,usernameBr,userNameText)
    const passwordDiv = document.createElement('div')
    passwordDiv.className = 'login-password-container'
    const passwordLabel= document.createElement("label") 
    passwordLabel.innerText = 'Password'
    const passwordBr = document.createElement("br")
    const passwordText= document.createElement("input")
    passwordText.type ="text"
    passwordDiv.append(passwordLabel,passwordBr,passwordText)
    const loginDiv = document.querySelector('.login-button-container')
    loginDiv.innerHTML = ''
    const loginButton= document.createElement("button")
    loginButton.className = "submit"
    loginButton.innerText="submit"
    loginDiv.append(loginButton)
    console.log(json["data"])
    loginForm.append(usernameDiv, passwordDiv, loginButton)
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
}


