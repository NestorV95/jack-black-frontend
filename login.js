const showLoginForm = () => {
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(json => renderLoginForm(json))
}

const renderLoginForm = (json) => {
    let body_div = document.getElementsByClassName("body-div")[0]
    let loginForm = document.createElement("form")
        body_div.append(loginForm) 
    let userNameText= document.createElement("input")
    let userNameLabel= document.createElement("label") 
        userNameLabel.innerText="username"
        userNameText.type ="text"
    let br = document.createElement("br")
    let br1 = document.createElement("br")
    let passwordText= document.createElement("input")
    let passwordLabel= document.createElement("label") 
        passwordLabel.innerText="password"
        passwordText.type ="text"
    let loginButton= document.createElement("button")
        loginButton.innerText="submit"

    loginForm.append(userNameLabel, userNameText, br, passwordLabel, passwordText, br1, loginButton)
    
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault()
        let username= e.target[0].value
        let password= e.target[1].value
        console.log(json["data"])
        let currentUsers=""
        json["data"].forEach(user =>{
            if (user.attributes.name == username && user.attributes.password == password) {
                console.log("hit")
                // this current will be passed on into whatever from nesters function
                currentUser= user
            }
        })

        if (currentUsers == ""){
            console.log("failed")

        }

    })

}


