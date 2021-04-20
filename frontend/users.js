const usersUrl = 'http://localhost:3000/users'

const fetchUsers = () =>{
    fetch(usersUrl)
    .then(resp=> resp.json())
    .then(nestedData=> renderUsers(nestedData))
}

const renderUsers = nestedData =>{
    console.log(nestedData)
    const {data} = nestedData
    console.log(data)
    data.forEach(userData => {
        const {attributes} = userData
        console.log(attributes)
        const bodyDiv = document.querySelector('.body-div')
        const card = document.createElement('div')
        const imageDiv = document.createElement('div')
        const image = document.createElement('img')
        image.style.height = '15vmax';
        image.style.width = '15vmax';
        image.style.borderRadius = '50%';
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
