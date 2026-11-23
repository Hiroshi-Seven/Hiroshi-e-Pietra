
import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
  Keyboard,
  StatusBar,
} from 'react-native';

import { consultarPokemon } from './rsc/funcoes';
import styles from './rsc/estilo';

export default function App() {
  const [pesquisa, setPesquisa] = useState('');
  const [pokemon, setPokemon] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [mensagem, setMensagem] = useState('');

  async function pesquisar() {
    if (carregando) return;

    Keyboard.dismiss();
    setMensagem('');
    setPokemon(null);
    setCarregando(true);

    try {
      const dados = await consultarPokemon(pesquisa);
      setPokemon(dados);
    } catch (erro) {
      setMensagem(erro.message || 'Erro ao pesquisar Pokémon.');
    } finally {
      setCarregando(false);
    }
  }

  function limpar() {
    setPesquisa('');
    setPokemon(null);
    setMensagem('');
    Keyboard.dismiss();
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        contentContainerStyle={styles.conteudo}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.header}>
          <Text style={styles.logo}>◉</Text>
          <Text style={styles.titulo}>PokéConsulta</Text>
          <Text style={styles.subtitulo}>
            Descubra informações sobre seus Pokémon favoritos!
          </Text>
        </View>

        <View style={styles.painel}>
          <Text style={styles.label}>
            Nome ou número do Pokémon
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Ex: pikachu, charizard ou 25"
            placeholderTextColor="#94A3B8"
            value={pesquisa}
            onChangeText={setPesquisa}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="search"
            onSubmitEditing={pesquisar}
            editable={!carregando}
          />

          <TouchableOpacity
            style={[
              styles.botao,
              carregando && styles.botaoDesabilitado,
            ]}
            onPress={pesquisar}
            disabled={carregando}
          >
            {carregando ? (
              <ActivityIndicator color="#FFFFFF" />
            ) : (
              <Text style={styles.textoBotao}>
                🔍 Pesquisar Pokémon
              </Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botaoLimpar}
            onPress={limpar}
          >
            <Text style={styles.textoBotaoLimpar}>
              Limpar pesquisa
            </Text>
          </TouchableOpacity>
        </View>

        {mensagem !== '' && (
          <View style={styles.caixaErro}>
            <Text style={styles.textoErro}>
              {mensagem}
            </Text>
          </View>
        )}

        {pokemon && (
          <View style={styles.card}>
            <View style={styles.cardTopo}>
              <Text style={styles.numero}>
                #{String(pokemon.id).padStart(3, '0')}
              </Text>

              <Text style={styles.nomePokemon}>
                {pokemon.nome}
              </Text>

              {pokemon.imagem ? (
                <Image
                  source={{ uri: pokemon.imagem }}
                  style={styles.imagem}
                  resizeMode="contain"
                />
              ) : (
                <Text style={styles.semImagem}>
                  Imagem indisponível
                </Text>
              )}

              <View style={styles.tiposContainer}>
                {pokemon.tipos.map((tipo) => (
                  <View style={styles.tipo} key={tipo}>
                    <Text style={styles.tipoTexto}>
                      {tipo}
                    </Text>
                  </View>
                ))}
              </View>
            </View>

            <Text style={styles.secaoTitulo}>
              📋 Informações gerais
            </Text>

            <View style={styles.linha}>
              <Text style={styles.infoLabel}>Altura</Text>
              <Text style={styles.infoValor}>
                {pokemon.altura} m
              </Text>
            </View>

            <View style={styles.linha}>
              <Text style={styles.infoLabel}>Peso</Text>
              <Text style={styles.infoValor}>
                {pokemon.peso} kg
              </Text>
            </View>

            <Text style={styles.secaoTitulo}>
              ✨ Habilidades
            </Text>

            {pokemon.habilidades.map((habilidade) => (
              <Text
                style={styles.habilidade}
                key={habilidade}
              >
                • {habilidade}
              </Text>
            ))}

            <Text style={styles.secaoTitulo}>
              📊 Atributos
            </Text>

            {pokemon.atributos.map((atributo) => (
              <View
                style={styles.atributoLinha}
                key={atributo.nome}
              >
                <Text style={styles.atributoNome}>
                  {atributo.nome}
                </Text>

                <Text style={styles.atributoValor}>
                  {atributo.valor}
                </Text>
              </View>
            ))}
          </View>
        )}

        {!pokemon && !carregando && mensagem === '' && (
          <View style={styles.inicial}>
            <Text style={styles.inicialIcone}>⚡</Text>
            <Text style={styles.inicialTitulo}>
              Pronto para explorar?
            </Text>
            <Text style={styles.inicialTexto}>
              Digite o nome ou número de um Pokémon
              para começar sua consulta.
            </Text>
          </View>
        )}

        <Text style={styles.rodape}>
          Desenvolvido com React Native e PokéAPI
        </Text>
      </ScrollView>
    </View>
  );
}
