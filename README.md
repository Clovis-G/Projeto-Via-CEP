## 📍 ViaCEP V1 — Consulta de CEP

Aplicação web desenvolvida para consultar CEPs e obter informações de endereços de forma simples e rápida, utilizando a API pública do [ViaCEP](https://viacep.com.br/).

🔗 **Acesse o projeto:** [Projeto ViaCEP — V1](https://clovis-g.github.io/Projeto-Via-CEP/)

## 📌 Sobre o projeto

O **ViaCEP V1** é um projeto de desenvolvimento front-end que permite ao usuário informar um CEP e consultar os dados do endereço correspondente.

A aplicação consome a API do ViaCEP para recuperar informações como logradouro, bairro, localidade, estado e outros dados disponibilizados pelo serviço.

Esta primeira versão tem como foco a consulta de CEP, a manipulação do DOM e a integração com uma API externa utilizando JavaScript.

## 🚀 Funcionalidades

- 🔎 **Consulta de CEP:** pesquisa de endereços a partir de um CEP informado pelo usuário.
- 📍 **Exibição de endereço:** apresentação dos dados retornados pela API.
- ✅ **Validação do CEP:** verificação do formato do CEP informado antes da consulta.
- ⚠️ **Tratamento de respostas:** identificação de CEP inválido ou não encontrado, conforme as validações implementadas.
- 🔗 **Integração com API:** consumo dos dados disponibilizados pelo ViaCEP.

## 🛠️ Tecnologias utilizadas

- **HTML5:** estruturação das páginas e dos elementos da interface.
- **CSS3:** estilização e organização visual da aplicação.
- **JavaScript:** validações, manipulação do DOM e comunicação com a API.
- **API ViaCEP:** serviço externo utilizado para consultar informações de endereços.
- **Git e GitHub:** versionamento e hospedagem do projeto.

## ⚙️ Como funciona?

1. O usuário informa o CEP no campo de consulta.
2. A aplicação valida o valor informado e remove caracteres que não sejam numéricos, quando aplicável.
3. O JavaScript realiza uma requisição à API ViaCEP.
4. A aplicação verifica a resposta recebida.
5. Se a consulta for bem-sucedida, os dados do endereço são apresentados na interface. Caso contrário, uma mensagem informa o problema identificado.

## 🔄 Fluxo da aplicação

```text
Usuário informa o CEP
        |
        v
Validação do CEP
        |
        v
Requisição à API ViaCEP
        |
        v
Análise da resposta
        |
        +-------------------+
        |                   |
        v                   v
CEP encontrado        CEP inválido
        |              ou não encontrado
        v                   |
Exibição do endereço       v
                    Exibição de mensagem
```

## ▶️ Como executar localmente

1. Clone este repositório:

   ```bash
   git clone https://github.com/clovis-g/Projeto-Via-CEP.git
   ```

2. Acesse a pasta do projeto:

   ```bash
   cd Projeto-Via-CEP
   ```

3. Abra o projeto no Visual Studio Code.
4. Execute o arquivo HTML principal utilizando uma extensão como **Live Server**, caso esteja disponível no projeto.
      ```bash
   cd Projeto-Via-CEP/pages
   ```

Também é possível acessar a aplicação diretamente pelo link publicado no GitHub Pages.

## 🌐 API utilizada

O projeto utiliza a API pública do ViaCEP para realizar consultas de endereços.

**Documentação oficial:** [https://viacep.com.br/](https://viacep.com.br/)

Exemplo de consulta:

```text
https://viacep.com.br/ws/01001000/json/
```

A API retorna os dados do CEP informado em formato JSON, que podem ser processados pelo JavaScript e apresentados na interface.

## 📚 Objetivos de aprendizagem

Este projeto faz parte do meu processo de aprendizado em desenvolvimento web e permite praticar conceitos como:

- Manipulação do DOM com JavaScript.
- Eventos e validação de formulários.
- Requisições HTTP utilizando `fetch()`.
- Consumo e tratamento de dados JSON.
- Tratamento de erros e respostas de uma API.
- Organização de arquivos e versionamento com Git.

## 📌 Status do projeto

**Versão 1.0 — Consulta de CEP**

Esta versão concentra-se na funcionalidade de pesquisa de CEP e exibição dos dados retornados pela API.

Funcionalidades adicionais poderão ser desenvolvidas em versões futuras.

## 👨‍💻 Autor

**Clovis G.**

Projeto desenvolvido para fins de aprendizado e prática de desenvolvimento front-end.

- GitHub: [@clovis-g](https://github.com/clovis-g)
- Projeto online: [ViaCEP V1](https://clovis-g.github.io/Projeto-Via-CEP/)
