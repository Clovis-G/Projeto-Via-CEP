import {result} from './script.js'

// Consulta da API do Via-CEP de Estado, cidade e endereço
export async function viaCepAddress(uF, city, address, neighborhood){
    try{
        
        let request = await fetch(`https://viacep.com.br/ws/${encodeURIComponent(uF)}/${encodeURIComponent(city)}/${encodeURIComponent(address)}/json/`)
        let dateJson = await request.json()
        console.log(dateJson)
        
        let resultSearch = dateJson.find( informationAdrress => informationAdrress.bairro === neighborhood) 

        if(resultSearch){
            dateJson = resultSearch.cep
            result.innerHTML = `CEP encontrado com sucesso</br><span>${dateJson}</span>`
        }
        else{
            result.innerHTML = `Bairro <b>${neighborhood}</b> não encontrado`

        }
    }
    catch(error){
        console.error(error)
    }
}