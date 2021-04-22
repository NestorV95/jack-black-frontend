const userHandUrl = 'http://localhost:3000/user_hands'

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

const fetchUsershands = () =>{
    fetch(userHandUrl)
    .then(resp=> resp.json())
    .then(nestedData=> renderUsers(nestedData))
}

const renderUsersHands = nestedData =>{
    console.log(nestedData)
    const {data} = nestedData
    console.log(data)
    data.forEach(userData => {
        const {attributes} = userData
        console.log(attributes)
        const bodyDiv = document.querySelector('.body-div')
        const card = document.createElement('div')
        card.className = 'card'
        const cardBody = document.createElement('div')
        const username = document.createElement('p')
        username.innerText = attributes.name
        const bet = document.createElement('p')
        bet.innerText = attributes.bet
        cardBody.append(username,bet)
        card.append(imageDiv,cardBody)
        bodyDiv.append(card)

    });
}

// const createUserHand = event =>{
//     const submittedUserHand = {
//         picture: event.target.picture.value,
//         name: event.target.name.value,
//         password: event.target.password.value,
//         bet: 500,
//     }
//     console.log(submittedUserHand)
//     const configUser = {
//         method: 'POST',
//         headers:{
//             'Content-Type':'application/json',
//             'Accept':'application/json'
//         },
//         body: JSON.stringify(submittedUserHand)
//     }
//     console.log(configUser)
//     fetch(userHandUrl, configUser)
//     .then(resp=>resp.json())
//     .then(newUser=> console.log(newUserHand))
// }

const updateUserHand = (event,user=3) =>{
    const updatedUserHand = {
        bet: event.target.bet.value,
        
    }
    console.log(updatedUserHand)
    const configUser = {
        method: 'PATCH',
        headers:{
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
        body: JSON.stringify(updatedUserHand)
    }
    console.log(configUser)
    fetch(`${userHandUrl}/${user}`, configUser)
    .then(resp=>resp.json())
    .then(updateUser=> console.log(updateUser))
}

const deleteUserHand = (user=3) => {
    const configUserHand = {
        method: 'DELETE',
        headers:{
            'Content-type':'application/json',
            'Accept':'application/json'
        }
    }
    console.log(configUser)
    fetch(`${userHandUrl}/${user}`, configUser)
}


