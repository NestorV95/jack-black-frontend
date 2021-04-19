document.addEventListener('DOMContentLoaded',e=>{
    fetchGames()
    fetchUsers()
    fetchDealers()
})

const gamesUrl = 'http://localhost:3000/games'
const usersUrl = 'http://localhost:3000/users'
const dealersUrl = 'http://localhost:3000/dealers'

const fetchGames = () =>{
    fetch(gamesUrl)
    .then(resp=> resp.json())
    .then(data=> console.log(data))
}

const fetchUsers = () =>{
    fetch(usersUrl)
    .then(resp=> resp.json())
    .then(data=> console.log(data))
}

const fetchDealers = () =>{
    fetch(dealersUrl)
    .then(resp=> resp.json())
    .then(data=> console.log(data))
}

