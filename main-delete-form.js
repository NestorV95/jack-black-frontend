const showDeleteButton = () =>{
    const settingsOptionsDiv = document.querySelector('.settings-options-div')
    const deleteDiv = document.createElement('div')
    deleteDiv.className = 'delete-user-button-container'
    const deleteButton = document.createElement('button')
    deleteButton.className = 'delete-user-button'
    deleteButton.innerText = 'Delete'
    deleteButton.addEventListener('click',e=>{
        e.preventDefault()
        showDeletePrompt()
    })
    deleteDiv.append(deleteButton)
    settingsOptionsDiv.append(deleteDiv)
}

const showDeletePrompt = () =>{
    const settingsOptionsDiv = document.querySelector('.settings-options-div')
    settingsOptionsDiv.innerHTML = ''
    const deletePromptContainer = document.createElement('div')
    deletePromptContainer.className = 'delete-user-prompt-container'
    const textDiv = document.createElement('div')
    const deletePromptText = document.createElement('p')
    deletePromptText.className = 'delete-user-prompt-text'
    deletePromptText.innerText = 'Are you sure you would like to delete your account?'
    const promptBr = document.createElement('br')
    const buttonsDiv  = document.createElement('div')
    buttonsDiv.className = 'delete-user-prompt-button-container'
    const promptYes = document.createElement('button')
    promptYes.className = 'yes-delete-user-button'
    promptYes.innerText = 'Yes'
    promptYes.addEventListener('click', e=>{
        e.preventDefault()
        confirmDelete()
    })
    const promptNo = document.createElement('button')
    promptNo.className = 'no-delete-user-button'
    promptNo.innerText = 'No'
    promptNo.addEventListener('click', e=>{
        e.preventDefault()
        showSettingsMenu()
    })
    textDiv.append(deletePromptText)
    buttonsDiv.append(promptYes,promptNo)
    deletePromptContainer.append(textDiv,promptBr,buttonsDiv)
    settingsOptionsDiv.append(deletePromptContainer)
}

const confirmDelete = () =>{
    const deletePromptContainer = document.querySelector('.delete-user-prompt-container')
    const deletePromptText = document.querySelector('.delete-user-prompt-text')
    deletePromptText.innerText = 'Enter your password to delete your account.'
    const deleteFormContainer = document.createElement('div')
    deleteFormContainer.className = 'delete-user-form-container'
    const deletePromptForm = document.createElement('form')
    deletePromptForm.className = 'delete-user-form'
    const deletePromptInput = document.createElement('input')
    deletePromptInput.className = 'delete-user-input'
    deletePromptInput.type = 'text'
    deletePromptInput.name = 'password'
    const confirmButton = document.createElement('input')
    confirmButton.className = 'confirm-user-delete'
    confirmButton.type = 'submit'
    confirmButton.innerText = 'Confirm'
    deletePromptForm.addEventListener('submit',e=>{
        e.preventDefault()
        deleteUser()
    })
    deletePromptContainer.innerHTML = ''
    deletePromptForm.append(deletePromptInput,confirmButton)
    deleteFormContainer.append(deletePromptForm)
    deletePromptContainer.append(deletePromptText,deleteFormContainer)
}

