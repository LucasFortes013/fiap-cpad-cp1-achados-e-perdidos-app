*Integrantes do grupo*
- Lucas Franco de Godoy Fortes
- Rafael Silva Oliveira Nascimento
- Pedro Noronha dos Santos

*Sobre o Projeto* 
- O Achados e Perdidos App é um aplicativo mobile desenvolvido em React Native com Expo, com o objetivo de facilitar o registro e a busca de itens perdidos dentro do ambiente acadêmico.
A proposta surgiu a partir de um problema comum no dia a dia: a perda de objetos pessoais dentro da faculdade e a dificuldade de encontrá-los posteriormente.

*Funcionalidades*
- Cadastro e login de usuários
- Registro de itens perdidos (com imagem)
- Listagem dinâmica de itens cadastrados
- Busca de itens por nome
- Armazenamento local dos dados (AsyncStorage)
- Upload de imagem via galeria
- Anexo de arquivos (Document Picker)

*Tecnologias utilizadas*
- React Native
- Expo
- JavaScript
- Expo Router
- AsyncStorage
- Expo Image Picker
- Expo Document Picker
- Git e GitHub

<img width="1080" height="2400" alt="print2" src="https://github.com/user-attachments/assets/baa1edd8-0eb7-4881-880e-787f9238bf7a" />
<img width="1080" height="2400" alt="print3" src="https://github.com/user-attachments/assets/0ba67544-aa5e-48ee-8c3e-19a07a34c4f6" />
<img width="1080" height="2400" alt="print4" src="https://github.com/user-attachments/assets/16220463-106e-4e15-a318-c9d549ac04f6" />
<img width="1080" height="2400" alt="print5" src="https://github.com/user-attachments/assets/df255c35-09c0-4060-aea5-9445f9180b22" />
<img width="1080" height="2400" alt="print6" src="https://github.com/user-attachments/assets/b7d5c73c-6ba8-4057-b99b-2d6b9fe1e974" />
<img width="1080" height="2400" alt="print1" src="https://github.com/user-attachments/assets/41cfc138-6bcb-4492-9860-1fccd31c2ed5" />


*Video de demonstração:* https://www.youtube.com/shorts/LqLLgRm3sdU


*Como rodar o projeto*
Pré-requisitos: 
- VS Code
- Node.js
- Expo CLI
- App Expo Go no celular
- Git

*Passo a Passo*
1. Abra o terminal no VS Code
2. Clone o repositório
  - git clone https://github.com/LucasFortes013/fiap-cpad-cp1-achados-e-perdidos-app
3. Acesse a pasta do projeto
  - cd fiap-cpad-cp1-achados-e-perdidos-app
4. Permitir a execução dos scripts
  - Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
5. Instale as dependências
  - npm install
  - npx expo install expo-image-picker
  - npx expo install expo-document-picker
6. Inicie o projeto
  - npx expo start
7. Execute no celular
   - Abra o Expo Go
   - Escaneie o QR Code exibido no terminal
  
*Decisões Técnicas*

O projeto foi organizado de forma modular para facilitar a manutenção e escalabilidade. As principais pastas são:
- screens/: contém as telas principais do aplicativo, como Home, Registro de Itens e Listagem de Itens Encontrados.
- components/: armazena componentes reutilizáveis, como botões e inputs.
- assets/: utilizado para imagens e arquivos estáticos.
Essa divisão permite maior organização do código e facilita o trabalho em equipe, evitando conflitos durante o desenvolvimento.

*Hooks Utilizados*

Foram utilizados hooks do React para gerenciamento de estado e comportamento das telas:
- useState: utilizado para armazenar e atualizar dados como informações dos itens (nome, descrição, local, etc.).
- useEffect: utilizado para executar ações quando a tela é carregada (como inicialização de dados, quando aplicável).
Esses hooks permitem um controle eficiente da interface e tornam o código mais simples e reutilizável.

*Navegação*

A navegação do aplicativo foi implementada utilizando uma biblioteca de rotas (como React Navigation).
O fluxo principal do app funciona da seguinte forma:
- Tela inicial (Home):
  - Acesso à tela de registro de itens perdidos
  - Acesso à tela de itens encontrados
- Tela de registro:
  - Usuário insere informações do item
- Tela de listagem:
  - Exibe os itens cadastrados
A navegação foi estruturada de forma simples e intuitiva, garantindo uma boa experiência para o usuário.

*Próximos Passos*
- Integração com banco de dados
- Sistema de autenticação de usuário
- Upload de imagens dos itens perdidos
- Implementação de busca por nome e categoria
- Notificação para avisar se algum item foi encontrado
