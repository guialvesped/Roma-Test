# Projeto: Tela de Login em React + Vite + TypeScript

Este projeto consiste em uma tela de login desenvolvida utilizando **React**, **Vite** e **TypeScript**. A interface possui validação de formulário, verificando o formato do e-mail e garantindo que a senha tenha mais de 5 caracteres antes de permitir o envio dos dados.

## Funcionalidades

- **Validação de E-mail**: O e-mail deve estar em um formato válido (`nome@dominio.com`).
- **Validação de Senha**: A senha deve conter pelo menos 6 caracteres.
- Exibição de mensagens de erro caso as validações falhem.
- Bloqueio do envio do formulário até que ambos os campos sejam preenchidos corretamente.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Vite**: Ferramenta de build que otimiza o desenvolvimento de aplicações React.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática ao código, garantindo mais robustez e facilidade de manutenção.

## Como Executar o Projeto

### Pré-requisitos

- Node.js instalado (versão 14+)
- Gerenciador de pacotes `npm` ou `yarn`

### Passos

1. Clone este repositório:
    ```bash
    git clone https://github.com/seu-usuario/nome-do-repositorio.git
    ```

2. Instale as dependências do projeto:
    ```bash
    cd nome-do-repositorio
    npm install
    # ou
    yarn install
    ```

3. Execute o projeto em ambiente de desenvolvimento:
    ```bash
    npm run dev
    # ou
    yarn dev
    ```

4. Acesse o projeto no navegador:
    ```
    http://localhost:3000
    ```

## Estrutura do Projeto
  - Pasta components - Dentro desta pasta está separados por pastas o código de cada componente.
  - Pasta Input - Dentro desta pasta há o código e a estilização do componente Input que está dentro do componente Form
  - Pasta Switch - Dentro desta  pasta há o código e a estilização do componente SwitchBox que está dentro do componente Form
  - Pasta Form - Dentro desta pasta há o código e a estilização do componente Form, além de toda a lógica do código que muda a visibilidade da senha 
  e também valida o formulário para ser enviado
  - Pasta assets - Dentro desta pasta há uma pasta "img" com todas as imagens do projeto
  - App file - Nesta pasta estão todos os componenetes em funcionamento


