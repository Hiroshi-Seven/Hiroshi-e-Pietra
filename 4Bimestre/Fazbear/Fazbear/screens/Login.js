
import { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, Platform, Alert
} from 'react-native';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';

function aviso(mensagem) {
  if (Platform.OS === 'web') {
    window.alert(mensagem);
  } else {
    Alert.alert('Fazbear Arquivos', mensagem);
  }
}

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [carregando, setCarregando] = useState(false);

  async function entrar() {
    if (!email.trim() || !senha) {
      aviso('Preencha o e-mail e a senha.');
      return;
    }

    setCarregando(true);

    try {
      await signInWithEmailAndPassword(
        auth,
        email.trim(),
        senha
      );
      // O aplicativo abre a Home automaticamente.
    } catch (erro) {
      aviso('Não foi possível entrar. Confira seu e-mail e senha.');
    } finally {
      setCarregando(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.icone}>🐻</Text>

      <Text style={styles.titulo}>
        FAZBEAR ARQUIVOS
      </Text>

      <Text style={styles.subtitulo}>
        Sistema de animatrônicos
      </Text>

      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        placeholderTextColor="#999"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={entrar}
        disabled={carregando}
      >
        <Text style={styles.textoBotao}>
          {carregando ? 'Entrando...' : 'ENTRAR'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Cadastro')}
      >
        <Text style={styles.link}>
          Não possui conta? Cadastre-se
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717',
    justifyContent: 'center',
    padding: 25
  },
  icone: {
    fontSize: 65,
    textAlign: 'center'
  },
  titulo: {
    fontSize: 29,
    color: '#e63946',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subtitulo: {
    color: '#bbb',
    textAlign: 'center',
    marginBottom: 35
  },
  label: {
    color: 'white',
    marginBottom: 8
  },
  input: {
    backgroundColor: '#292929',
    color: 'white',
    borderRadius: 8,
    padding: 14,
    marginBottom: 18
  },
  botao: {
    backgroundColor: '#b42530',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold'
  },
  link: {
    color: '#ddd',
    textAlign: 'center',
    marginTop: 25
  }
});
