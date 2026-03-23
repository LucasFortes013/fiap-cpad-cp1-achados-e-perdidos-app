*Integrantes do grupo*
Lucas Franco de Godoy Fortes
Rafael Silva Oliveira Nascimento
Pedro Noronha dos Santos

*Achados e Perdidos App*
Um aplicativo mobile desenvolvido em React Native com o objetivo de facilitar o registro e a busca de itens perdidos dentro da faculdade.
Escolhemos o problema de achados e perdidos, pois é algo que vemos pessoas sofrendo por conta disso diariamente.

*Funcionalidades*
- Registrar item perdido
- Visualizar lista de itens encontrados

*Tecnologias utilizadas*
- React Native
- Expo
- JavaScript
- Git e GitHub

<img width="363" height="830" src="https://github.com/user-attachments/assets/5f2efaa6-9702-4610-8f60-dcf762b62c5d" />
<img width="366" height="826" src="https://github.com/user-attachments/assets/e8606ca6-2ff7-4fb9-ab18-ffe011394d5e" />
<img width="370" height="824" src="https://github.com/user-attachments/assets/cf2be3af-5f81-4765-a77e-9530ade205e3" />

*Video de demonstração:* https://youtube.com/shorts/Byu-euXomO0

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
  git clone https://github.com/LucasFortes013/fiap-cpad-cp1-achados-e-perdidos-app
3. Acesse a pasta do projeto
   cd achados-e-perdidos-app
4. Instale as dependências
   npm install
5. Inicie o projeto
   npx expo start
6. Execute no celular
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
