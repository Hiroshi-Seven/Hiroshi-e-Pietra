import React from "react";

import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";

export default function Detalhes({ route }) {
  const { personagem } = route.params;

  function mostrarInformacao(titulo, valor) {
    return (
      <View style={styles.linha}>
        <Text style={styles.rotulo}>
          {titulo}
        </Text>

        <Text style={styles.valor}>
          {valor}
        </Text>
      </View>
    );
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
    >
      <View style={styles.topo}>
        <Image
          source={{ uri: personagem.imagem }}
          style={styles.imagem}
          resizeMode="contain"
        />

        <Text style={styles.nome}>
          {personagem.nome}
        </Text>

        <Text style={styles.nomeJapones}>
          {personagem.nomeJapones}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.tituloCard}>
          Ficha da personagem
        </Text>

        {mostrarInformacao(
          "Idade",
          personagem.idade
        )}

        {mostrarInformacao(
          "Aniversário",
          personagem.aniversario
        )}

        {mostrarInformacao(
          "Altura",
          personagem.altura
        )}

        {mostrarInformacao(
          "Distância",
          personagem.distancia
        )}

        {mostrarInformacao(
          "Quilômetros",
          personagem.quilometros
        )}

        {mostrarInformacao(
          "Posição",
          personagem.posicao
        )}
      </View>

      <View style={styles.card}>
        <Text style={styles.tituloCard}>
          Sobre
        </Text>

        <Text style={styles.descricao}>
          {personagem.descricao}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F6F2FF",
    padding: 20,
    paddingBottom: 40,
  },

  topo: {
    backgroundColor: "#7047F5",
    borderRadius: 25,
    padding: 20,
    alignItems: "center",
    marginBottom: 16,
  },

  imagem: {
    width: 240,
    height: 330,
  },

  nome: {
    color: "#FFFFFF",
    fontSize: 29,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 8,
  },

  nomeJapones: {
    color: "#E3D9FF",
    marginTop: 4,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    marginBottom: 14,
  },

  tituloCard: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#302A3A",
    marginBottom: 10,
  },

  linha: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#EFEAF4",
  },

  rotulo: {
    color: "#8B8392",
    fontSize: 12,
  },

  valor: {
    color: "#413A49",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 3,
  },

  descricao: {
    color: "#554E60",
    fontSize: 15,
    lineHeight: 23,
  },
});