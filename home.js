const showWelcome = () => {
    let body_div = document.getElementsByClassName("body-div")[0]
    let signUpButton= document.createElement("button")
    signUpButton.innerText="signup"
    let welcomeLogin= document.createElement("button")
    welcomeLogin.innerText="login"
    signUpButton.addEventListener("click", () => {
        console.log("signup")
    })

    welcomeLogin.addEventListener("click", () => {
        console.log("login")
    })
    body_div.append(signUpButton, welcomeLogin)

}

