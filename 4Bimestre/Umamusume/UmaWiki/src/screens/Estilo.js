import {
  StyleSheet,
} from "react-native";

const styles =
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:
        "#F5F1FF",
      padding: 20,
    },

    containerCentral: {
      flex: 1,
      backgroundColor:
        "#F5F1FF",
      padding: 25,
      alignItems: "center",
    },

    containerLogin: {
      flex: 1,
      backgroundColor:
        "#F5F1FF",
      justifyContent:
        "center",
      padding: 30,
    },

    logo: {
      fontSize: 70,
      textAlign: "center",
    },

    tituloLogin: {
      fontSize: 38,
      fontWeight: "bold",
      textAlign: "center",
      color: "#7B4DFF",
    },

    titulo: {
      fontSize: 28,
      fontWeight: "bold",
      color: "#333333",
      marginTop: 15,
      marginBottom: 10,
    },

    subtitulo: {
      fontSize: 15,
      color: "#777777",
      textAlign: "center",
      marginBottom: 25,
    },

    texto: {
      fontSize: 16,
      color: "#555555",
      textAlign: "center",
      lineHeight: 23,
      marginBottom: 20,
    },

    iconeGrande: {
      fontSize: 75,
      marginTop: 25,
    },

    input: {
      backgroundColor:
        "#FFFFFF",
      borderWidth: 1,
      borderColor: "#DDDDDD",
      borderRadius: 12,
      padding: 15,
      marginBottom: 15,
    },

    botao: {
      width: "100%",
      backgroundColor:
        "#7B4DFF",
      padding: 16,
      borderRadius: 12,
      marginBottom: 12,
    },

    botaoVerde: {
      width: "100%",
      backgroundColor:
        "#50B969",
      padding: 16,
      borderRadius: 12,
      marginBottom: 12,
    },

    textoBotao: {
      color: "#FFFFFF",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 16,
    },

    loginTeste: {
      textAlign: "center",
      color: "#777777",
      marginTop: 25,
      lineHeight: 22,
    },

    cardInfo: {
      width: "100%",
      backgroundColor:
        "#FFFFFF",
      borderRadius: 15,
      padding: 20,
      marginTop: 20,
    },

    cardTitulo: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
      color: "#333333",
    },

    itemInfo: {
      fontSize: 15,
      marginBottom: 5,
      color: "#555555",
    },

    search: {
      backgroundColor:
        "#FFFFFF",
      padding: 14,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: "#DDDDDD",
      marginBottom: 15,
    },

    cardPersonagem: {
      backgroundColor:
        "#FFFFFF",
      borderRadius: 15,
      flexDirection: "row",
      marginBottom: 15,
      overflow: "hidden",
      elevation: 3,
    },

    imagemCard: {
      width: 120,
      height: 175,
      backgroundColor:
        "#ECE5FF",
    },

    infoCard: {
      flex: 1,
      padding: 15,
      justifyContent:
        "center",
    },

    nomePersonagem: {
      fontSize: 19,
      fontWeight: "bold",
      color: "#333333",
    },

    nomeJapones: {
      color: "#777777",
      marginBottom: 10,
    },

    textoDestaque: {
      color: "#7B4DFF",
      fontWeight: "bold",
      marginBottom: 5,
    },

    textoPequeno: {
      color: "#555555",
      fontSize: 13,
      marginBottom: 4,
    },

    vazio: {
      color: "#777777",
      textAlign: "center",
      marginTop: 50,
      fontSize: 16,
    },

    scroll: {
      flex: 1,
      backgroundColor:
        "#F5F1FF",
      padding: 20,
    },

    imagemArea: {
      height: 350,
      backgroundColor:
        "#ECE5FF",
      borderRadius: 20,
      overflow: "hidden",
    },

    imagemDetalhe: {
      width: "100%",
      height: "100%",
    },

    tituloDetalhe: {
      fontSize: 30,
      fontWeight: "bold",
      color: "#333333",
      marginTop: 20,
    },

    nomeJaponesDetalhe: {
      color: "#7B4DFF",
      fontSize: 17,
      marginTop: 3,
    },

    descricao: {
      color: "#555555",
      fontSize: 15,
      lineHeight: 23,
      marginVertical: 20,
    },

    ficha: {
      backgroundColor:
        "#FFFFFF",
      borderRadius: 15,
      marginBottom: 50,
      overflow: "hidden",
    },

    linhaInfo: {
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor:
        "#EEEEEE",
    },

    rotuloInfo: {
      color: "#777777",
      fontSize: 13,
    },

    valorInfo: {
      color: "#333333",
      fontSize: 16,
      fontWeight: "bold",
      marginTop: 4,
    },

    nivelCard: {
      padding: 20,
      borderRadius: 16,
      marginBottom: 15,
      flexDirection: "row",
      alignItems: "center",
    },

    nivelFacil: {
      backgroundColor:
        "#50B969",
    },

    nivelMedio: {
      backgroundColor:
        "#E0A82E",
    },

    nivelDificil: {
      backgroundColor:
        "#A54DB4",
    },

    nivelEmoji: {
      fontSize: 35,
      marginRight: 15,
    },

    nivelTitulo: {
      color: "#FFFFFF",
      fontWeight: "bold",
      fontSize: 20,
    },

    nivelDescricao: {
      color: "#FFFFFF",
      marginTop: 4,
    },

    progressoTexto: {
      color: "#7B4DFF",
      fontWeight: "bold",
      marginBottom: 5,
    },

    barraFundo: {
      width: "100%",
      height: 8,
      backgroundColor:
        "#DDDDDD",
      borderRadius: 10,
      marginTop: 10,
      overflow: "hidden",
    },

    barraProgresso: {
      height: 8,
      backgroundColor:
        "#7B4DFF",
    },

    pergunta: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#333333",
      marginVertical: 30,
    },

    opcao: {
      backgroundColor:
        "#FFFFFF",
      padding: 17,
      borderRadius: 12,
      marginBottom: 12,
      borderWidth: 1,
      borderColor: "#DDDDDD",
    },

    opcaoSelecionada: {
      backgroundColor:
        "#E9E0FF",
      borderColor:
        "#7B4DFF",
      borderWidth: 2,
    },

    opcaoTexto: {
      color: "#333333",
      fontSize: 16,
    },

    opcaoTextoSelecionada: {
      color: "#7B4DFF",
      fontWeight: "bold",
    },

    botaoConfirmar: {
      backgroundColor:
        "#7B4DFF",
      padding: 16,
      borderRadius: 12,
      marginTop: 20,
    },

    botaoDesabilitado: {
      backgroundColor:
        "#AAA3B5",
    },

    trofeu: {
      fontSize: 80,
      marginTop: 40,
    },

    placar: {
      fontSize: 50,
      fontWeight: "bold",
      color: "#7B4DFF",
      marginTop: 20,
    },

    porcentagem: {
      color: "#777777",
      fontSize: 18,
      marginTop: 5,
    },

    mensagem: {
      color: "#333333",
      fontSize: 19,
      fontWeight: "bold",
      textAlign: "center",
      marginVertical: 30,
    },

    botaoSecundario: {
      width: "100%",
      backgroundColor:
        "#FFFFFF",
      borderWidth: 1,
      borderColor:
        "#7B4DFF",
      padding: 15,
      borderRadius: 12,
      marginBottom: 10,
    },

    textoBotaoSecundario: {
      color: "#7B4DFF",
      textAlign: "center",
      fontWeight: "bold",
    },
  });

export default styles;