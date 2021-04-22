const showGameButtonContainers = () =>{
    const buttonsDiv = document.querySelector('.buttons')
    const standButtonDiv = document.createElement('div')
    standButtonDiv.className = 'stand-button-container'
    const drawButtonDiv = document.createElement('div')
    drawButtonDiv.className = 'draw-button-container'
    const doubleButtonDiv = document.createElement('div')
    doubleButtonDiv.className = 'double-button-container'
    const surrenderButtonDiv = document.createElement('div')
    surrenderButtonDiv.className = 'surrender-button-container'
    const exitGameButtonDiv = document.createElement('div')
    exitGameButtonDiv.className = 'exit-game-button-container'
    buttonsDiv.append(standButtonDiv,drawButtonDiv,doubleButtonDiv,surrenderButtonDiv,exitGameButtonDiv)
}

// const fillGameButtonContainers = (uHand, dHand, currentUser ,data) =>{
//     const standButtonDiv = document.querySelector('.stand-button-container')
//     let standBtn = document.createElement('button')
//     standBtn.className = 'stand-button'
//     standBtn.innerText = "Stand"
//     standBtn.addEventListener('click', (e) => {
//         e.preventDefault()
//         userStandAction(uHand, dHand, currentUser ,data )
//         standAndDrawOnly()
//     })
//     standButtonDiv.append(standBtn)
//     const drawButtonDiv = document.querySelector('.draw-button-container')
//     const drawBtn = document.createElement('button')
//     drawBtn.className = 'draw-button'
//     drawBtn.innerText = "Draw"
//     drawBtn.addEventListener('click',e=>{
//         e.preventDefault()
//         userDrawAction(data,uHand)
//         standAndDrawOnly()
//     })
//     drawButtonDiv.append(drawBtn)
//     const doubleButtonDiv = document.querySelector('.double-button-container')
//     const doubleBtn = document.createElement('button')
//     doubleBtn.className = 'double-button'
//     doubleBtn.innerText = "Double Down"
//     doubleBtn.addEventListener('click',e=>{
//         e.preventDefault()
//         userDoubleAction(uHand, dHand, currentUser ,data )
//         standAndDrawOnly()
//     })
//     doubleButtonDiv.append(doubleBtn)
//     const surrenderButtonDiv = document.querySelector('.surrender-button-container')
//     const surBtn = document.createElement('button')
//     surBtn.className = 'surrender-button'
//     surBtn.innerText = "Surrender"
//     surBtn.addEventListener('click',e=>{
//         e.preventDefault()
//         userSurrenderAction(uHand, dHand, currentUser ,data)
//         standAndDrawOnly()
//     })
//     surrenderButtonDiv.append(surBtn)
//     const exitGameButtonDiv = document.querySelector('.exit-game-button-container')
//     const exitBtn = document.createElement('button')
//     exitBtn.className = 'exit-game-button'
//     exitBtn.innerText = "Exit"
//     exitBtn.addEventListener('click',e=>{
//         e.preventDefault()
//         userExitGameAction()
//     })
//     exitGameButtonDiv.append(exitBtn)
// }

// const userStandAction = (uHand, dHand, currentUser ,data) =>{
//     if(uHand.value() >= dHand.value()){
//         while(dHand.value() < 16 || dHand.value() < uHand.value){
//         dHand.appendCard()
//         dHand.busted_check()
//         }
//         // dHandDisplay(dHand)
//         fillGameDealerHand(dHand)
//         if(dHand.busted == true) {
//         currentUser.tokens = currentUser.tokens + uHand.bet
//         //something soemthing  "User Wins"
        
//         console.log('dealer busted')
//         } else {
//         let results = win_check(data,uHand.value(),dHand.value())
//         //do whatever with results
//         if(results == 'User Wins'){
//             console.log('User Wins')
//             currentUser.tokens = currentUser.tokens + uHand.bet

//         } else if (results == 'User Loses'){
//             console.log('User Loses')
//             currentUser.tokens = currentUser.tokens - uHand.bet

//             } else {
//                 console.log('User Ties')
//             }
//         }
//     } else {
//         currentUser.tokens = currentUser.tokens - uHand.bet

//         console.log('User Loses')
//     }
//     // uProfileDivDisplay(data, uHand)
//     fillGamePlayerProfile(data, uHand)
// }

// const userDrawAction = (data, uHand) =>{
//     uHand.appendCard()
//     uHand.busted_check()
//     // uHandDisplay(uHand)
//     fillGameUserHand(uHand)
//     if(uHand.busted == true) {
//         currentUser.tokens = currentUser.tokens - uHand.bet
//         console.log('User busted')
//         // uProfileDivDisplay(data, uHand)
//         fillGamePlayerProfile(data, uHand)
//     } else if (uHand.value == 21) {
//         currentUser.tokens = currentUser.tokens + uHand.bet
//         console.log('Dealer busted')
//         // uProfileDivDisplay(data, uHand)
//         fillGamePlayerProfile(data, uHand)

//     } else {
//         //reshow screen with out 2 buttons and with your new card
//         // buttons_div.html = ''
//         // buttonDisplay(uHand, dHand, currentUser ,data , false)
//         standAndDrawOnly()
//     }    
// }

// const userDoubleAction = (uHand, dHand, currentUser ,data ) =>{
//     uHand.bet = uHand.bet * 2
//     uHand.appendCard()
//     uHand.busted_check()
//     // uHandDisplay(uHand)
//     fillGameUserHand(uHand)
//     if(uHand.busted == true) {
//         currentUser.tokens = currentUser.tokens - uHand.bet
//         console.log('user busted')
//         return "User Loses"
//     } else {
//         while(dHand.value() < 16 || dHand.value() < uHand.value){
//             dHand.appendCard()
//             dHand.busted_check()
//         }
//         // dHandDisplay(dHand)
//         fillGameDealerHand(dHand)
//         if(dHand.busted == true) {
//             currentUser.tokens = currentUser.tokens + uHand.bet
//             //something soemthing  "User Wins"
//             console.log('dealer busted')

//         } else {
//             let results = win_check(data,uHand.value(),dHand.value())
//             //do whatever with results
//             if(results == 'User Wins'){
//                 console.log('User Wins')
//                 currentUser.tokens = currentUser.tokens + uHand.bet

//             } else if (results == 'User Loses'){
//                 currentUser.tokens = currentUser.tokens - uHand.bet

//                 console.log('User Loses')
//             } else {
//                 console.log('User Ties')
//             }
//         }
//     }
//     // uProfileDivDisplay(data, uHand)
//     fillGamePlayerProfile(uHand, dHand, currentUser, data, first)
// }

// const userSurrenderAction = (uHand, dHand, currentUser ,data , first) =>{
//     currentUser.tokens = currentUser.tokens - (uHand.bet/2)
//     console.log('surrendered')
//     // uProfileDivDisplay(data, uHand)
//     //new round ()
// }

// const userExitGameAction = () => {
//     //update user info first
//     //then exit to main page
//     //maybye a little animation? thinking to big just stop me please.
//     showMainPage()
// }



// const standAndDrawOnly = () =>{
//     const doubleButtonDiv = document.querySelector('.double-button-container')
//     doubleButtonDiv.innerHTML = ''
//     const surrenderButtonDiv = document.querySelector('.surrender-button-container')
//     surrenderButtonDiv.innerHTML = ''
// }