const showSettingsButton = () =>{
    const userContainer = document.querySelector('.user-container')
    const setBtnContainer = document.createElement('div')
    setBtnContainer.className = 'set-btn-container'
    const settingsButton = document.createElement('button')
    settingsButton.className = 'settings-button'
    settingsButton.innerText = '⚙️' 
    settingsButton.addEventListener('click', e =>{
        e.preventDefault()
        showSettingsMenu()
    })
    setBtnContainer.append(settingsButton)
    userContainer.append(setBtnContainer)
}

const showSettingsMenu = () =>{
    clearTwoThird()
    const twoThirdContainer = document.querySelector('.two-third-container')
    const settingsTitleDiv = document.createElement('div')
    settingsTitleDiv.className = 'settings-title-div'
    const settingsTitle = document.createElement('h1')
    settingsTitle.className = 'settings-title'
    settingsTitle.innerText = 'Settings'
    settingsTitleDiv.append(settingsTitle)
    const settingsOptionsDiv = document.createElement('div')
    settingsOptionsDiv.className = 'settings-options-div'
    twoThirdContainer.append(settingsTitleDiv,settingsOptionsDiv)
    showUserEditButton()
    showDeleteButton()
    exitSettingsButton()
}

const exitSettingsButton = () => {
    const settingsOptionsDiv = document.querySelector('.settings-options-div')
    const exitDiv = document.createElement('div')
    exitDiv.className = 'exit-settings-button-container'
    const exitButton = document.createElement('button')
    exitButton.className = 'exit-settings-button'
    exitButton.innerText = 'Exit'
    exitButton.addEventListener('click',e=>{
        e.preventDefault()
        fillTwoThirdGames()
    })
    exitDiv.append(exitButton)
    settingsOptionsDiv.append(exitDiv)
}