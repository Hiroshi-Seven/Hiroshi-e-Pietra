import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { getQuestoesPorNivel, formatarNivel } from "../Funcoes";

export default function Quiz({ route, navigation }) {
  const { nivel } = route.params;
  const questoes = getQuestoesPorNivel(nivel);

  const [indiceAtual, setIndiceAtual] = useState(0);
  const [pontos, setPontos] = useState(0);

  const questaoAtual = questoes[indiceAtual];

  function responder(indiceResposta) {
    let novaPontuacao = pontos;

    if (indiceResposta === questaoAtual.correta) {
      novaPontuacao += 1;
      setPontos(novaPontuacao);
    }

    const proximoIndice = indiceAtual + 1;

    if (proximoIndice < questoes.length) {
      setIndiceAtual(proximoIndice);
    } else {
      navigation.replace("Resultado", {
        pontos: novaPontuacao,
        total: questoes.length,
        nivel,
      });
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.pequeno}>QUIZ</Text>
      <Text style={styles.titulo}>Nível {formatarNivel(nivel)}</Text>

      <View style={styles.progressoBox}>
        <Text style={styles.progressoTexto}>
          Pergunta {indiceAtual + 1} de {questoes.length}
        </Text>
      </View>

      <View style={styles.cardPergunta}>
        <Text style={styles.pergunta}>{questaoAtual.pergunta}</Text>
      </View>

      {questaoAtual.alternativas.map((alternativa, index) => (
        <TouchableOpacity
          key={index}
          style={styles.botaoAlternativa}
          onPress={() => responder(index)}
        >
          <Text style={styles.textoAlternativa}>{alternativa}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F6F2FF",
    padding: 22,
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
    marginTop: 6,
  },
  progressoBox: {
    backgroundColor: "#E9E0FF",
    borderRadius: 14,
    padding: 12,
    marginTop: 16,
    marginBottom: 16,
  },
  progressoTexto: {
    color: "#7047F5",
    fontWeight: "bold",
    textAlign: "center",
  },
  cardPergunta: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
  },
  pergunta: {
    color: "#312A3D",
    fontSize: 22,
    fontWeight: "bold",
    lineHeight: 30,
  },
  botaoAlternativa: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#DDD7E8",
  },
  textoAlternativa: {
    color: "#4F4858",
    fontSize: 16,
    fontWeight: "600",
  },
});