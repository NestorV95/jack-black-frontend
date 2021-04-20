const dealersUrl = 'http://localhost:3000/dealers'


const fetchDealers = () =>{
    fetch(dealersUrl)
    .then(resp=> resp.json())
    .then(nestedData=> renderDealers(nestedData))
}

const renderDealers = nestedData =>{
    console.log(nestedData)
    const {data} = nestedData
    console.log(data)
    data.forEach(dealerData => {
        const {attributes} = dealerData
        console.log(attributes)
    });

}