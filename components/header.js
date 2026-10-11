class headerMain extends HTMLElement{
    connectedCallback(){
        this.innerHTML = 
            `<header class="main-header">
                <div class="container-division">
                    <img class="image-header" src="../assets/icons/map-pin.png" alt="Icone-mapa">
                    <b class="sub-title">Consulta</b>
                    <span class="cep">CEP</span>
                </div>
                <nav class="navegation">
                    <ul>
                        <a data-page="consultar-pelo-cep" href="#consult">Consultar pelo CEP</a>
                        <a data-page="consultar-pelo-endereco" href="#consult">Consultar pelo endereço</a>
                        <a href="../pages/cadastro.html">Formulário de cadastro</a>
                        <a href="#about">Como funciona</a>
                    </ul>
                </nav>
            </header>` 
    }
}
customElements.define("header-main", headerMain)