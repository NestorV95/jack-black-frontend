const usersUrl = 'http://localhost:3000/users'

const fetchUsers = () =>{
    fetch(usersUrl)
    .then(resp=> resp.json())
    .then(nestedData=> renderUsers(nestedData))
}

// const renderUsers = nestedData =>{
//     const {data} = nestedData
//     data.forEach(userData => {
//         renderUser(userData)
//     });
// }

const renderUser = (userData) =>{
    const attributes = userData.attributes
    const userContainer = document.querySelector('.user-container')
    const userCard = document.createElement('div')
    userCard.className = 'user-card'
    const imageDiv = document.createElement('div')
    imageDiv.className = 'main-profile-picture-container'
    const image = document.createElement('img')
    image.className = 'profile-picture'
    image.src = attributes.picture
    imageDiv.append(image)
    const cardBody = document.createElement('div')
    cardBody.className = 'user-card-profile'
    const nameContainer = document.createElement('div')
    nameContainer.className = 'name-container'
    const username = document.createElement('p')
    username.innerText = `Username: @${attributes.name}`
    username.className = 'username'
    nameContainer.append(username)
    const tokenContainer = document.createElement('div')
    tokenContainer.className = 'token-container'
    const tokens = document.createElement('p')
    tokens.innerText = `Tokens: ${attributes.tokens}`
    tokens.className = 'tokens'
    tokenContainer.append(tokens)
    cardBody.append(nameContainer,tokenContainer)
    userCard.append(imageDiv,cardBody)
    userContainer.append(userCard)
}

const createUser = event =>{
    const submittedUser = {
        picture: event.target.picture.value, name: event.target.name.value,
        password: event.target.password.value, tokens: 500
    }
    const configUser = {
        method: 'POST',
        headers:{'Content-Type':'application/json','Accept':'application/json'},
        body: JSON.stringify(submittedUser)
    }
    fetch(usersUrl, configUser)
    .then(resp=>resp.json())
    .then(newUser=> globalUser = newUser)
    .then(() => fetch('http://localhost:3000/games', {
        method: 'POST',
        headers:{'Content-Type':'application/json','Accept':'application/json'},
        body: JSON.stringify({min_bet: 1, max_bet: 10})
    }))
    .then(resp=>resp.json())
    .then((json) => fetch('http://localhost:3000/user_hands', {
        method: 'POST',
        headers:{'Content-Type':'application/json','Accept':'application/json'},
        body: JSON.stringify({bet:10, user_id: globalUser['data']['attributes']['id'], game_id: json.data.attributes.id})
    }))
    .then(resp=>resp.json())
    .then((json) => fetch('http://localhost:3000/dealer_hands', {
        method: 'POST',
        headers:{'Content-Type':'application/json','Accept':'application/json'},
        // HARD CODEING FOR NOW BUT REALLY FOREVER ADJUST WHENEVER SEEDING
        body: JSON.stringify({game_id: json.data.attributes.game.id, dealer_id: 4})
    }))
    .then(resp => resp.json())
    .then(json => console.log(json))
    showHomePage()
}

// currently hard coded for testing purposes. will fix when our app is more functional.
const updateUserInfo = (event,user=3) =>{
    const updatedUser = {
        picture: event.target.picture.value, name: event.target.name.value,
        password: event.target.password.value
    }
    const configUser = {
        method: 'PATCH',
        headers:{'Content-Type':'application/json','Accept':'application/json'},
        body: JSON.stringify(updatedUser)
    }
    fetch(`${usersUrl}/${user}`, configUser)
    .then(resp=>resp.json())
    .then(updateUser=> console.log(updateUser))
}

// currently hard coded for testing purposes. will fix when our app is more functional.
const deleteUser = (user=4) =>{
    const configUser = {
        method: 'DELETE',
        headers:{ 'Content-Type':'application/json','Accept':'application/json'}
    }
    fetch(`${usersUrl}/${user}`, configUser)
}
