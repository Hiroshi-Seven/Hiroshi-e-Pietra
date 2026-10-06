import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

const SPECIAL_WEEK =
  "https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/b83df291000248a193ca9e46a73ded56/specialweek_01.png";

const TOKAI_TEIO =
  "https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/6bcecd8749a74a26a91c8882866d803f/tokaiteio_01.png";

const GOLD_SHIP =
  "https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/a513a0e8049e46418b6ba9bffb26dcb7/goldship_01.png";

export default function Home({ navigation }) {
  function abrirWiki() {
    navigation.navigate("Wiki");
  }

  function abrirQuiz() {
    navigation.navigate("QuizMenu");
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.hero}>
        <View style={styles.heroTexto}>
          <Text style={styles.pequeno}>UMAWIKI</Text>
          <Text style={styles.tituloHero}>Bem-vindo à{"\n"}UmaWiki!</Text>
          <Text style={styles.descricaoHero}>
            Conheça 30 personagens de Uma Musume, veja informações e faça um quiz.
          </Text>
        </View>

        <View style={styles.imagens}>
          <Image source={{ uri: SPECIAL_WEEK }} style={styles.personagemPrincipal} resizeMode="contain" />
          <Image source={{ uri: TOKAI_TEIO }} style={styles.personagemSecundaria} resizeMode="contain" />
        </View>
      </View>

      <Text style={styles.tituloSecao}>O que você quer fazer?</Text>

      <TouchableOpacity style={styles.cardWiki} onPress={abrirWiki}>
        <View style={styles.cardTexto}>
          <Text style={styles.cardTag}>WIKI</Text>
          <Text style={styles.cardTitulo}>Conhecer personagens</Text>
          <Text style={styles.cardDescricao}>
            Veja nome, idade, distância, quilômetros, posição e descrição.
          </Text>
          <Text style={styles.cardAbrir}>Abrir Wiki →</Text>
        </View>

        <Image source={{ uri: GOLD_SHIP }} style={styles.cardImagem} resizeMode="contain" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.cardQuiz} onPress={abrirQuiz}>
        <View>
          <Text style={styles.quizTag}>QUIZ</Text>
          <Text style={styles.quizTitulo}>Teste seus conhecimentos</Text>
          <Text style={styles.quizDescricao}>Níveis Fácil, Médio e Difícil</Text>
        </View>

        <Text style={styles.seta}>›</Text>
      </TouchableOpacity>

      <View style={styles.info}>
        <Text style={styles.infoTitulo}>Sobre o aplicativo</Text>
        <Text style={styles.infoTexto}>
          App feito em React Native com navegação, FlatList, funções e telas organizadas.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F6F2FF",
    padding: 22,
    paddingBottom: 40,
  },
  hero: {
    minHeight: 300,
    backgroundColor: "#7047F5",
    borderRadius: 28,
    overflow: "hidden",
    flexDirection: "row",
  },
  heroTexto: {
    flex: 1,
    padding: 25,
    justifyContent: "center",
    zIndex: 2,
  },
  pequeno: {
    color: "#DFD3FF",
    fontWeight: "bold",
    letterSpacing: 2,
  },
  tituloHero: {
    color: "#FFFFFF",
    fontSize: 34,
    lineHeight: 39,
    fontWeight: "bold",
    marginTop: 7,
  },
  descricaoHero: {
    color: "#EEE8FF",
    lineHeight: 20,
    marginTop: 11,
    maxWidth: 270,
  },
  imagens: {
    width: "45%",
  },
  personagemPrincipal: {
    position: "absolute",
    width: 180,
    height: 290,
    bottom: 0,
    right: 5,
  },
  personagemSecundaria: {
    position: "absolute",
    width: 145,
    height: 240,
    bottom: 0,
    right: -50,
    opacity: 0.88,
  },
  tituloSecao: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#312A3D",
    marginTop: 28,
    marginBottom: 14,
  },
  cardWiki: {
    minHeight: 210,
    backgroundColor: "#FFFFFF",
    borderRadius: 23,
    overflow: "hidden",
    flexDirection: "row",
    marginBottom: 15,
  },
  cardTexto: {
    flex: 1,
    padding: 22,
    zIndex: 2,
  },
  cardTag: {
    color: "#7047F5",
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 2,
  },
  cardTitulo: {
    color: "#312A3D",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 8,
  },
  cardDescricao: {
    color: "#746C7B",
    lineHeight: 20,
    marginTop: 8,
  },
  cardAbrir: {
    color: "#7047F5",
    fontWeight: "bold",
    marginTop: 15,
  },
  cardImagem: {
    width: 165,
    height: 210,
    alignSelf: "flex-end",
  },
  cardQuiz: {
    backgroundColor: "#4EB96C",
    borderRadius: 22,
    padding: 22,
    minHeight: 130,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  quizTag: {
    color: "#DFF7E5",
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 2,
  },
  quizTitulo: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "bold",
    marginTop: 6,
  },
  quizDescricao: {
    color: "#EBFFF0",
    marginTop: 5,
  },
  seta: {
    color: "#FFFFFF",
    fontSize: 46,
  },
  info: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    marginTop: 16,
  },
  infoTitulo: {
    color: "#312A3D",
    fontWeight: "bold",
    fontSize: 18,
  },
  infoTexto: {
    color: "#746C7B",
    lineHeight: 21,
    marginTop: 7,
  },
});