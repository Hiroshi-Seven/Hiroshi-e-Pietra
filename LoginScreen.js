import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import PrimaryButton from "../components/PrimaryButton";
import { useAuth } from "../context/AuthContext";
import { colors } from "../theme/colors";

export default function LoginScreen() {
  const { login, demoCredentials } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin() {
    setError("");
    const result = await login(email, password);
    if (!result.ok) {
      setError(result.message);
    }
  }

  function fillDemo() {
    setEmail(demoCredentials.email);
    setPassword(demoCredentials.password);
    setError("");
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.hero}>
          <Text style={styles.logo}>🏇</Text>
          <Text style={styles.title}>UmaWiki</Text>
          <Text style={styles.subtitle}>
            Wiki de personagens + quiz em React Native
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Entrar</Text>

          <Text style={styles.label}>E-mail</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="seu@email.com"
            placeholderTextColor="#9A94A2"
            style={styles.input}
          />

          <Text style={styles.label}>Senha</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholder="Sua senha"
            placeholderTextColor="#9A94A2"
            style={styles.input}
          />

          {!!error && <Text style={styles.error}>{error}</Text>}

          <PrimaryButton title="Entrar" onPress={handleLogin} />

          <View style={styles.separator} />

          <Text style={styles.demoTitle}>Acesso de demonstração</Text>
          <Text style={styles.demoText}>
            {demoCredentials.email}{"\n"}Senha: {demoCredentials.password}
          </Text>

          <PrimaryButton
            title="Preencher acesso demo"
            variant="outline"
            onPress={fillDemo}
          />
        </View>

        <Text style={styles.footer}>
          Projeto acadêmico/fan-made. Não afiliado à Cygames.
        </Text>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center"
  },
  hero: {
    alignItems: "center",
    marginBottom: 24
  },
  logo: {
    fontSize: 58
  },
  title: {
    fontSize: 36,
    fontWeight: "900",
    color: colors.primaryDark
  },
  subtitle: {
    color: colors.textMuted,
    marginTop: 6,
    textAlign: "center"
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 22,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.border
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: "900",
    color: colors.text,
    marginBottom: 18
  },
  label: {
    fontSize: 13,
    fontWeight: "800",
    color: colors.textMuted,
    marginBottom: 6
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 13,
    paddingHorizontal: 14,
    backgroundColor: "#FBFAFD",
    marginBottom: 14,
    color: colors.text
  },
  error: {
    color: colors.danger,
    marginBottom: 12,
    fontWeight: "700"
  },
  separator: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 18
  },
  demoTitle: {
    color: colors.primaryDark,
    fontWeight: "900"
  },
  demoText: {
    color: colors.textMuted,
    lineHeight: 21,
    marginTop: 6,
    marginBottom: 12
  },
  footer: {
    textAlign: "center",
    color: colors.textMuted,
    fontSize: 11,
    marginTop: 20
  }
});
