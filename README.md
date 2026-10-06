# 📍 Via-CEP
Aplicação web desenvolvida para consulta de endereços a partir do CEP, utilizando a API pública ViaCEP.
O projeto foi desenvolvido com o objetivo de praticar fundamentos de desenvolvimento Front-End, consumo de API, manipulação de dados e construção de interfaces com HTML5, CSS3 e JavaScript.
## 🖥️ Demonstração
 **Acesse o projeto:**  [Em breve]
## 🧰 Tecnologias utilizadas
- HTML5- CSS3- JavaScript- API ViaCEP
## ⚙️ Funcionalidades
- **Consulta pelo CEP** através do CEP é possível consultar informações de endereço, adicionais e CEP.
- **Consulta de endereço** através do Estado, Cidade e Logradouro, é possível consultar as informações de endereço, adicionais e CEP.
- **Formulário de cadastro:** permite o usário criar uma nova conta utilizando os dados solicitados pelo sistema.
- **Formulário de login** permite que usuários cadastrados acessem a aplicação por meio de suas credenciais(email e senha) .
## 🔍 Como funciona
**Consultar pelo CEP:** O usuário informa um CEP no campo de consulta.
- É Realizado validação utilizando JavaScript verificando se o CEP contém 8 dígitos. É retornado uma uma mensagem.
- Se o CEP contém 8 dígitos è invalido. A aplicação retorna outra mensagem diferente.
- Se ocorrer tudo certo, a aplicação realiza a requisição para a API do ViaCEP e utiliza os dados retornados para apresentar as informações de endereço e outras informações adicionais na interface.
- Se ocorrer alguma problema no retorno da resposta da API é retornado erro como resposta.

**Consultar pelo endereço:** O usuário informa nos campos requeridos: Estado, Cidade e Logradouro.
- É Realizado validação utilizando JavaScript verificando se o Estado, cidade e logradouro contém números. É retornado uma mensagem que o campo contém números.
- Se as entradas estão corretas, a aplicação realiza a requisição para a API do ViaCEP. Utiliza os dados retornados para apresentar as informações de CEP, endereço... na interface do usuário.
- Se ocorrer alguma problema no retorno da resposta da API é retornado erro como resposta.
  
**Formulário de cadastro:** Na página de cadastro do formulário, o usuário através dos campos de Email e senha pode cadastrar no site do ViaCEP.
- A aplicação verifica se o Email existe no local storage do navegador(Memória do navegador que guarda informações).
- Se existir o email no local storage, a aplicação retorna uma mensagem e direciona o usuário para a página de login para digitar o Email e senha.
- Se não existe esse email e senha no local storage, a aplicação cadastra o email e senha e direciona o usuário para a página de login.

**Formulário de login:** Na página de login do formulário, o usuário através dos campos de Email e senha pode autenticar no site do ViaCEP. Nesse caso, como não existe a próxima etapa de sessão de autenticada, o usuário simplesmente recebe uma mensagem de boas vidas!
-  A aplicação verifica se o Email existe no local storage do navegador(Memória do navegador que guarda informações).
- Se existir o email no local storage, a aplicação retorna uma mensagem para o usuário que esse email já foi cadastrado.
### 🔄 Fluxo da aplicação
- **Fluxo consultar pelo CEP:**
```text
CEP informado
      ↓
JavaScript
      ↓
Requisição à API ViaCEP
      ↓
Dados do endereço
      ↓
Exibição na interface
```
- **Fluxo Consultar pelo endereço:**
```text
Estado informado
Cidade infomado
Logradouro informado
      ↓
JavaScript
      ↓
Requisição à API ViaCEP
      ↓
Dados do endereço
      ↓
Exibição na interface
```
Organização de código Front-End
## 💻 Como executar o projeto
### 1. Clone o repositório
```text
git clone https://github.com/Clovis-G/Projeto-Via-CEP.git
```
### 2. Acesse a pasta
```text
cd pages/Projeto-Via-CEP
```
### 3. Execute o projeto
Abra o arquivo index.html no navegador.
Também é possível utilizar uma extensão como Live Server no Visual Studio Code para executar o projeto localmente.
## 🌐 API utilizada
Este projeto utiliza a ViaCEP, uma API pública para consulta de endereços através do CEP.
https://viacep.com.br/

**🚀 Possíveis funcionalidades no ViaCEP
--Redefinição de senha: permitir que o usuário altere sua senha de acesso.
--Página de perfil: criar uma área para visualização e gerenciamento dos dados do usuário.
--Edição de dados: permitir a atualização das informações cadastradas.
--Histórico de consultas: armazenar e exibir os CEPs consultados anteriormente.
--Favoritos: possibilitar que o usuário salve endereços para consultas futuras.

**📚 Aprendizados**

- Durante o desenvolvimento deste projeto, foram praticados conceitos importantes de desenvolvimento Front-End, incluindo:

- Estruturação de páginas com HTML5

- Estilização com CSS3

- Manipulação do DOM com JavaScript

- Eventos e interações com o usuário

- Consumo de APIs

- Requisições HTTP

- Manipulação de dados retornados pela API

Tratamento de entradas do usuário
⭐ Projeto desenvolvido para fins de estudo e prática em desenvolvimento Front-End.
