# FAZBEAR ARQUIVOS - atividade de Firebase e React

Projeto escolar feito com React + Vite, Firebase Authentication e Cloud Firestore. O cadastro e login são por **e-mail e senha**, e cada usuário tem seus próprios animatrônicos.

## 1. Crie o Firebase
1. Entre em https://console.firebase.google.com/ e clique em **Adicionar projeto**. Nome sugerido: `fazbear-arquivos-escola`.
2. Em **Visão geral do projeto**, clique no ícone **Web (`</>`)** para registrar um aplicativo web com nome `Fazbear Arquivos`.
3. Em **Configuração do SDK**, escolha **Config**. Você verá `apiKey`, `authDomain`, `projectId`, etc.
4. Em **Authentication > Começar > Método de login**, ative **E-mail/senha** (não precisa ativar o link por e-mail).
5. Em **Firestore Database > Criar banco de dados**, crie o banco em uma região de sua escolha e mantenha as regras restritas; em **Regras**, cole **todo** o conteúdo de `firestore.rules` e clique em **Publicar**.

## 2. Configure e execute no computador
1. Instale o **Node.js LTS** e abra esta pasta no terminal (Cursor ou VS Code).
2. Copie `.env.example` e renomeie a cópia para `.env`.
3. Preencha cada `VITE_FIREBASE_...` com os valores do seu aplicativo Web no console. Não coloque aspas extras.
4. No terminal, execute:

```bash
npm install
npm run dev
```

5. Abra o endereço local indicado no terminal (normalmente `http://localhost:5173`).
6. Crie uma conta com um e-mail e senha **de teste** (mínimo 6 caracteres).
7. Entre e clique em **Adicionar 4 exemplos** ou **Novo animatrônico**. Aguarde os registros aparecerem.
8. Teste **editar**, **excluir**, **sair** e **entrar novamente**. Os dados devem continuar no Firestore.

## 3. Prints que o professor pediu
Não invente prints. Tire os prints do **seu** projeto Firebase depois de seguir os passos acima.

- **Print 1:** Firebase > **Visão geral do projeto** (mostrando o nome do projeto/app).
- **Print 2:** Authentication > **Usuários** (mostrando a conta criada; se for entregar o PDF publicamente, esconda o e-mail real).
- **Print 3:** Authentication > **Método de login** (mostrando E-mail/senha como ativado).
- **Print 4:** Firestore Database > **Dados** (mostrando a coleção `animatronics`).
- **Print 5:** Clique em `animatronics` e abra 1 ou 2 documentos para mostrar os campos.
- **Opcional:** print da tela do catálogo do app.

No modelo de relatório que acompanha o ZIP, substitua os espaços de prints pelos seus prints. O PDF final precisa conter capturas reais.

## 4. Para que serve a coleção?
`animatronics` contém documentos dos animatrônicos. Cada documento tem `nome`, `jogo`, `tipo`, `comportamento`, `descricao`, `ownerUid` (usuário dono), `criadoEm` e, após edição, `atualizadoEm`. As contas e senhas são gerenciadas pelo Firebase **Authentication**, e não ficam numa coleção do Firestore.

## 5. Colocar no GitHub (opcional)
Crie um repositório **privado** chamado `fazbear-arquivos`, envie os arquivos, mas NÃO envie `.env` nem a pasta `node_modules`. O `.gitignore` já protege isso.

Se usar GitHub Pages, o nome do repositório precisa ser `fazbear-arquivos` para combinar com o caminho definido em `vite.config.js`. Configure secrets do GitHub Actions com as variáveis VITE_FIREBASE_... e autorize o domínio público em Firebase Authentication > Configurações > Domínios autorizados. Não publique o projeto sem revisar regras, domínios e privacidade.

> A chave Web de configuração do Firebase não é uma senha de administrador: a proteção efetiva dos documentos fica nas regras de segurança, nos domínios e nos controles do projeto. Nunca envie chaves de contas de serviço nem credenciais privadas.

## 6. Fontes
- https://firebase.google.com/docs/auth/web/start
- https://firebase.google.com/docs/firestore/quickstart
- https://firebase.google.com/docs/rules/rules-and-auth
- https://firebase.googleblog.com/2014/04/firebase-turns-two-today.html
- https://firebase.googleblog.com/2014/10/firebase-is-joining-google.html
- https://pt-br.react.dev/versions
