import {result} from './script.js'
export let form = document.querySelector(".form")

// API do Via-CEP para o cep
export async function viaCep(cepInput){
    try{
        
        let request = await fetch(`https://viacep.com.br/ws/${encodeURIComponent(cepInput)}/json/`)
        let dateJson = await request.json()
        
        if(dateJson.erro){
            result.style.display = "block"
            result.innerHTML = `CEP <b>${cepInput}</b> não encontrado!`  
            return
        }
        form.style.display = "block"
        
        let cep = document.querySelector('[name="Cep"]')
        let logradouro = document.querySelector('[name="logradouro"]')
        let bairro = document.querySelector('[name="bairro"]')
        let ddd = document.querySelector('[name="ddd"]')
        let uf = document.querySelector('[name="uf"]')
        let siafi = document.querySelector('[name="siafi"]')
        let localidade = document.querySelector('[name="localidade"]')
        let estado = document.querySelector('[name="estado"]')
        let regiao = document.querySelector('[name="regiao"]')
        let ibge = document.querySelector('[name="ibge"]')
        
        cep.value = dateJson.cep
        logradouro.value = dateJson.logradouro
        bairro.value = dateJson.bairro
        ddd.value = dateJson.ddd
        uf.value = dateJson.uf
        siafi.value = dateJson.siafi
        localidade.value = dateJson.localidade
        estado.value = dateJson.estado
        regiao.value = dateJson.regiao
        ibge.value = dateJson.ibge
    }
    catch(error){
        console.error(error)
    }
}
