import { inputCep, button, result, removeResult, zipCodeLookup } from "./script.js"
import { viaCepAddress } from './apiViacepAdrress.js'

// Função que modifica as páginas por meios dos clicks das âncoras
export function switchPage(click){

    // Funtion que exibi as inputs desabilitada e da class btnenable do botão
    let inputCity = document.querySelector('.input-city')
    let inputAddress = document.querySelector('.input-address')
    let inputSector = document.querySelector('.input-sector')

    // Função habilita as inputs cidade e endereço
    function enableInputButton(display, valor, important, bolean){
        inputCity.style.setProperty(display, valor, important)
        inputAddress.style.setProperty(display, valor, important)
        inputSector.style.setProperty(display, valor, important)
        
        if(bolean){
            button.classList.add('btn-enable')
        }
        else{
            button.classList.remove('btn-enable')
        }
    }

    // Buscando Elementos do HTML que sofrerão mudançãs no HTML.
    let title = document.querySelector('.title-main')
    let descriptionCep = document.querySelector('.description-cep')
    // são selecionados todas as iputs do HTML
    let inputs = document.querySelectorAll('input')

    // Verificação se o parâmetro passado no witchPage é o link consultar pelo endereço
    if(click === 'consultar-pelo-endereco'){   
        inputCep.value = ''
        //Modificando os elementos os HTML no consultar por endereço
        title.firstChild.textContent = 'Descubra o seu CEP '
        // title.innertext = 'Descubra o seu CEP em segundos'
        descriptionCep.textContent = 'Digite o estado, cidade e endereço para abaixo receber: cep, rua, bairro, cidade, estado, IBGE, DDD e outros dados oficiais'
        //Muda descritivo do placeholder
        inputCep.placeholder = 'Digite o seu Estado pela sigla: GO'
        
        //Habilta o display inline block das inputs 
        enableInputButton('display', 'inline-block', 'important', true)
        //Evento de clicar no botão para receber buscar
        button.addEventListener('click', () => {
            let filterInputUf = inputCep.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "")
            let filterInputCity = inputCity.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "")
            let filterInputAddress = inputAddress.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "")
            let filterInputSector = inputSector.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "")
            let filterSector = filterInputSector.charAt(0).toUpperCase() + filterInputSector.slice(1)

            // Faz loop nessas inputs e chama da função filedClearing para desabilitar o display bock
            let inputsCleaning = inputs.forEach(input => {
                removeResult(input, result)   
            })
            
            //Validando as inputs
            if(filterInputUf.length !== 2 || filterInputCity.length === 0 || filterInputAddress.length === 0){
                result.innerHTML = `<b> Algum campo está vázio ou contém informações erradas. Digite as infomações corretamente</b>`
                inputsCleaning()
                return
            }
            viaCepAddress(filterInputUf, filterInputCity, filterInputAddress, filterSector)
            inputsCleaning()
        })
    }   
    
    //retornando para os estilos da página consultar pelo cep
    else{
            //Fazendo a limpeza das inputs
            inputs.forEach(inputAll => {
                inputAll.value = ''
            })

            //Modificando os elementos os HTML no consultar por endereço
            title.firstChild.textContent = 'Descubra o endereço completo '
            descriptionCep.textContent = 'Digite o Cep abaixo e receba rua, bairro, cidade, estado, IBGE, DDD e outros dados oficiais'
            inputCep.placeholder = '0 0 0 0 0 - 0 0 0'
            result.style.display = 'none'
            enableInputButton('display', 'none', 'important', false)

            button.addEventListener("click", () => {
                zipCodeLookup()
            })
        }
}