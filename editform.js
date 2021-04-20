const showEditForm = () => {
    const bodyDiv = document.querySelector('.body-div')
    const formContainer = document.createElement('div')
    formContainer.className = "form-container"
    const editForm = document.createElement('form')
    editForm.className = 'edit-form'
    const imageDiv = document.createElement('div')
    const imageLabel = document.createElement('label')
    imageLabel.className = 'edit-label'
    imageLabel.innerText = 'Profile Picture:'
    const imageBr = document.createElement('br')
    const imageInput = document.createElement('input')
    imageInput.className = 'edit-input'
    imageInput.type = 'text'
    imageInput.name = 'picture'
    imageDiv.append(imageLabel, imageBr, imageInput)
    const usernameDiv = document.createElement('div')
    const usernameLabel = document.createElement('label')
    usernameLabel.className = 'edit-label'
    usernameLabel.innerText = 'Username:'
    const usernameBr = document.createElement('br')
    const usernameInput = document.createElement('input')
    usernameInput.className = 'edit-input'
    usernameInput.type = 'text'
    usernameInput.name = 'name'
    usernameDiv.append(usernameLabel, usernameBr, usernameInput)
    const passwordDiv = document.createElement('div')
    const passwordLabel = document.createElement('label')
    passwordLabel.className = 'edit-label'
    passwordLabel.innerText = 'Password:'
    const passwordBr = document.createElement('br')
    const passwordInput = document.createElement('input')
    passwordInput.className = 'edit-input'
    passwordInput.type = 'text'
    passwordInput.name = 'password'
    passwordDiv.append(passwordLabel, passwordBr, passwordInput)
    const confirmDiv = document.createElement('div')
    const confirmLabel = document.createElement('label')
    confirmLabel.className = 'edit-label'
    confirmLabel.innerText = 'Confirm Password:'
    const confirmBr = document.createElement('br')
    const confirmInput = document.createElement('input')
    confirmInput.className = 'edit-input'
    confirmInput.type = 'text'
    confirmInput.name = 'confirmation'
    confirmDiv.append(confirmLabel, confirmBr, confirmInput)
    const submitDiv = document.createElement('div')
    const submitButton = document.createElement('input')
    submitButton.className = 'edit-button'
    submitButton.type = 'submit'
    submitButton.innerText = 'Edit User'
    submitDiv.append(submitButton)
    editForm.append(imageDiv,usernameDiv,passwordDiv,confirmDiv,submitDiv)
    editForm.addEventListener('submit',event =>{
        event.preventDefault()
        updateUserInfo(event)  
        hideEditForm()  
    })
    formContainer.append(editForm)
    bodyDiv.append(editForm)
} 


const hideEditForm = () => {
    const bodyDiv = document.querySelector('.body-div')
    const formContainer = document.querySelector('.form-container')
    bodyDiv.remove(formContainer)
}