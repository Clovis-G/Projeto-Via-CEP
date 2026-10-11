let button = document.querySelector(".btn")
button.addEventListener("click", async () => {
    let input = document.querySelector('[name="cep"]')
    let cepFilter = input.value.replace(/\D/g, "")
    let result = document.querySelector(".result")
    
    if(cepFilter.length !== 8){
        result.style.display = "block"
        result.innerHTML = `CEP <b>${cepFilter}</b> inválido!`
        
        input.addEventListener("focus", () => {
            result.style.display = "none"
        })
        return
    }
    try{
        let request = await fetch(`https://viacep.com.br/ws/${cepFilter}/json/`)
        let dateJson = await request.json()
        console.log(dateJson)
        
        if(dateJson.erro){
            result.style.display = "block"
            result.innerHTML = `CEP <b>${cepFilter}</b> não encontrado!`

            result.addEventListener("focus", () => {
                result.style.display = "none"
            })
            return
        }
        
        let form = document.querySelector(".form")
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

        input.addEventListener("focus", () => {
            form.style.display = "none"
        })
        
    }
    catch(error){
        console.error(error)
    }
})

