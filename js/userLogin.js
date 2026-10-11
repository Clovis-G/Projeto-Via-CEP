//Validação e login login do usuário
import { login } from './viacepAuthentication.js'

let form = document.querySelector('.form-ViaCEP')
let message = document.querySelector('.message')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    let form = event.target

    let user = {
        email: form.email.value,
        password: form.password.value
    }   
    try{
        let autentication = login(user.email,user.password)
        message.innerHTML = `Seja bem vindo <b>${autentication}</b>`
    }
    catch(erro){
        message.textContent = erro.message
    }
})