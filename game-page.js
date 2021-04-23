const showGamePage = () => {
    clearBodyDiv()
    showGamePageContainers()
    showGamePlayerProfile()
    showGameUserHand()
    showGameDealerHand()
    // showGameButtonContainers()
    fetchGames()
}

const fillGamePage = (uHand, dHand, currentUser, data) =>{
    fillGamePlayerProfile(data,uHand)
    fillGameUserHand(uHand)
    fillGameDealerHand(dHand)
    // fillGameButtonContainers(uHand, dHand, currentUser, data)
}

const showGamePageContainers = () =>{
    const bodyDiv = document.querySelector('.body-div')
    const dealerDiv = document.createElement('div')
    dealerDiv.className = 'dealer-avatar'
    const gameTable = document.createElement('div')
    gameTable.className = 'game-table'
    const uProfileDiv = document.createElement('div')
    uProfileDiv.className = 'u-profile'
    const uHandDiv = document.createElement('div')
    uHandDiv.className = 'u-hand'
    const dHandDiv = document.createElement('div')
    dHandDiv.className = 'd-hand'
    const buttonsDiv = document.createElement('div')
    buttonsDiv.className = 'buttons'
    bodyDiv.append(dealerDiv,gameTable,uProfileDiv, uHandDiv, dHandDiv, buttonsDiv)
}

