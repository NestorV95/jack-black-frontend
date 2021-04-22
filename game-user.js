const showGamePlayerProfile = () =>{
    const uProfileDiv = document.querySelector('.u-profile')
    const imageDiv = document.createElement('div')
    imageDiv.className = 'game-profile-picture-container'
    const playerImage = document.createElement('img')
    playerImage.className = 'game-player-image'
    imageDiv.append(playerImage)
    const h1Div = document.createElement('div')
    h1Div.className = 'game-player-name-container'
    const h1 = document.createElement('h1')
    h1.className = 'game-player-name'
    h1Div.append(h1)
    const tokenDiv = document.createElement('div')
    tokenDiv.className = 'game-token-container'
    const money = document.createElement('p')
    money.className = 'game-player-tokens'
    tokenDiv.append(money)
    const betDiv = document.createElement('div')
    betDiv.className = 'game-bet-container' 
    const p = document.createElement('p')
    p.className = 'game-player-bet'
    betDiv.append(p)
    uProfileDiv.append(imageDiv, h1Div, tokenDiv, betDiv)
}

const fillGamePlayerProfile = (data, uHand) => {
    const playerImage = document.querySelector('.game-player-image')
    playerImage.src = data.attributes.users[0].picture
    const playerName = document.querySelector('.game-player-name')
    playerName.innerText = data.attributes.users[0].name
    const playerMoney = document.querySelector('.game-player-tokens')
    playerMoney.innerText = 'TOKENS: ' + data.attributes.users[0].tokens
    const playerBet = document.querySelector('.game-player-bet')
    playerBet.innerText = 'BET: ' + uHand.bet
}

const showGameUserHand = () =>{
    const uHandDiv = document.querySelector('.u-hand')
    const userCards = document.createElement('div')
    userCards.className = 'game-user-cards-container'
    const userTextDiv = document.createElement('div')
    userTextDiv.className = 'game-user-text-container'
    const userText = document.createElement('p')
    userText.className = 'game-user-text' 
    userTextDiv.append(userText)
    uHandDiv.append(userCards, userTextDiv)
}

const fillGameUserHand = (uHand, dHand, currentUser, data) => {
    const userCards = document.querySelector('.game-user-cards-container')
    userCards.innerHTML = ''
    uHand.cards.forEach(card => {
        let img = document.createElement('img')
        img.className = 'card'
        img.src = card.img
        userCards.append(img)
    })
    const userText = document.querySelector('.game-user-text')
    userText.innerText = 'YOUR HAND VALUE IS: ' + uHand.value()
}
