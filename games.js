const gamesUrl = 'http://localhost:3000/games'

//adjust so that it fetches a single game

class Card{
    constructor(suit, name, value) {
        this.suit = suit;
        this.name = name;
        this.value = value;
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

var suits = ['Club', 'Spade', 'Diamond', 'Heart']
var names = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
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
    let data = nestedData['data'][0]
    let currentUser = data.attributes.users[0]
    let d_hand = new dealer_hand()
    let u_hand = new user_hand(data['attributes']['user_hands'][0]['bet'])
    u_hand.appendCard()
    u_hand.appendCard()

    d_hand.appendCard()
    d_hand.appendCard()

    //button to stand
    while(d_hand.value() < 16){
        d_hand.appendCard()
        d_hand.busted_check()
    }
    if(d_hand.busted == true) {
        currentUser.tokens = currentUser.tokens + u_hand.bet
        //something soemthing  "User Wins"
    } else {
        let results = win_check(data,u_hand.value(),d_hand.value())
        //do whatever with results
    }

    //button to draw
    u_hand.appendCard()
    u_hand.busted_check()

    //check u_hand.busted then do whatever
    
    //button to double down
    u_hand.bet = u_hand.bet * 2
    u_hand.appendCard()
    u_hand.busted_check()
    if(u_hand.busted == true) {
        currentUser.tokens = currentUser.tokens - u_hand.bet
        return "User Loses"
    } else {
        let results = win_check(data,u_hand.value(),d_hand.value())
        //do whatever with results
    }

    //button to surrender
    currentUser.tokens = currentUser.tokens - (u_hand.bet/2)


}