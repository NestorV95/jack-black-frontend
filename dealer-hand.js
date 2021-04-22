const dealerHandsUrl = 'http://localhost:3000/dealer_hands'

class dealer_hand{

    constructor() {
        this.cards = []
        this.busted = false
    }

    appendCard = () => {
        this.cards.push(drawCard())
        this.busted_check()
    }

    removeCards = () =>{
        this.cards.splice(0, cards.length)
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


const fetchDealerHands = () =>{
    fetch(dealerHandsUrl)
    .then(resp=> resp.json())
    .then(nestedData=> renderDealerHands(nestedData))
}

const renderDealerHands = nestedData =>{
    const {data} = nestedData
    data.forEach(dealerHandData => {
        const {attributes} = dealerHandData
        const bodyDiv = document.querySelector('.body-div')
        const dealerHandContainer = document.createElement('div')
        dealerHandContainer.className = 'dealer-hand-container'
        const {dealer} = attributes
        const dealerTag = document.createElement('p')
        dealerTag.innerText  = dealer.name
        const {game} = attributes
        const gameTag = document.createElement('p')
        gameTag.innerText = `${game.min_bet} - ${game.max_bet}`
        dealerHandContainer.append(dealerTag,gameTag)
        bodyDiv.append(dealerHandContainer)
    });
}

// cant finish this until our app is more functional.
// const createDealerHand = event =>{
//     const submittedUser = {
//         user: 
//         game:
//     }
//     console.log(submittedUser)
//     const configUser = {
//         method: 'POST',
//         headers:{
//             'Content-Type':'application/json',
//             'Accept':'application/json'
//         },
//         body: JSON.stringify(submittedUser)
//     }
//     console.log(configUser)
//     fetch(dealerHandsUrl, configUser)
//     .then(resp=>resp.json())
//     .then(newUser=> console.log(newUser))
// }


// currently hard coded for testing purposes. will fix when our app is more functional.
// const deleteDealerHand = (dealerHand=3) =>{
//     const configUser = {
//         method: 'DELETE',
//         headers:{ 'Content-Type':'application/json','Accept':'application/json'}
//     }
//     fetch(`${dealerHandsUrl}/${dealerHand}`, configUser)
// }