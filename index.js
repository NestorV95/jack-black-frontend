document.addEventListener('DOMContentLoaded',e=>{
    resetGlobalUser()
    showWelcome()
})

let globalUser = null

const resetGlobalUser = ()=>{
    globalUser = null
}

const clearBodyDiv = () => {
const bodyDiv = document.querySelector('.body-div')
    bodyDiv.innerHTML = ''
}
