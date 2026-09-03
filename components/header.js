class headerMain extends HTMLElement{
    connectedCallback(){
        this.innerHTML = 
            `<header class="main-header">
                <div class="container-header">
                    <div class="container-division">
                        <img class="image-header" src="./assets/icons/map-pin.png" alt="Icone-mapa">
                        <b class="sub-title">Consulta</b>
                        <span class="cep">CEP</span>
                    </div>
                    <nav class="navegation">
                        <a href="#consult">Consultar</a>
                        <a href="#about">Como funciona</a>
                    </nav>
                </div>
            </header>` 
    }
}
customElements.define("header-main", headerMain)