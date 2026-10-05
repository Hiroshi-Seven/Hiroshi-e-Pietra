import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import PrimaryButton from "../components/PrimaryButton";
import { useAuth } from "../context/AuthContext";
import { colors } from "../theme/colors";

export default function ProfileScreen() {
  const { user, logout } = useAuth();

  return (
    <SafeAreaView edges={["left", "right"]} style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>🏇</Text>
        </View>

        <Text style={styles.name}>{user?.name}</Text>
        <Text style={styles.email}>{user?.email}</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Sobre o projeto</Text>
          <Text style={styles.cardText}>
            App acadêmico em React Native/Expo criado para demonstrar Navigation,
            FlatList, funções, componentes, estado, filtros, quiz e persistência
            de login.
          </Text>
        </View>

        <PrimaryButton title="Sair da conta" variant="outline" onPress={logout} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background
  },
  container: {
    padding: 22,
    alignItems: "center"
  },
  avatar: {
    width: 94,
    height: 94,
    borderRadius: 47,
    backgroundColor: colors.surfaceSoft,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10
  },
  avatarText: {
    fontSize: 44
  },
  name: {
    color: colors.text,
    fontSize: 24,
    fontWeight: "900",
    marginTop: 14
  },
  email: {
    color: colors.textMuted,
    marginTop: 4
  },
  card: {
    width: "100%",
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 18,
    padding: 18,
    marginVertical: 24
  },
  cardTitle: {
    color: colors.text,
    fontWeight: "900",
    fontSize: 18
  },
  cardText: {
    color: colors.textMuted,
    lineHeight: 21,
    marginTop: 6
  }
});
