const gamesUrl = 'http://localhost:3000/games'

class Card{
    constructor(suit, name, value) {
        this.suit = suit;
        this.name = name;
        this.value = value;
        this.img = './Cards/card_' + this.suit + '_' + this.name + '.png';
    }
}

class dealer_hand{

    constructor() {
        this.cards = []
        this.busted = false
    }

    appendCard = () => {
        this.cards.push(drawCard())
        this.busted_check()
    }

    value = () => {
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
        let reducer = (accumulator, currentValue) => accumulator + currentValue;
        return this.cards.map(card => card.value).reduce(reducer)
    }

    busted_check = () => {
        if(this.value() > 21) {
            this.busted = true
        }
    }

}

class user_hand{

    constructor(bet) {
        this.bet = bet
        this.cards = []
        this.busted = false
    }

    appendCard = () => {
        this.cards.push(drawCard())
    }

    value = () => {
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
        let reducer = (accumulator, currentValue) => accumulator + currentValue;
        return this.cards.map(card => card.value).reduce(reducer)
    }

    busted_check = () => {
        if(this.value() > 21) {
            this.busted = true
        }
    }

}

var suits = ['clubs', 'spades', 'diamonds', 'hearts']
var names = ['A', '02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K']
var values = [1,2,3,4,5,6,7,8,9,10,10,10,10]

function drawCard() { 
    suit_num = Math.floor(Math.random() * 4)
    name_num = Math.floor(Math.random() * 13)
    return new Card(suits[suit_num], names[name_num], values[name_num])
}

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

    //get page
    let bodyDiv = document.getElementsByClassName('body-div')[0]
    //make divs
    let uProfileDiv = document.createElement('div')
    u_hand_div = document.createElement('div')
    d_hand_div = document.createElement('div')
    buttons_div = document.createElement('div')

    //make divs className
    uProfileDiv.id = 'u_profile'
    u_hand_div.id = 'u_hand'
    d_hand_div.id = 'd_hand'
    buttons_div.id = 'buttons'

    //things arnt getting deleted and reloaded for some reason otherwise it works


    uProfileDivDisplay(uProfileDiv, data, u_hand, document)
    uHandDisplay(u_hand_div, u_hand)
    dHandDisplay(d_hand_div, d_hand)
    buttonDisplay(buttons_div, u_hand, d_hand, currentUser, data, u_hand_div, d_hand_div, true)

    bodyDiv.append(uProfileDiv, u_hand_div, d_hand_div, buttons_div)

}

function uProfileDivDisplay(uProfileDiv, data, u_hand) {
    uProfileDiv.html = ''

    let h1 = document.createElement('h1')
    h1.innerText = data.attributes.users[0].name

    let p = document.createElement('p')
    p.innerText = 'BET: ' + u_hand.bet

    uProfileDiv.append(h1, p)

}


function uHandDisplay(u_hand_div, u_hand) {
    u_hand_div.html = ''

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


function dHandDisplay(d_hand_div, d_hand) {
    d_hand_div.html = ''

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

function buttonDisplay(buttons_div, u_hand, d_hand, currentUser ,data , u_hand_div, d_hand_div, first){
    buttons_div.html = ''

    //button to stand
    let standBtn = document.createElement('button')
    standBtn.innerText = "Stand"
    standBtn.addEventListener('click', (e) => {
        if(u_hand.value() >= d_hand.value()){
            while(d_hand.value() < 16 || d_hand.value() < u_hand.value){
                d_hand.appendCard()
                d_hand.busted_check()
            }
            dHandDisplay(d_hand_div, d_hand)
            if(d_hand.busted == true) {
                currentUser.tokens = currentUser.tokens + u_hand.bet
                //something soemthing  "User Wins"
                console.log('dealer busted')
            } else {
                let results = win_check(data,u_hand.value(),d_hand.value())
                //do whatever with results
                if(results == 'User Wins'){
                    console.log('User Wins')
                } else if (results == 'User Loses'){
                    console.log('User Loses')
                } else {
                    console.log('User Ties')
                }
            }
        } else {
            console.log('User Loses')
        }
        
    })

    //button to draw
    let drawBtn = document.createElement('button')
    drawBtn.innerText = "Draw"
    drawBtn.addEventListener('click', (e) => {
        u_hand.appendCard()
        u_hand.busted_check()
        uHandDisplay(u_hand_div, u_hand)
        if(u_hand.busted == true) {
            currentUser.tokens = currentUser.tokens - u_hand.bet
            console.log('user busted')
        } else {
            //reshow screen with out 2 buttons and with your new card
            buttons_div.html = ''
            buttonDisplay(buttons_div, u_hand, d_hand, currentUser ,data , u_hand_div, d_hand_div, false)
        }    
    })

    //button to double down
    let doubleBtn = document.createElement('button')
    doubleBtn.innerText = "Double Down"
    doubleBtn.addEventListener('click', (e) => {
        u_hand.bet = u_hand.bet * 2
        u_hand.appendCard()
        u_hand.busted_check()
        uHandDisplay(u_hand_div, u_hand)
        if(u_hand.busted == true) {
            currentUser.tokens = currentUser.tokens - u_hand.bet
            console.log('user busted')
            return "User Loses"
        } else {
            while(d_hand.value() < 16 || d_hand.value() < u_hand.value){
                d_hand.appendCard()
                d_hand.busted_check()
            }
            dHandDisplay(d_hand_div, d_hand)
            if(d_hand.busted == true) {
                currentUser.tokens = currentUser.tokens + u_hand.bet
                //something soemthing  "User Wins"
                console.log('dealer busted')

            } else {
                let results = win_check(data,u_hand.value(),d_hand.value())
                //do whatever with results
                if(results == 'User Wins'){
                    console.log('User Wins')
                } else if (results == 'User Loses'){
                    console.log('User Loses')
                } else {
                    console.log('User Ties')
                }


            }
        }
    })

    //button to surrender
    let surBtn = document.createElement('button')
    surBtn.innerText = "Surrender"
    surBtn.addEventListener('click', (e) => {
        currentUser.tokens = currentUser.tokens - (u_hand.bet/2)
        console.log('surrendered')
    })

    if(first == true){
        buttons_div.append(standBtn, drawBtn, doubleBtn, surBtn)
    } else {
        buttons_div.append(standBtn, drawBtn)
    }
}
