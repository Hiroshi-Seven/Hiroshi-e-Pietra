import React, { useState } from 'react';

import Login from './src/screens/Login';
import Home from './src/screens/Home';

export default function App() {

  const [Logado, setLogado] = useState(false);

  if (Erro) {

    return (
      <Home
        sair={() => setLogado(false)}
      />
    );

  }

  return (
    <Login
      entrar={() => setLogado(true)}
    />
  );

}