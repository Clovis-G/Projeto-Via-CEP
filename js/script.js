//Função que retorna se o usuário clicou em alguma Ancora
import { InitializationNavegation } from './navegation.js'
//Função Validação de cadastro do formulario VIA-CEP
import { viaCep } from './apiViacepCep.js'
//Fromulario de resultado 
import {form} from './apiViacepCep.js'
import { switchPage } from './switchPage.js'

//Função de Envento da input de entrada do CEP. Essa função desabilita o paragrafo que fornece os resultados da busca .
export function removeResult(input,element){
    input.addEventListener('focus', () => {
        element.style.display = 'none'       
    })
}
//Buscando elementos do HTML
export let inputCep = document.querySelector('.input-cep')
export let button = document.querySelector('.btn')
export let result = document.querySelector('.result')

//Função de validação do campo CEP e de busca da API do Via-CEP
export function zipCodeLookup(){
    let valueInputCep = inputCep.value
    
    let cepFilter = valueInputCep.replace(/\D/g, "")
    
    if(cepFilter.length !== 8){
        result.style.display = 'block'
        result.innerHTML = `<p>CEP <b>${cepFilter}</b> inválido.</p>`
        removeResult(inputCep, result)
        return
    }
    viaCep(cepFilter) 
    removeResult(inputCep, form)
}

//Envento de clique do botão da página inícial
button.addEventListener('click', () => {
    zipCodeLookup()
})
//Vrificando o click nos links
InitializationNavegation()
//Verifica qual link foi clicado
switchPage()

