# 📍 Projeto Via-CEP — V2

Aplicação web desenvolvida para facilitar a consulta de CEPs brasileiros por meio da API pública [ViaCEP](https://viacep.com.br/). Nesta segunda versão, o projeto evoluiu com a implementação de páginas de cadastro e login, validações de formulários e uma nova funcionalidade de busca de CEP por endereço.

O objetivo é praticar o desenvolvimento front-end, a manipulação do DOM com JavaScript, o consumo de APIs e a organização de funcionalidades em uma aplicação web.

## 📌 Índice

- [Sobre o projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias utilizadas](#-tecnologias-utilizadas)
- [Como funciona](#-como-funciona)
- [Fluxo da aplicação](#-fluxo-da-aplicação)
- [Como executar o projeto](#-como-executar-o-projeto)
- [Possíveis melhorias](#-possíveis-melhorias)
- [Autor](#-autor)

## 💻 Sobre o projeto

O Via-CEP V2 amplia a proposta inicial de consulta de CEP, adicionando recursos de navegação e formulários para tornar a experiência do usuário mais completa.

A aplicação permite que o usuário realize o cadastro, acesse a página de login e consulte informações de endereço utilizando os dados de estado (UF), cidade, endereço e bairro.

A consulta é realizada por meio de requisições à API ViaCEP, que retorna os dados correspondentes ao endereço informado.

## 🚀 Funcionalidades

### 🔐 Cadastro de usuário

- Formulário para preenchimento dos dados de cadastro.
- Validação dos campos preenchidos.
- Verificação de e-mail já cadastrado.
- Exibição de mensagens de sucesso ou erro durante o cadastro.

### 🔑 Login

- Formulário para autenticação do usuário.
- Validação dos campos de entrada.
- Verificação das informações fornecidas.
- Exibição de mensagens para orientar o usuário durante o processo.

### 📍 Consulta de CEP por endereço

- Busca de CEP por estado (UF).
- Pesquisa utilizando a cidade.
- Pesquisa pelo endereço ou logradouro.
- Filtragem dos resultados pelo bairro informado.
- Consumo da API pública ViaCEP para obtenção dos dados.
- Tratamento de situações em que não são encontrados resultados ou os dados informados são inválidos.

### 🧩 Interface e interação

- Manipulação dinâmica dos elementos HTML com JavaScript.
- Navegação entre as funcionalidades da aplicação.
- Validação e tratamento das entradas do usuário.
- Exibição dinâmica de mensagens e resultados.

## 🛠️ Tecnologias utilizadas

| Tecnologia | Aplicação no projeto                                           |
| ---------- | -------------------------------------------------------------- |
| HTML5      | Estruturação das páginas e dos formulários.                    |
| CSS3       | Estilização da interface e dos componentes.                    |
| JavaScript | Validações, eventos, manipulação do DOM e lógica da aplicação. |
| API ViaCEP | Consulta de informações de CEP por endereço.                   |
| Git        | Controle de versão do código-fonte.                            |
| GitHub     | Hospedagem do repositório e gerenciamento do projeto.          |

## ⚙️ Como funciona

### 1. Cadastro e login

O usuário acessa o formulário de cadastro, preenche os campos e passa pelas validações implementadas. Após o cadastro, pode acessar a página de login e informar suas credenciais.

### 2. Consulta de CEP

Na página de consulta, o usuário informa os dados do endereço:

- **Estado:** sigla da unidade federativa.
- **Cidade:** município do endereço.
- **Endereço:** nome do logradouro.
- **Bairro:** região utilizada para filtrar os resultados.

O JavaScript valida as informações e realiza a requisição à API ViaCEP. Os resultados retornados são processados para localizar o endereço correspondente e apresentar o CEP.

## 🔄 Fluxo da aplicação

```text
                    VIA-CEP V2
                        |
           +------------+------------+
           |                         |
       Cadastro                    Login
           |                         |
    Validar campos            Validar campos
           |                         |
    Verificar e-mail        Verificar credenciais
           |                         |
           +------------+------------+
                        |
                 Área de consulta
                        |
             Informar dados do endereço
                        |
           +------------+------------+
           |            |            |
          UF          Cidade      Endereço
                        |
                     Bairro
                        |
               Validar informações
                        |
                 Consultar API
                     ViaCEP
                        |
              Processar resultados
                        |
              Exibir CEP encontrado
```

## ▶️ Como executar o projeto

### Pré-requisitos

- Um navegador atualizado.
- [Git](https://git-scm.com/), para clonar o repositório.
- [Visual Studio Code](https://code.visualstudio.com/), recomendado para editar e executar o projeto.
- Extensão Live Server para facilitar a execução das páginas durante o desenvolvimento.

### Instalação

**1. Clone o repositório:**

```bash
git clone https://github.com/Clovis-G/Projeto-Via-CEP.git
```

**2. Acesse a pasta do projeto:**

```bash
cd Projeto-Via-CEP
```

**3. Abra o projeto no Visual Studio Code:**

```bash
code .
```

**4. Selecione a página HTML inicial do projeto no diretório pages e execute-a com o Live Server.**

A localização da página inicial depende da estrutura de pastas do projeto. Caso necessário, abra diretamente o arquivo HTML correspondente à tela que deseja testar.

**5. Teste as funcionalidades:**

- Realize um cadastro e verifique as mensagens de validação.
- Acesse a página de login e teste as credenciais.
- Abra a página de consulta de CEP.
- Informe estado, cidade, endereço e bairro para realizar a busca.

> **Observação:** a consulta depende de conexão com a internet para acessar a API ViaCEP.

## 💡 Possíveis melhorias

- Implementar recuperação e redefinição de senha.
- Criar uma página de perfil do usuário.
- Aprimorar o tratamento de erros e o feedback visual.
- Adicionar testes automatizados para as validações.
- Implementar um back-end e um banco de dados para gerenciar usuários de forma mais segura.
- Melhorar a acessibilidade e a responsividade da interface.

## 📚 Aprendizados

O desenvolvimento da V2 permite aprofundar conhecimentos em:

- Manipulação do DOM e tratamento de eventos.
- Funções, validações e organização do código JavaScript.
- Consumo de APIs com `fetch`.
- Processamento de respostas JSON.
- Tratamento de erros e resultados de consultas.
- Versionamento com Git e organização de branches.
- Evolução incremental de um projeto front-end.

## 👨‍💻 Autor

**Clovis G.**

Projeto desenvolvido para fins de estudo e prática de desenvolvimento web.

🔗 **Repositório:** [Projeto Via-CEP — GitHub](https://github.com/Clovis-G/Projeto-Via-CEP/tree/develop)

---

*Projeto educacional em evolução. As funcionalidades descritas correspondem à proposta da versão V2.*
