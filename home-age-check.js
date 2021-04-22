const showAgeCheckContainers = () =>{
    const bodyDiv = document.querySelector('.body-div')
    const agePromptDiv = document.createElement('div')
    agePromptDiv.className = 'age-prompt-container'
    const ageTextDiv = document.createElement('div')
    ageTextDiv.className = 'age-text-container'
    const ageYesDiv = document.createElement('div')
    ageYesDiv.className = 'age-yes-container'
    const ageNoDiv = document.createElement('div')
    ageNoDiv.className = 'age-no-container'
    agePromptDiv.append(ageTextDiv,ageYesDiv,ageNoDiv)
    bodyDiv.append(agePromptDiv)
}

const fillAgeCheckContainers = () =>{
    showAgeCheckContainers()
    const ageTextDiv = document.querySelector('.age-text-container')
    const ageText = document.createElement('p')
    ageText.className = 'age-text'
    ageText.innerText = 'Are you 18 years of age or older?'
    ageTextDiv.append(ageText)
    const ageYesDiv = document.querySelector('.age-yes-container')
    const ageYes = document.createElement('button')
    ageYes.className = 'age-yes-button'
    ageYes.innerText = 'Yes'
    ageYes.addEventListener('click', e=>{
        e.preventDefault()
        showHomePage()
    })
    ageYesDiv.append(ageYes)
    const ageNoDiv = document.querySelector('.age-no-container')
    const ageNo = document.createElement('button')
    ageNo.className = 'age-no-button'
    ageNo.innerText = 'No'
    ageNo.addEventListener('click', e=>{
        e.preventDefault()
        window.location.replace('https://www.cartoonnetwork.com/')
    })
    ageNoDiv.append(ageNo)
}

const showStopJackBlackContainer = () =>{
    const bodyDiv = document.querySelector('.body-div')
    const stopJack = document.createElement('div')
    stopJack.className = 'stop-jack'
    bodyDiv.append(stopJack)
}


const showFullAgeCheck = () =>{
    showStopJackBlackContainer()
   fillAgeCheckContainers()
}