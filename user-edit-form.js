const showUserEditButton = () =>{
    const settingsOptionsDiv = document.querySelector('.settings-options-div')
    const editButtonDiv = document.createElement('div')
    editButtonDiv.className = 'edit-button-container'
    const editButton = document.createElement('button')
    editButton.className = 'edit-button'
    editButton.innerText = 'Edit'
    editButton.addEventListener('click',e=>{
        e.preventDefault()
        settingsOptionsDiv.innerHTML = ''
        showUserEditForm()
    })
    editButtonDiv.append(editButton)
    settingsOptionsDiv.append(editButtonDiv)
}

const showUserEditForm = () => {
    const settingsOptionsDiv = document.querySelector('.settings-options-div')
    const formContainer = document.createElement('div')
    formContainer.className = "user-edit-form-container"
    const editForm = document.createElement('form')
    editForm.className = 'user-edit-form'
    const imageDiv = document.createElement('div')
    imageDiv.className = 'user-edit-form-div'
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
    usernameDiv.className = 'user-edit-form-div'
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
    passwordDiv.className = 'user-edit-form-div'
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
    confirmDiv.className = 'user-edit-form-div'
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
    submitDiv.className = 'submit-button-container'
    submitBr = document.createElement('br')
    const submitButton = document.createElement('input')
    submitButton.className = 'submit-button'
    submitButton.type = 'submit'
    submitButton.innerText = 'Edit User'
    const cancelButton = document.createElement('button')
    cancelButton.className = 'cancel-user-edit-button'
    cancelButton.innerText = 'Cancel'
    cancelButton.addEventListener('click',event =>{
        event.preventDefault()
        showSettingsMenu()
    })
    submitDiv.append(submitBr, submitButton, cancelButton)
    editForm.append(imageDiv,usernameDiv,passwordDiv,confirmDiv,submitDiv)
    editForm.addEventListener('submit',event =>{
        event.preventDefault()
        updateUserInfo(event)

    })
    formContainer.append(editForm)
    settingsOptionsDiv.append(formContainer)
} 


