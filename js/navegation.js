//Função de importação do component header-main
// import '../components/header.js'
//Função que muda as páginas refrente de acordo com os links
import { switchPage } from './switchPage.js'

export function InitializationNavegation(){
    // Buscando os Elementos de âncoras do HTML
    let componentsHeader = document.querySelector('header-main')
    let linksHeader = componentsHeader.querySelectorAll('.navegation a[data-page]')

    // Retorno for true, quer dizer que o usuarios está navegando entre os links
    if(linksHeader){
        //Aguardando o click nas âncoras
        linksHeader.forEach(link => {
            //Verificando os links clicados para corresponderem as verificações das trocas de páginas no arquivo switchPage.
            link.addEventListener("click", () => {
                if(link.dataset.page === 'consultar-pelo-endereco'){
                    switchPage(link.dataset.page)
                    console.log(Boolean(link.dataset.page === 'consultar-pelo-endereco'))
                }
                else{
                    switchPage(link.dataset.page)
                }
            })
        })
    }
}