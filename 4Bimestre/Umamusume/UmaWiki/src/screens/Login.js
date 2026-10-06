import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  ScrollView,
} from "react-native";
import { validarLogin, USUARIO_TESTE, SENHA_TESTE } from "../Funcoes";

const IMAGEM_SPECIAL_WEEK =
  "https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/b83df291000248a193ca9e46a73ded56/specialweek_01.png";

const IMAGEM_SUZUKA =
  "https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/bfa46677912b4228aa244da162f24f6f/silencesuzuka_01.png";

export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  function fazerLogin() {
    if (validarLogin(usuario, senha)) {
      navigation.replace("Home");
    } else {
      Alert.alert("Login inválido", "Use o usuário e a senha de teste.");
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <View style={styles.banner}>
        <View style={styles.bannerTexto}>
          <Text style={styles.logoPequeno}>UMAMUSUME</Text>
          <Text style={styles.logoGrande}>UmaWiki</Text>
          <Text style={styles.frase}>
            Sua wiki de personagens de Uma Musume com quiz no final.
          </Text>
        </View>

        <View style={styles.personagensBanner}>
          <Image source={{ uri: IMAGEM_SPECIAL_WEEK }} style={styles.personagem1} resizeMode="contain" />
          <Image source={{ uri: IMAGEM_SUZUKA }} style={styles.personagem2} resizeMode="contain" />
        </View>
      </View>

      <View style={styles.areaLogin}>
        <Text style={styles.titulo}>Bem-vindo!</Text>
        <Text style={styles.subtitulo}>Entre para acessar a UmaWiki</Text>

        <Text style={styles.label}>Usuário</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu usuário"
          value={usuario}
          onChangeText={setUsuario}
          autoCapitalize="none"
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        <TouchableOpacity style={styles.botao} onPress={fazerLogin}>
          <Text style={styles.textoBotao}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.demo}>
          <Text style={styles.demoTitulo}>Acesso para teste</Text>
          <Text style={styles.demoTexto}>Usuário: {USUARIO_TESTE}</Text>
          <Text style={styles.demoTexto}>Senha: {SENHA_TESTE}</Text>
        </View>
      </View>

      <Text style={styles.rodape}>Projeto React Native com Navigation, FlatList e funções.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F6F2FF",
    padding: 24,
    justifyContent: "center",
  },
  banner: {
    minHeight: 250,
    borderRadius: 28,
    backgroundColor: "#7347FF",
    overflow: "hidden",
    flexDirection: "row",
    marginBottom: 25,
  },
  bannerTexto: {
    flex: 1,
    padding: 25,
    justifyContent: "center",
    zIndex: 2,
  },
  logoPequeno: {
    color: "#E9DEFF",
    fontWeight: "bold",
    fontSize: 14,
    letterSpacing: 2,
  },
  logoGrande: {
    color: "#FFFFFF",
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 6,
  },
  frase: {
    color: "#F2ECFF",
    fontSize: 15,
    lineHeight: 21,
    marginTop: 8,
    maxWidth: 260,
  },
  personagensBanner: {
    width: "45%",
    position: "relative",
  },
  personagem1: {
    position: "absolute",
    width: 170,
    height: 245,
    right: 20,
    bottom: 0,
  },
  personagem2: {
    position: "absolute",
    width: 145,
    height: 220,
    right: -35,
    bottom: 0,
    opacity: 0.9,
  },
  areaLogin: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 24,
  },
  titulo: {
    color: "#2F2940",
    fontSize: 29,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitulo: {
    color: "#77717F",
    textAlign: "center",
    marginTop: 5,
    marginBottom: 24,
  },
  label: {
    color: "#4F4858",
    fontWeight: "bold",
    marginBottom: 6,
  },
  input: {
    backgroundColor: "#FAF9FC",
    borderWidth: 1,
    borderColor: "#DDD7E8",
    borderRadius: 13,
    padding: 15,
    marginBottom: 15,
  },
  botao: {
    backgroundColor: "#7347FF",
    padding: 16,
    borderRadius: 13,
    marginTop: 5,
  },
  textoBotao: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 17,
  },
  demo: {
    backgroundColor: "#F6F2FF",
    borderRadius: 13,
    padding: 14,
    marginTop: 18,
  },
  demoTitulo: {
    color: "#7347FF",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 4,
  },
  demoTexto: {
    textAlign: "center",
    color: "#696170",
  },
  rodape: {
    color: "#938A9D",
    textAlign: "center",
    marginTop: 18,
    fontSize: 12,
  },
});