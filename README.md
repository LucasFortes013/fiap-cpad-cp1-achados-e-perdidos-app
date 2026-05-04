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

<img width="1080" height="2400" alt="print1" src="https://github.com/user-attachments/assets/41cfc138-6bcb-4492-9860-1fccd31c2ed5" />
<img width="1080" height="2400" alt="print2" src="https://github.com/user-attachments/assets/baa1edd8-0eb7-4881-880e-787f9238bf7a" />
<img width="1080" height="2400" alt="print3" src="https://github.com/user-attachments/assets/0ba67544-aa5e-48ee-8c3e-19a07a34c4f6" />
<img width="1080" height="2400" alt="print4" src="https://github.com/user-attachments/assets/16220463-106e-4e15-a318-c9d549ac04f6" />
<img width="1080" height="2400" alt="print5" src="https://github.com/user-attachments/assets/df255c35-09c0-4060-aea5-9445f9180b22" />
<img width="1080" height="2400" alt="print6" src="https://github.com/user-attachments/assets/b7d5c73c-6ba8-4057-b99b-2d6b9fe1e974" />


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
  - npx expo install @react-native-async-storage/async-storage
6. Inicie o projeto
  - npx expo start
7. Execute no celular
   - Abra o Expo Go
   - Escaneie o QR Code exibido no terminal
  
*Decisões Técnicas*

O projeto foi estruturado utilizando o Expo Router, organizando as telas dentro da pasta app/, o que facilita a navegação e manutenção.

A aplicação utiliza o AsyncStorage como forma de persistência local, permitindo:
- Armazenar usuários cadastrados
- Salvar itens registrados
- Manter sessão de login
Essa abordagem foi escolhida por ser simples e suficiente para o escopo do projeto.

*Hooks Utilizados*

- useState → controle de inputs e dados dos itens
- useEffect → carregamento inicial de dados
- useFocusEffect → atualização automática da lista ao voltar para a tela
- useRouter → navegação entre telas

*Navegação*

A navegação foi implementada com Expo Router, seguindo o fluxo:

1. Tela inicial
- Login
- Cadastro
2. Após login → Home
- Acesso às funcionalidades principais
3. Registro de item
- Cadastro de nome, local e imagem
4. Lista de itens
- Exibição dinâmica dos itens cadastrados

*Persistência e Dados*
Os dados são armazenados localmente utilizando o AsyncStorage, permitindo:
- Persistência mesmo após fechar o app
- Armazenamento de itens cadastrados
- Controle simples de autenticação
