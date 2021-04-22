const gamesUrl = 'http://localhost:3000/games'

function win_check(data,u_value,d_value) {
    if (u_value > d_value) {
        data.attributes.users[0].tokens = data.attributes.users[0].tokens + data.attributes.user_hands[0].bet
        return "User Wins"
    }
    if (u_value < d_value) {
        data.attributes.users[0].tokens = data.attributes.users[0].tokens - data.attributes.user_hands[0].bet
        return "User Loses"
    }
    if (u_value = d_value) {
        data.attributes.users[0].tokens
        return "User Ties"
    }
}

const fetchGames = () =>{
    fetch(gamesUrl)
    .then(resp=> resp.json())
    .then(nestedData=> renderGames(nestedData))
}   
    
const renderGames = nestedData =>{
    //get data
    let data = nestedData['data'][0]
    let currentUser = data.attributes.users[0]

    //setup hands
    let d_hand = new dealer_hand()
    let u_hand = new user_hand(data['attributes']['user_hands'][0]['bet'])

    u_hand.appendCard()
    u_hand.appendCard()
    d_hand.appendCard()
    d_hand.appendCard()

    // //get page
    let bodyDiv = document.getElementsByClassName('body-div')[0]
    bodyDiv.innerHTML = ""
    //make divs
    const uProfileDiv = document.createElement('div')
    const u_hand_div = document.createElement('div')
    const d_hand_div = document.createElement('div')
    const buttons_div = document.createElement('div')

    // //make divs className
    uProfileDiv.className = 'u-profile'
    u_hand_div.className = 'u-hand'
    d_hand_div.className = 'd-hand'
    buttons_div.className = 'buttons'
    
    // //things arnt getting deleted and reloaded for some reason otherwise it works
    bodyDiv.append(uProfileDiv, u_hand_div, d_hand_div, buttons_div)

    uProfileDivDisplay(data, u_hand)
    // fillGamePlayerProfile(data, u_hand)
    uHandDisplay(u_hand)
    // fillGameUserHand(u_hand)
    dHandDisplay(d_hand)
    // fillGameDealerHand(d_hand)
    buttonDisplay(u_hand, d_hand, currentUser, data, 1)    
    // fillGameButtonContainers(u_hand, d_hand, currentUser, data)
}

function uProfileDivDisplay(data, u_hand) {
    const uProfileDiv = document.querySelector('.u-profile')
    uProfileDiv.innerText = ''

    let h1 = document.createElement('h1')
    h1.innerText = data.attributes.users[0].name

    let m = document.createElement('p')
    m.innerText = 'TOKENS: ' + data.attributes.users[0].tokens

    let p = document.createElement('p')
    p.innerText = 'BET: ' + u_hand.bet

    uProfileDiv.append(h1, m, p)

}


function uHandDisplay(u_hand) {
    const u_hand_div = document.querySelector('.u-hand')
    u_hand_div.innerHTML = ''

    u_hand.cards.forEach(card => {
        let img = document.createElement('img')
        img.className = 'card'
        img.src = card.img
        u_hand_div.append(img)
    })

    let p = document.createElement('p')
    p.innerText = 'YOUR HAND VALUE IS: ' + u_hand.value()
    u_hand_div.append(p)
}

function dHandDisplay(d_hand) {
    const d_hand_div = document.querySelector('.d-hand')
    d_hand_div.innerHTML = ''

    d_hand.cards.forEach(card => {
        let img = document.createElement('img')
        img.className = 'card'
        img.src = card.img
        d_hand_div.append(img)
    })

    let p = document.createElement('p')
    p.innerText = 'DEALER HAND VALUE IS: ' + d_hand.value()
    d_hand_div.append(p)
}

function buttonDisplay(u_hand, d_hand, currentUser ,data , first){
    const buttons_div = document.querySelector('.buttons')
    buttons_div.innerHTML = ''


    //button to stand
    // const standButtonDiv = document.querySelector('.stand-button-container')
    let standBtn = document.createElement('button')
    standBtn.className = 'stand-button'
    standBtn.innerText = "Stand"
    standBtn.addEventListener('click', (e) => {
        if(u_hand.value() >= d_hand.value()){
            while(d_hand.value() < 16 || d_hand.value() < u_hand.value){
                d_hand.appendCard()
                d_hand.busted_check()
            }
            dHandDisplay(d_hand)
            // fillGameDealerHand(d_hand)
            if(d_hand.busted == true) {
                currentUser.tokens = currentUser.tokens + u_hand.bet
                buttonDisplay(u_hand, d_hand, currentUser ,data , 3)

            } else {
                let results = win_check(data,u_hand.value(),d_hand.value())
                if(results == 'User Wins'){
                    buttonDisplay(u_hand, d_hand, currentUser ,data , 3)
                } else if (results == 'User Loses'){
                    buttonDisplay(u_hand, d_hand, currentUser ,data , 3)
                } else {
                    buttonDisplay(u_hand, d_hand, currentUser ,data , 3)
                }
            }
        } else {
            currentUser.tokens = currentUser.tokens - u_hand.bet
            buttonDisplay(u_hand, d_hand, currentUser ,data , 3)

        }
        uProfileDivDisplay(data, u_hand)
        // fillGamePlayerProfile(data, u_hand)
    })
    // standButtonDiv.append(standBtn)
   
    //button to draw
    // const drawButtonDiv = document.querySelector('.draw-button-container')
    let drawBtn = document.createElement('button')
    drawBtn.className = 'draw-button'
    drawBtn.innerText = "Draw"
    drawBtn.addEventListener('click', (e) => {
        u_hand.appendCard()
        u_hand.busted_check()
        uHandDisplay(u_hand)
        // fillGameUserHand(u_hand)
        if(u_hand.busted == true) {
            currentUser.tokens = currentUser.tokens - u_hand.bet
            console.log('hit')
            buttonDisplay(u_hand, d_hand, currentUser ,data , 3)
            uProfileDivDisplay(data, u_hand)
            // fillGamePlayerProfile(data, u_hand)
        } else if (u_hand.value() == 21) {
            currentUser.tokens = currentUser.tokens + u_hand.bet
            uProfileDivDisplay(data, u_hand)
            // fillGamePlayerProfile(data, u_hand)
            buttonDisplay(u_hand, d_hand, currentUser ,data , 3)

        } else {
            buttons_div.html = ''
            buttonDisplay(u_hand, d_hand, currentUser ,data , 2)
        }    
    })
    // drawButtonDiv.append(drawBtn)
    
    //button to double down
    // const doubleButtonDiv = document.querySelector('.double-button-container')
    let doubleBtn = document.createElement('button')
    doubleBtn.className = 'double-button'
    doubleBtn.innerText = "Double Down"
    doubleBtn.addEventListener('click', (e) => {
        u_hand.bet = u_hand.bet * 2
        u_hand.appendCard()
        u_hand.busted_check()
        uHandDisplay(u_hand)
        // fillGameUserHand(u_hand)
        if(u_hand.busted == true) {
            currentUser.tokens = currentUser.tokens - u_hand.bet
            console.log('user busted')
            
        } else {
            while(d_hand.value() < 16 || d_hand.value() < u_hand.value){
                d_hand.appendCard()
                d_hand.busted_check()
            }
            dHandDisplay(d_hand)
            // fillGameDealerHand(d_hand)
            if(d_hand.busted == true) {
                currentUser.tokens = currentUser.tokens + u_hand.bet
            } else {
                let results = win_check(data,u_hand.value(),d_hand.value())
            }
        }
        u_hand.bet = u_hand.bet/2
        buttonDisplay(u_hand, d_hand, currentUser ,data , 3)
        uProfileDivDisplay(data, u_hand)
        // fillGamePlayerProfile(data, u_hand)
    })
    // doubleButtonDiv.append(doubleBtn)

    //button to surrender
    // const surrenderButtonDiv = document.querySelector('.surrender-button-container')
    let surBtn = document.createElement('button')
    surBtn.className = 'surrender-button'
    surBtn.innerText = "Surrender"
    surBtn.addEventListener('click', (e) => {
        currentUser.tokens = currentUser.tokens - (u_hand.bet/2)
        console.log('surrendered')
        buttonDisplay(u_hand, d_hand, currentUser ,data , 3)
        uProfileDivDisplay(data, u_hand)
        // fillGamePlayerProfile(data, u_hand)
    })
    // surrenderButtonDiv.append(surBtn)

    // const exitGameButtonDiv = document.querySelector('.exit-game-button-container')
    let exitBtn = document.createElement('button')
    exitBtn.className = 'exit-game-button'
    exitBtn.innerText = "Exit Game"
    exitBtn.addEventListener('click', (e) => {
        showMainPage()
    })
    // exitGameButtonDiv.append(exitBtn)

    let replayBtn = document.createElement('button')
    replayBtn.className = 'exit-game-button'
    replayBtn.innerText = "Replay Game"
    replayBtn.addEventListener('click', (e) => {
        u_hand.cards = []
        d_hand.cards = []

        u_hand.appendCard()
        u_hand.appendCard()
        d_hand.appendCard()
        d_hand.appendCard()

        u_hand.busted = false
        d_hand.busted = false

        uProfileDivDisplay(data, u_hand)
        // fillGamePlayerProfile(data, u_hand)
        uHandDisplay(u_hand)
        // fillGameUserHand(u_hand)
        dHandDisplay(d_hand)
        // fillGameDealerHand(d_hand)
        buttonDisplay(u_hand, d_hand, currentUser, data, 1)    
        // fillGameButtonContainers(u_hand, d_hand, currentUser, data)
    })

    if(first == 1){
        buttons_div.append(standBtn, drawBtn, doubleBtn, surBtn, exitBtn)
    } else if (first == 2){
        buttons_div.append(standBtn, drawBtn, exitBtn)
    } else {
        buttons_div.append(replayBtn, exitBtn)
    }

}
