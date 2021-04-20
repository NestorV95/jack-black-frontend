const usersUrl = 'http://localhost:3000/users'

const fetchUsers = () =>{
    fetch(usersUrl)
    .then(resp=> resp.json())
    .then(nestedData=> renderUsers(nestedData))
}

const renderUsers = nestedData =>{
    const {data} = nestedData
    data.forEach(userData => {
        const {attributes} = userData
        const bodyDiv = document.querySelector('.body-div')
        const card = document.createElement('div')
        card.className = 'card'
        const imageDiv = document.createElement('div')
        const image = document.createElement('img')
        image.className = 'profile-picture'
        image.src = attributes.picture
        imageDiv.append(image)
        const cardBody = document.createElement('div')
        const username = document.createElement('p')
        username.innerText = attributes.name
        const tokens = document.createElement('p')
        tokens.innerText = attributes.tokens
        cardBody.append(username,tokens)
        card.append(imageDiv,cardBody)
        bodyDiv.append(card)
    });
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
    .then(newUser=> console.log(newUser))
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
