
import React, { useEffect, useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
  Platform,
  ActivityIndicator
} from 'react-native';

import { signOut } from 'firebase/auth';

import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where
} from 'firebase/firestore';

import { auth, db } from '../firebase/firebase';

// Mostra mensagens no navegador e no celular
function mostrarMensagem(titulo, mensagem) {
  if (Platform.OS === 'web') {
    window.alert(titulo + '\n' + mensagem);
  } else {
    Alert.alert(titulo, mensagem);
  }
}

export default function Home() {

  // Informações do formulário
  const [nome, setNome] = useState('');
  const [jogo, setJogo] = useState('');
  const [comportamento, setComportamento] = useState('');
  const [descricao, setDescricao] = useState('');

  // Lista de animatrônicos
  const [animatronics, setAnimatronics] = useState([]);

  // Controle de carregamento
  const [carregando, setCarregando] = useState(true);
  const [salvando, setSalvando] = useState(false);

  // Usuário que está logado
  const usuario = auth.currentUser;

  // Busca os animatrônicos do Firebase
  useEffect(() => {

    if (!usuario) {
      setCarregando(false);
      return;
    }

    const referencia = collection(db, 'animatronics');

    const consulta = query(
      referencia,
      where('usuarioId', '==', usuario.uid)
    );

    const cancelar = onSnapshot(
      consulta,

      (resultado) => {

        const lista = resultado.docs.map((documento) => ({
          id: documento.id,
          ...documento.data()
        }));

        console.log('Animatrônicos encontrados:', lista);

        setAnimatronics(lista);
        setCarregando(false);
      },

      (erro) => {
        console.error('Erro ao carregar animatrônicos:', erro);

        setCarregando(false);

        mostrarMensagem(
          'Erro no Firebase',
          erro.message
        );
      }
    );

    return () => cancelar();

  }, [usuario?.uid]);

  // Salvar novo animatrônico
  async function salvarAnimatronic() {

    if (
      !nome.trim() ||
      !jogo.trim() ||
      !comportamento.trim() ||
      !descricao.trim()
    ) {
      mostrarMensagem(
        'Atenção',
        'Preencha todos os campos.'
      );
      return;
    }

    const usuarioAtual = auth.currentUser;

    if (!usuarioAtual) {
      mostrarMensagem(
        'Erro',
        'Você precisa estar logado.'
      );
      return;
    }

    setSalvando(true);

    try {

      await addDoc(
        collection(db, 'animatronics'),
        {
          nome: nome.trim(),
          jogo: jogo.trim(),
          comportamento: comportamento.trim(),
          descricao: descricao.trim(),
          usuarioId: usuarioAtual.uid
        }
      );

      // Limpa os campos
      setNome('');
      setJogo('');
      setComportamento('');
      setDescricao('');

      mostrarMensagem(
        'Sucesso',
        'Animatrônico cadastrado com sucesso!'
      );

    } catch (erro) {

      console.error('Erro ao salvar:', erro);

      mostrarMensagem(
        'Erro ao salvar',
        erro.message
      );

    } finally {
      setSalvando(false);
    }
  }

  // Excluir animatrônico
  async function excluirAnimatronic(id) {

    async function confirmarExclusao() {
      try {

        await deleteDoc(
          doc(db, 'animatronics', id)
        );

        mostrarMensagem(
          'Sucesso',
          'Animatrônico excluído!'
        );

      } catch (erro) {

        mostrarMensagem(
          'Erro ao excluir',
          erro.message
        );
      }
    }

    if (Platform.OS === 'web') {

      const confirmou = window.confirm(
        'Deseja excluir este animatrônico?'
      );

      if (confirmou) {
        await confirmarExclusao();
      }

    } else {

      Alert.alert(
        'Excluir animatrônico',
        'Deseja realmente excluir?',
        [
          {
            text: 'Cancelar',
            style: 'cancel'
          },
          {
            text: 'Excluir',
            onPress: confirmarExclusao
          }
        ]
      );
    }
  }

  // Sair do aplicativo
  async function sairDaConta() {

    try {
      await signOut(auth);
    } catch (erro) {
      mostrarMensagem(
        'Erro',
        'Não foi possível sair da conta.'
      );
    }
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.conteudo}
    >

      <Text style={styles.titulo}>
        🐻 FAZBEAR ARQUIVOS
      </Text>

      <Text style={styles.subtitulo}>
        Cadastro de animatrônicos de FNAF
      </Text>

      <Text style={styles.secao}>
        Novo animatrônico
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do animatrônico"
        placeholderTextColor="#999"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Jogo (Ex: FNAF 1)"
        placeholderTextColor="#999"
        value={jogo}
        onChangeText={setJogo}
      />

      <TextInput
        style={styles.input}
        placeholder="Comportamento"
        placeholderTextColor="#999"
        value={comportamento}
        onChangeText={setComportamento}
      />

      <TextInput
        style={[styles.input, styles.descricao]}
        placeholder="Descrição do animatrônico"
        placeholderTextColor="#999"
        value={descricao}
        onChangeText={setDescricao}
        multiline
      />

      <TouchableOpacity
        style={styles.botaoSalvar}
        onPress={salvarAnimatronic}
        disabled={salvando}
      >

        <Text style={styles.textoBotao}>
          {salvando
            ? 'SALVANDO...'
            : 'SALVAR ANIMATRÔNICO'}
        </Text>

      </TouchableOpacity>

      <Text style={styles.secao}>
        Animatrônicos cadastrados
      </Text>

      {carregando ? (

        <ActivityIndicator
          size="large"
          color="#e63946"
        />

      ) : animatronics.length === 0 ? (

        <Text style={styles.textoVazio}>
          Nenhum animatrônico cadastrado ainda.
        </Text>

      ) : (

        animatronics.map((item) => (

          <View
            key={item.id}
            style={styles.card}
          >

            <Text style={styles.nomeAnimatronic}>
              {item.nome}
            </Text>

            <Text style={styles.textoCard}>
              Jogo: {item.jogo}
            </Text>

            <Text style={styles.textoCard}>
              Comportamento: {item.comportamento}
            </Text>

            <Text style={styles.textoCard}>
              Descrição: {item.descricao}
            </Text>

            <TouchableOpacity
              style={styles.botaoExcluir}
              onPress={() => excluirAnimatronic(item.id)}
            >

              <Text style={styles.textoBotao}>
                EXCLUIR
              </Text>

            </TouchableOpacity>

          </View>
        ))
      )}

      <TouchableOpacity
        style={styles.botaoSair}
        onPress={sairDaConta}
      >

        <Text style={styles.textoBotao}>
          SAIR DA CONTA
        </Text>

      </TouchableOpacity>

    </ScrollView>
  );
}

// Estilos do aplicativo
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#171717'
  },

  conteudo: {
    padding: 25,
    paddingBottom: 50
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#e63946',
    textAlign: 'center',
    marginTop: 20
  },

  subtitulo: {
    color: '#ddd',
    textAlign: 'center',
    marginBottom: 40
  },

  secao: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 18
  },

  input: {
    backgroundColor: '#292929',
    color: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 14
  },

  descricao: {
    height: 100,
    textAlignVertical: 'top'
  },

  botaoSalvar: {
    backgroundColor: '#b42530',
    padding: 18,
    borderRadius: 8,
    alignItems: 'center'
  },

  textoBotao: {
    color: 'white',
    fontWeight: 'bold'
  },

  textoVazio: {
    color: '#bbb',
    marginBottom: 25
  },

  card: {
    backgroundColor: '#292929',
    padding: 18,
    borderRadius: 10,
    marginBottom: 15
  },

  nomeAnimatronic: {
    color: '#e63946',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10
  },

  textoCard: {
    color: '#eee',
    marginBottom: 8
  },

  botaoExcluir: {
    backgroundColor: '#852b35',
    padding: 12,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 12
  },

  botaoSair: {
    backgroundColor: '#444',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30
  }

});
