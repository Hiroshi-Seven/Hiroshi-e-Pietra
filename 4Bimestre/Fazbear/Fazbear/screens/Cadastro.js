
import { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, ScrollView, Alert, Platform
} from 'react-native';

import {
  createUserWithEmailAndPassword,
  signOut
} from 'firebase/auth';

import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase/firebase';

function aviso(mensagem) {
  if (Platform.OS === 'web') {
    window.alert(mensagem);
  } else {
    Alert.alert('Cadastro', mensagem);
  }
}

export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [carregando, setCarregando] = useState(false);

  async function cadastrar() {
    if (!nome.trim() || !email.trim() ||
        !senha || !confirmarSenha) {
      aviso('Preencha todos os campos.');
      return;
    }

    if (senha !== confirmarSenha) {
      aviso('As senhas não são iguais.');
      return;
    }

    if (senha.length < 6) {
      aviso('A senha precisa ter pelo menos 6 caracteres.');
      return;
    }

    setCarregando(true);

    try {
      const resultado = await createUserWithEmailAndPassword(
        auth,
        email.trim(),
        senha
      );

      const uid = resultado.user.uid;

      await setDoc(doc(db, 'usuarios', uid), {
        nome: nome.trim(),
        email: resultado.user.email
      });

      aviso('Cadastro realizado com sucesso!');
      // O usuário já fica logado após o cadastro.
    } catch (erro) {
      if (erro.code === 'auth/email-already-in-use') {
        aviso('Este e-mail já está cadastrado.');
      } else if (erro.code === 'auth/invalid-email') {
        aviso('Digite um e-mail válido.');
      } else if (erro.code === 'auth/weak-password') {
        aviso('Escolha uma senha mais forte.');
      } else {
        aviso('Erro no cadastro: ' + erro.code);
      }
    } finally {
      setCarregando(false);
    }
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.conteudo}
    >
      <Text style={styles.titulo}>CRIAR CONTA</Text>
      <Text style={styles.subtitulo}>
        Faça parte dos arquivos Fazbear 🐻
      </Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        placeholder="Seu nome"
        placeholderTextColor="#999"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.input}
        placeholder="Seu e-mail"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Mínimo de 6 caracteres"
        placeholderTextColor="#999"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <Text style={styles.label}>Confirmar senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Repita a senha"
        placeholderTextColor="#999"
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={cadastrar}
        disabled={carregando}
      >
        <Text style={styles.textoBotao}>
          {carregando ? 'Cadastrando...' : 'CADASTRAR'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.link}>
          Já possui uma conta? Entrar
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717'
  },
  conteudo: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 25
  },
  titulo: {
    color: '#e63946',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subtitulo: {
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 30
  },
  label: {
    color: 'white',
    marginBottom: 7
  },
  input: {
    backgroundColor: '#292929',
    color: 'white',
    padding: 14,
    borderRadius: 8,
    marginBottom: 17
  },
  botao: {
    backgroundColor: '#b42530',
    padding: 16,
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 10
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold'
  },
  link: {
    color: '#ddd',
    textAlign: 'center',
    marginTop: 22
  }
});
