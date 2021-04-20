const showUserHandEditForm = () => {
    const bodyDiv = document.querySelector('.body-div')
    const formContainer = document.createElement('div')
    formContainer.className = "form-container"
    const editForm = document.createElement('form')
    const confirmDiv = document.createElement('div')
    const confirmLabel = document.createElement('label')
    const confirmBr = document.createElement('br')
    const confirmInput = document.createElement('input')
    confirmInput.className = 'edit-input'
    confirmInput.type = 'text'
    confirmInput.name = 'confirmation'
    confirmDiv.append(confirmLabel, confirmBr, confirmInput)
    const submitDiv = document.createElement('div')
    const submitButton = document.createElement('input')
    submitButton.className = 'bet-button'
    submitButton.type = 'submit'
    submitButton.innerText = 'bet'
    submitDiv.append(submitButton)
    editForm.append(confirmDiv,submitDiv)
    editForm.addEventListener('submit',event =>{
        event.preventDefault()
        updateUserBet
        (event)  
        hideUserHandEditForm()  
    })
    formContainer.append(editForm)
    bodyDiv.append(editForm)
} 


const hideUserHandEditForm = () => {
    const bodyDiv = document.querySelector('.body-div')
    const formContainer = document.querySelector('.form-container')
    bodyDiv.remove(formContainer)
}