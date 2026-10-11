//Validação do registro do usuário do formulario do ViaCEP
import { register } from './viacepAuthentication.js'

let formViaCEP = document.querySelector('.form-ViaCEP')
let message = document.querySelector('.message')

formViaCEP.addEventListener('submit', (event) => {
    event.preventDefault()
    let form = event.target
    
    let user = {
        email: form.email.value,
        password: form.password.value
    }
    try{
        register(user)
        message.textContent = 'Email cadastrado com sucesso!'

        setTimeout(() => {
            window.location.href = '../pages/login.html'
        }, 4000)
    }
    catch(erro){
        message.textContent = erro.message
        setTimeout(() => {
            window.location.href = '../pages/login.html'
        }, 4000)
    }
})