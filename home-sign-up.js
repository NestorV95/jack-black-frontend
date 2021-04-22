const showSignUpForm = () => {
    const homeFormDiv = document.querySelector('.home-form-container')
    homeFormDiv.innerHTML = ''
    const signUpForm = document.createElement('form')
    signUpForm.className = 'sign-up-form'
    const imageDiv = document.createElement('div')
    const imageLabel = document.createElement('label')
    imageLabel.className = 'sign-up-label'
    imageLabel.innerText = 'Profile Picture:'
    const imageBr = document.createElement('br')
    const imageInput = document.createElement('input')
    imageInput.className = 'sign-up-input'
    imageInput.type = 'text'
    imageInput.name = 'picture'
    imageDiv.append(imageLabel, imageBr, imageInput)
    const usernameDiv = document.createElement('div')
    const usernameLabel = document.createElement('label')
    usernameLabel.className = 'sign-up-label'
    usernameLabel.innerText = 'Username:'
    const usernameBr = document.createElement('br')
    const usernameInput = document.createElement('input')
    usernameInput.className = 'sign-up-input'
    usernameInput.type = 'text'
    usernameInput.name = 'name'
    usernameDiv.append(usernameLabel, usernameBr, usernameInput)
    const passwordDiv = document.createElement('div')
    const passwordLabel = document.createElement('label')
    passwordLabel.className = 'sign-up-label'
    passwordLabel.innerText = 'Password:'
    const passwordBr = document.createElement('br')
    const passwordInput = document.createElement('input')
    passwordInput.className = 'sign-up-input'
    passwordInput.type = 'text'
    passwordInput.name = 'password'
    passwordDiv.append(passwordLabel, passwordBr, passwordInput)
    const confirmDiv = document.createElement('div')
    const confirmLabel = document.createElement('label')
    confirmLabel.className = 'sign-up-label'
    confirmLabel.innerText = 'Confirm Password:'
    const confirmBr = document.createElement('br')
    const confirmInput = document.createElement('input')
    confirmInput.className = 'sign-up-input'
    confirmInput.type = 'text'
    confirmInput.name = 'confirmation'
    confirmDiv.append(confirmLabel, confirmBr, confirmInput)
    const signUpDiv = document.querySelector('.sign-up-button-container')
    signUpDiv.style.top = '39vh' 
    signUpDiv.style.left = '9.25vw'
    signUpDiv.innerHTML = ''
    const submitButton = document.createElement('button')
    submitButton.className = 'home-sign-up-button'
    submitButton.type = 'submit'
    submitButton.innerText = 'Sign Up'
    signUpDiv.append(submitButton)
    signUpForm.append(imageDiv,usernameDiv,passwordDiv,confirmDiv,signUpDiv)
    signUpForm.addEventListener('submit',event =>{
        event.preventDefault()
        createUser(event)   
    })
    homeFormDiv.append(signUpForm)
    // fillLoginButton()
} 

// const hideSignUpForm = () => {
//     const homeFormDiv = document.querySelector('.body-div')
//     const formContainer = document.querySelector('.form-container')
//     homeFormDiv.remove(formContainer)
// }


// class FormValidator {
//     constructor(form, fields) {
//       this.form = form
//       this.fields = fields
//     }  
    
//     initialize() {
//       this.validateOnEntry()
//       this.validateOnSubmit()
//     }
    
//     validateOnSubmit() {
//       let self = this
      
//       this.form.addEventListener('submit', e => {
//           e.preventDefault()
//           self.fields.forEach(field => {
//           const input = document.querySelector(`#${field}`)
//           self.validateFields(input)
//         })
//       })
//     }
    
//     validateOnEntry() {
//       let self = this
//       this.fields.forEach(field => {
//         const input = document.querySelector(`#${field}`)
        
//         input.addEventListener('input', event => {
//           self.validateFields(input)
//         })
//       })
//     }
    
//     validateFields(field) {
    
//       // Check presence of values
//       if (field.value.trim() === "") {
//         this.setStatus(field, `${field.previousElementSibling.innerText} cannot be blank`, "error")
//       } else {
//         this.setStatus(field, null, "success")
//       }
      
//       // check for a valid email address
//       if (field.type === "email") {
//         const re = /\S+@\S+\.\S+/
//         if (re.test(field.value)) {
//           this.setStatus(field, null, "success")
//         } else {
//           this.setStatus(field, "Please enter valid email address", "error")
//         }
//       }
      
//       // Password confirmation edge case
//       if (field.id === "password_confirmation") { 
//         const passwordField = this.form.querySelector('#password')
      
//         if (field.value.trim() == "") {
//           this.setStatus(field, "Password confirmation required", "error")
//         } else if (field.value != passwordField.value)  {
//           this.setStatus(field, "Password does not match", "error")
//         } else {
//           this.setStatus(field, null, "success")
//         }
//       }
//     }
  
//     setStatus(field, message, status) {
//       const successIcon = field.parentElement.querySelector('.icon-success')
//       const errorIcon = field.parentElement.querySelector('.icon-error')
//       const errorMessage = field.parentElement.querySelector('.error-message')
  
//       if (status === "success") {
//         if (errorIcon) { errorIcon.classList.add('hidden') }
//         if (errorMessage) { errorMessage.innerText = "" }
//         successIcon.classList.remove('hidden')
//         field.classList.remove('input-error')
//       } 
      
//       if (status === "error") {
//         if (successIcon) { successIcon.classList.add('hidden') }
//         field.parentElement.querySelector('.error-message').innerText = message
//         errorIcon.classList.remove('hidden')
//         field.classList.add('input-error')
//       }    
//     }
//   }
  
//   const form = document.querySelector('.form')
//   const fields = ["username", "email", "password", "password_confirmation"]
  
//   const validator = new FormValidator(form, fields)
//   validator.initialize()
   
