import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
//super quiz
const niveis = [
  {
    id: "1",
    nivel: "facil",
    titulo: "Fácil",
    subtitulo: "Comece seu treinamento",
    descricao: "Perguntas mais básicas sobre as personagens.",
    cor: "#4EB96C",
    imagem:
      "https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/b83df291000248a193ca9e46a73ded56/specialweek_01.png",
  },
  {
    id: "2",
    nivel: "medio",
    titulo: "Médio",
    subtitulo: "Aumente o ritmo",
    descricao: "Perguntas sobre detalhes e características.",
    cor: "#E9A928",
    imagem:
      "https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/6bcecd8749a74a26a91c8882866d803f/tokaiteio_01.png",
  },
  {
    id: "3",
    nivel: "dificil",
    titulo: "Difícil",
    subtitulo: "Corrida final",
    descricao: "Perguntas para quem realmente estudou a wiki.",
    cor: "#A54BB5",
    imagem:
      "https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/a513a0e8049e46418b6ba9bffb26dcb7/goldship_01.png",
  },
];

export default function QuizMenu({ navigation }) {
  function abrirQuiz(nivel) {
    navigation.navigate("Quiz", { nivel });
  }

  function mostrarNivel({ item, index }) {
    return (
      <TouchableOpacity
        style={[styles.card, { backgroundColor: item.cor }]}
        onPress={() => abrirQuiz(item.nivel)}
      >
        <View style={styles.numero}>
          <Text style={styles.numeroTexto}>0{index + 1}</Text>
        </View>

        <View style={styles.textos}>
          <Text style={styles.tituloCard}>{item.titulo}</Text>
          <Text style={styles.subtituloCard}>{item.subtitulo}</Text>
          <Text style={styles.descricao}>{item.descricao}</Text>

          <View style={styles.infoPerguntas}>
            <Text style={styles.infoTexto}>5 perguntas</Text>
          </View>
        </View>

        <Image source={{ uri: item.imagem }} style={styles.personagem} resizeMode="contain" />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.pequeno}>QUIZ UMAWIKI</Text>
      <Text style={styles.titulo}>Escolha a dificuldade</Text>
      <Text style={styles.subtitulo}>
        São 5 perguntas em cada nível.
      </Text>

      <FlatList
        data={niveis}
        keyExtractor={(item) => item.id}
        renderItem={mostrarNivel}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F2FF",
    padding: 23,
  },
  pequeno: {
    color: "#7650E8",
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 2,
    marginTop: 7,
  },
  titulo: {
    color: "#302A3A",
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 7,
  },
  subtitulo: {
    color: "#746C7B",
    fontSize: 15,
    lineHeight: 21,
    marginTop: 6,
    marginBottom: 23,
  },
  card: {
    height: 190,
    borderRadius: 24,
    marginBottom: 17,
    padding: 20,
    overflow: "hidden",
    flexDirection: "row",
  },
  numero: {
    position: "absolute",
    right: 18,
    top: 10,
  },
  numeroTexto: {
    color: "rgba(255,255,255,0.25)",
    fontSize: 50,
    fontWeight: "bold",
  },
  textos: {
    flex: 1,
    zIndex: 2,
  },
  tituloCard: {
    color: "#FFFFFF",
    fontSize: 27,
    fontWeight: "bold",
  },
  subtituloCard: {
    color: "#FFFFFF",
    fontWeight: "bold",
    marginTop: 2,
  },
  descricao: {
    color: "#F5F5F5",
    width: "70%",
    lineHeight: 19,
    marginTop: 8,
  },
  infoPerguntas: {
    marginTop: 13,
    backgroundColor: "rgba(255,255,255,0.18)",
    borderRadius: 20,
    paddingHorizontal: 11,
    paddingVertical: 6,
    alignSelf: "flex-start",
  },
  infoTexto: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 12,
  },
  personagem: {
    width: 150,
    height: 180,
    position: "absolute",
    right: 3,
    bottom: -5,
  },
});