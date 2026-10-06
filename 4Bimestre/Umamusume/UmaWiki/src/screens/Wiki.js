import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { personagens } from "../data/Personagens";

export default function Wiki({ navigation }) {
  const [pesquisa, setPesquisa] = useState("");

  function filtrarPersonagens() {
    const texto = pesquisa.toLowerCase().trim();

    if (texto === "") {
      return personagens;
    }

    return personagens.filter((personagem) =>
      personagem.nome
        .toLowerCase()
        .includes(texto)
    );
  }

  function abrirDetalhes(personagem) {
    navigation.navigate("Detalhes", {
      personagem: personagem,
    });
  }

  function mostrarPersonagem({ item }) {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => abrirDetalhes(item)}
      >
        <View style={styles.areaImagem}>
          <Image
            source={{ uri: item.imagem }}
            style={styles.imagem}
            resizeMode="contain"
          />
        </View>

        <View style={styles.informacoes}>
          <Text style={styles.nome}>
            {item.nome}
          </Text>

          <Text style={styles.nomeJapones}>
            {item.nomeJapones}
          </Text>

          <Text style={styles.distancia}>
            🏁 {item.distancia}
          </Text>

          <Text style={styles.info}>
            📏 {item.altura}
          </Text>

          <Text style={styles.info}>
            🛣️ {item.quilometros}
          </Text>

          <Text style={styles.info}>
            🏇 {item.posicao}
          </Text>

          <Text style={styles.verMais}>
            Ver ficha completa →
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.pequeno}>
        WIKI
      </Text>

      <Text style={styles.titulo}>
        Personagens
      </Text>

      <TextInput
        style={styles.pesquisa}
        placeholder="Pesquisar personagem..."
        value={pesquisa}
        onChangeText={setPesquisa}
      />

      <FlatList
        data={filtrarPersonagens()}
        keyExtractor={(item) => item.id}
        renderItem={mostrarPersonagem}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text style={styles.naoEncontrado}>
            Nenhuma personagem encontrada.
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F2FF",
    padding: 20,
  },

  pequeno: {
    color: "#7047F5",
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 2,
    marginTop: 5,
  },

  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#302A3A",
    marginTop: 5,
    marginBottom: 18,
  },

  pesquisa: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DDD7E8",
    borderRadius: 14,
    padding: 14,
    marginBottom: 18,
    fontSize: 15,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    marginBottom: 15,
    flexDirection: "row",
    overflow: "hidden",
    minHeight: 185,
  },

  areaImagem: {
    width: 135,
    backgroundColor: "#EEE8FF",
    justifyContent: "center",
    alignItems: "center",
  },

  imagem: {
    width: "100%",
    height: 180,
  },

  informacoes: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
  },

  nome: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#302A3A",
  },

  nomeJapones: {
    color: "#81788B",
    marginTop: 2,
    marginBottom: 9,
  },

  distancia: {
    color: "#7047F5",
    fontWeight: "bold",
    marginBottom: 5,
  },

  info: {
    color: "#5C5564",
    marginBottom: 4,
  },

  verMais: {
    color: "#7047F5",
    fontWeight: "bold",
    marginTop: 9,
  },

  naoEncontrado: {
    textAlign: "center",
    color: "#777",
    marginTop: 40,
  },
});