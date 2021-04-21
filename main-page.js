const showMainPage = () => {
    showUserContainer()
    fillUserContainer()
    showTwoThirdContainer()
    fillTwoThirdGames()
}

const showUserContainer = () =>{
    const bodyDiv = document.querySelector('.body-div')
    const userContainer = document.createElement('div')
    bodyDiv.append(userContainer)
    userContainer.className = 'user-container'
}

const fillUserContainer = () =>{
    fetchUsers()
    showSettingsButton()
}

const showTwoThirdContainer = () =>{
    const bodyDiv = document.querySelector('.body-div')
    const twoThirdContainer = document.createElement('div')
    twoThirdContainer.className = 'two-third-container'
    bodyDiv.append(twoThirdContainer)
}

const clearTwoThird = () =>{
    const twoThirdContainer = document.querySelector('.two-third-container')
    twoThirdContainer.innerHTML = ''
}

const showGameContainer = () =>{
    const twoThirdContainer = document.querySelector('.two-third-container')
    const gameContainer = document.createElement('div')
    gameContainer.className = 'game-container'
    const gameImageContainer = document.createElement('div')
    gameImageContainer.className = 'game-image-container'
    const gameDetailsContainer = document.createElement('div')
    gameDetailsContainer.className = 'game-details-container'
    const gameTitleContainer = document.createElement('div')
    gameTitleContainer.className = 'game-title-container'
    const gameDetailsBody = document.createElement('div')
    gameDetailsBody.className = 'game-details-body'
    gameDetailsContainer.append(gameTitleContainer,gameDetailsBody)
    const startGameButtonContainer = document.createElement('div')
    startGameButtonContainer.className = 'start-game-button-container'
    gameContainer.append(gameImageContainer,gameDetailsContainer,startGameButtonContainer)
    twoThirdContainer.append(gameContainer)
}

const showGamesIndex = () =>{
    const twoThirdContainer = document.querySelector('.two-third-container')
    const gameIndex = document.createElement('div')
    gameIndex.className = 'games-index'
    twoThirdContainer.append(gameIndex)
}

const fillTwoThirdGames = () => {
    clearTwoThird()
    showGameContainer()
    showGamesIndex()
}
