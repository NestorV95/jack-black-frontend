const showDeleteButton = () =>{
    const bodyDiv = document.querySelector('.body-div')
    const deleteDiv = document.createElement('div')
    deleteDiv.className = 'delete-div'
    const deleteButton = document.createElement('button')
    deleteButton.className = 'delete-button'
    deleteButton.innerText = 'Delete'
    deleteButton.addEventListener('click',e=>{
        e.preventDefault()
        showDeletePrompt()
    })
    deleteDiv.append(deleteButton)
    bodyDiv.append(deleteDiv)
}

const showDeletePrompt = () =>{
    const bodyDiv = document.querySelector('.body-div')
    bodyDiv.innerHTML = ''
    const promptContainer = document.createElement('div')
    promptContainer.className = 'prompt-container'
    const textDiv = document.createElement('div')
    const promptText = document.createElement('p')
    promptText.className = 'prompt-text'
    promptText.innerText = 'Are you sure you would like to delete your account?'
    const promptBr = document.createElement('br')
    const buttonsDiv  = document.createElement('div')
    const promptYes = document.createElement('button')
    promptYes.className = 'yes-button'
    promptYes.innerText = 'Yes'
    promptYes.addEventListener('click', e=>{
        e.preventDefault()
        deleteUser()
    })
    const promptNo = document.createElement('button')
    promptNo.className = 'no-button'
    promptNo.innerText = 'No'
    textDiv.append(promptText)
    buttonsDiv.append(promptYes,promptNo)
    promptContainer.append(textDiv,promptBr,buttonsDiv)
    bodyDiv.append(promptContainer)
}

