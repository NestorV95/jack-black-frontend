const showGameDealerHand = () =>{
    const dHandDiv = document.querySelector('.d-hand')
    const dealerCards = document.createElement('div')
    dealerCards.className = 'game-dealer-cards-container'
    const dealerTextDiv = document.createElement('div')
    dealerTextDiv.className = 'game-dealer-text-container'
    const dealerText = document.createElement('p')
    dealerText.className = 'game-dealer-text' 
    dealerTextDiv.append(dealerText)
    dHandDiv.append(dealerCards, dealerTextDiv)
}

const fillGameDealerHand = (dHand) => {
    const dealerCards = document.querySelector('.game-dealer-cards-container')
    dealerCards.innerHTML = ''
    dHand.cards.forEach(card => {
        let img = document.createElement('img')
        img.className = 'card'
        img.src = card.img
        dealerCards.append(img)
    })
    const dealerText = document.querySelector('.game-dealer-text')
    dealerText.innerText = 'DEALER HAND VALUE IS: ' + dHand.value()
}

const newGameDealerHand = () => {
    
}
