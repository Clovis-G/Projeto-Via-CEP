let SESSAO_USUARIOS = 'usuarios'
let CHAVE_SESSAO = 'usuarioLogado'

function readUser(){
    let json = localStorage.getItem(SESSAO_USUARIOS)
    return json ? JSON.parse(json) :[]
}

export function register(objectUser){
    let userList = readUser()

    if(userList.some(user => user.email === objectUser.email)){
        throw new Error(`Email ${objectUser.email} já foi cadastrado.`)
    }
    userList.push(objectUser)
    localStorage.setItem(SESSAO_USUARIOS, JSON.stringify(userList))
}

export function login(email, password){
    let users = readUser()
    let userObject = users.find(user => user.email === email && user.password === password)
    let EmailObjeto = users.find(user => user.email === email)

    if(!EmailObjeto){
        setTimeout(() => {
            window.location.href = '../pages/cadastro.html'
        }, 4000)
        throw new Error(`${email} não registrado no banco de dados. Você será direcionado para página de registar!`)
    }    
    else if(userObject){
        localStorage.setItem(CHAVE_SESSAO, JSON.stringify(userObject.email))
        return userObject.email
    }
    throw new Error("Email ou senha incorreta!")   
}