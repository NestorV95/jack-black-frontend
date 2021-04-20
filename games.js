const gamesUrl = 'http://localhost:3000/games'

const fetchGames = () =>{
    fetch(gamesUrl)
    .then(resp=> resp.json())
    .then(nestedData=> renderGames(nestedData))
}   
    
const renderGames = nestedData =>{
    console.log(nestedData)
    const {data} = nestedData
    console.log(data)
    data.forEach(gameData=>{
        const {attributes} = gameData
        console.log(attributes)
        
    })
}