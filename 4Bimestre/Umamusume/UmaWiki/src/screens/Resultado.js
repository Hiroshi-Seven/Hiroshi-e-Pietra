import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {
  calcularPorcentagem,
  mensagemResultado,
  formatarNivel,
} from "../Funcoes";

export default function Resultado({ route, navigation }) {
  const { pontos, total, nivel } = route.params;

  const porcentagem = calcularPorcentagem(pontos, total);
  const mensagem = mensagemResultado(porcentagem);

  function obterPremio() {
    if (porcentagem === 100) return "👑";
    if (porcentagem >= 80) return "🏆";
    if (porcentagem >= 60) return "🥈";
    return "📚";
  }

  function tentarNovamente() {
    navigation.replace("Quiz", { nivel });
  }

  function escolherNivel() {
    navigation.navigate("QuizMenu");
  }

  function abrirWiki() {
    navigation.navigate("Wiki");
  }

  return (
    <View style={styles.container}>
      <View style={styles.circulo}>
        <Text style={styles.premio}>{obterPremio()}</Text>
      </View>

      <Text style={styles.finalizado}>QUIZ FINALIZADO</Text>
      <Text style={styles.titulo}>Resultado</Text>
      <Text style={styles.nivel}>Nível {formatarNivel(nivel)}</Text>

      <View style={styles.cardResultado}>
        <View>
          <Text style={styles.rotulo}>ACERTOS</Text>
          <Text style={styles.placar}>
            {pontos}
            <Text style={styles.total}>/{total}</Text>
          </Text>
        </View>

        <View style={styles.divisor} />

        <View>
          <Text style={styles.rotulo}>DESEMPENHO</Text>
          <Text style={styles.porcentagem}>{porcentagem}%</Text>
        </View>
      </View>

      <View style={styles.barraFundo}>
        <View style={[styles.barra, { width: `${porcentagem}%` }]} />
      </View>

      <Text style={styles.mensagem}>{mensagem}</Text>

      <TouchableOpacity style={styles.botaoPrincipal} onPress={tentarNovamente}>
        <Text style={styles.botaoPrincipalTexto}>Tentar novamente</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoSecundario} onPress={escolherNivel}>
        <Text style={styles.botaoSecundarioTexto}>Escolher outro nível</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={abrirWiki} style={styles.link}>
        <Text style={styles.linkTexto}>Voltar para a Wiki</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F2FF",
    alignItems: "center",
    justifyContent: "center",
    padding: 27,
  },
  circulo: {
    width: 105,
    height: 105,
    borderRadius: 53,
    backgroundColor: "#E9E0FF",
    justifyContent: "center",
    alignItems: "center",
  },
  premio: {
    fontSize: 52,
  },
  finalizado: {
    color: "#7955E8",
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 2,
    marginTop: 20,
  },
  titulo: {
    color: "#302A3A",
    fontSize: 34,
    fontWeight: "bold",
    marginTop: 5,
  },
  nivel: {
    color: "#817A87",
    marginTop: 3,
  },
  cardResultado: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 23,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 25,
  },
  divisor: {
    width: 1,
    height: 60,
    backgroundColor: "#E7E2EC",
  },
  rotulo: {
    color: "#928A99",
    fontSize: 11,
    fontWeight: "bold",
    letterSpacing: 1,
    textAlign: "center",
  },
  placar: {
    color: "#7047F5",
    fontSize: 38,
    fontWeight: "bold",
    textAlign: "center",
  },
  total: {
    color: "#AAA3AE",
    fontSize: 22,
  },
  porcentagem: {
    color: "#4EB96C",
    fontSize: 38,
    fontWeight: "bold",
    textAlign: "center",
  },
  barraFundo: {
    width: "100%",
    height: 10,
    backgroundColor: "#E0DBE5",
    borderRadius: 20,
    overflow: "hidden",
    marginTop: 20,
  },
  barra: {
    height: "100%",
    backgroundColor: "#7047F5",
    borderRadius: 20,
  },
  mensagem: {
    color: "#4B4453",
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 23,
  },
  botaoPrincipal: {
    width: "100%",
    backgroundColor: "#7047F5",
    borderRadius: 14,
    padding: 16,
  },
  botaoPrincipalTexto: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
  },
  botaoSecundario: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 16,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#D9D1E5",
  },
  botaoSecundarioTexto: {
    color: "#7047F5",
    textAlign: "center",
    fontWeight: "bold",
  },
  link: {
    marginTop: 16,
  },
  linkTexto: {
    color: "#817A87",
    fontWeight: "bold",
  },
});