# UmaWiki — React Native / Expo

Projeto acadêmico/fan-made de **Uma Musume** criado para demonstrar:

- React Native + Expo;
- Navigation (Stack + Bottom Tabs);
- `FlatList`;
- funções de busca, filtro e pontuação;
- componentes reutilizáveis;
- estado com React Hooks;
- login funcional com persistência local (`AsyncStorage`);
- Wiki com imagem, nome, aniversário, idade informada como não divulgada quando necessário, altura, peso, faixa de corrida, posição/estilo e CV;
- quiz Fácil, Médio e Difícil;
- resultado com pontuação.

> Este projeto não é afiliado à Cygames. As imagens exibidas pelo app são carregadas a partir do portal oficial de Uma Musume e são usadas aqui somente como referência em um projeto de estudo.

---

## 1. Requisitos

Recomendado:

- Windows 11;
- Node.js **22.13 ou superior**;
- Git;
- GitHub CLI (`gh`) se quiser criar o repositório pelo terminal;
- VS Code;
- Expo Go no celular ou emulador Android.

O projeto usa Expo SDK 57 / React Native 0.86.

---

## 2. Abrir pelo terminal integrado do VS Code

Abra esta pasta no VS Code.

Depois:

```powershell
npm install
npx expo install --fix
npm run doctor
npm run start
```

Você também pode usar:

```powershell
npm run android
```

Ou no VS Code:

`Terminal > Run Task > Expo: iniciar`

---

## 3. Login de demonstração

Use:

```text
E-mail: treinador@umawiki.app
Senha: 123456
```

O botão **Preencher acesso demo** faz isso automaticamente.

A sessão é armazenada no aparelho com `AsyncStorage`.

---

## 4. Telas

Fluxo:

```text
Login
  ↓
Main Tabs
  ├── Início
  ├── Wiki
  │     └── Detalhes da personagem
  ├── Quiz
  │     ├── Fácil
  │     ├── Médio
  │     └── Difícil
  │            ↓
  │         Resultado
  └── Perfil / Logout
```

---

## 5. Onde aparecem os conteúdos pedidos

### Navigation

Arquivos:

```text
src/navigation/RootNavigator.js
src/navigation/MainTabs.js
```

### FlatList

Arquivos:

```text
src/screens/WikiScreen.js
src/screens/QuizLevelsScreen.js
```

Na Wiki existe uma `FlatList` principal das personagens e uma `FlatList` horizontal de filtros.

### Funções

Exemplos:

```text
src/utils/wiki.js
src/utils/quiz.js
src/context/AuthContext.js
src/screens/QuizScreen.js
```

Funções usadas:

- `filterCharacters()`;
- `calculatePercentage()`;
- `resultMessage()`;
- `login()`;
- `logout()`;
- `handleNext()`;
- `handleLogin()`.

---

## 6. Colocar no GitHub pelo terminal

Dentro da pasta do projeto:

```powershell
git init
git add .
git commit -m "feat: criar UmaWiki em React Native"
git branch -M main
```

### Opção A — com GitHub CLI

Faça login:

```powershell
gh auth login
```

Depois crie e envie o repositório:

```powershell
gh repo create umawiki-react-native --public --source=. --remote=origin --push
```

### Opção B — criando o repositório pelo site

Crie no GitHub um repositório vazio chamado:

```text
umawiki-react-native
```

Depois:

```powershell
git remote add origin https://github.com/SEU-USUARIO/umawiki-react-native.git
git push -u origin main
```

---

## 7. Estrutura

```text
UmaWiki_ReactNative/
├── .vscode/
│   ├── extensions.json
│   └── tasks.json
├── src/
│   ├── components/
│   │   ├── CharacterCard.js
│   │   └── PrimaryButton.js
│   ├── context/
│   │   └── AuthContext.js
│   ├── data/
│   │   ├── characters.js
│   │   └── quizzes.js
│   ├── navigation/
│   │   ├── MainTabs.js
│   │   └── RootNavigator.js
│   ├── screens/
│   │   ├── CharacterDetailScreen.js
│   │   ├── HomeScreen.js
│   │   ├── LoginScreen.js
│   │   ├── ProfileScreen.js
│   │   ├── QuizLevelsScreen.js
│   │   ├── QuizResultScreen.js
│   │   ├── QuizScreen.js
│   │   └── WikiScreen.js
│   ├── theme/
│   │   └── colors.js
│   └── utils/
│       ├── quiz.js
│       └── wiki.js
├── App.js
├── app.json
├── package.json
└── README.md
```

---

## 8. Observação sobre os dados

As fichas oficiais consultadas informam aniversário, altura, peso, CV e biografia, mas não apresentam uma idade numérica. Por isso o app mostra:

```text
Idade: Não divulgada oficialmente
```

As faixas em quilômetros e descrições de posição/estilo foram resumidas para fins didáticos do projeto e são identificadas dessa forma na tela de detalhes.

---

## 9. Próximas melhorias possíveis

Depois da versão acadêmica funcionar, você pode adicionar:

- favoritos;
- cadastro de usuário;
- banco Firebase/Supabase;
- ranking do quiz;
- histórico de pontuação;
- mais personagens;
- modo escuro;
- animações;
- cache local das imagens;
- API própria.
