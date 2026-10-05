import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import PrimaryButton from "../components/PrimaryButton";
import { characters } from "../data/characters";
import { colors } from "../theme/colors";

export default function HomeScreen({ navigation }) {
  const featured = characters[0];

  return (
    <SafeAreaView edges={["left", "right"]} style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.hero}>
          <View style={styles.heroText}>
            <Text style={styles.eyebrow}>TRACEN FAN WIKI</Text>
            <Text style={styles.title}>Conheça, estude e desafie seu conhecimento.</Text>
            <Text style={styles.description}>
              Explore fichas de personagens e depois faça quizzes em três níveis.
            </Text>
          </View>

          <Image
            source={{ uri: featured.imageUrl }}
            style={styles.heroImage}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.sectionTitle}>O que o app demonstra</Text>

        <View style={styles.grid}>
          <InfoCard emoji="🧭" title="Navigation" text="Stack + Bottom Tabs" />
          <InfoCard emoji="📋" title="FlatList" text="Wiki e níveis do quiz" />
          <InfoCard emoji="⚙️" title="Funções" text="Busca, filtro e pontuação" />
          <InfoCard emoji="💾" title="Login" text="Sessão com AsyncStorage" />
        </View>

        <View style={styles.callout}>
          <Text style={styles.calloutTitle}>Comece pela Wiki</Text>
          <Text style={styles.calloutText}>
            Leia os dados das personagens. Eles aparecem novamente no quiz.
          </Text>
          <PrimaryButton
            title="Abrir Wiki"
            onPress={() => navigation.navigate("Wiki")}
          />
        </View>

        <View style={styles.calloutSecondary}>
          <Text style={styles.calloutTitle}>Pronto para o desafio?</Text>
          <Text style={styles.calloutText}>
            Escolha Fácil, Médio ou Difícil e veja sua pontuação final.
          </Text>
          <PrimaryButton
            title="Ir para o Quiz"
            variant="outline"
            onPress={() => navigation.navigate("QuizLevels")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function InfoCard({ emoji, title, text }) {
  return (
    <View style={styles.infoCard}>
      <Text style={styles.infoEmoji}>{emoji}</Text>
      <Text style={styles.infoTitle}>{title}</Text>
      <Text style={styles.infoText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background
  },
  container: {
    padding: 18,
    paddingBottom: 40
  },
  hero: {
    minHeight: 270,
    backgroundColor: colors.primaryDark,
    borderRadius: 24,
    overflow: "hidden",
    flexDirection: "row",
    marginBottom: 24
  },
  heroText: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    zIndex: 1
  },
  eyebrow: {
    color: "#D9CCFA",
    fontWeight: "900",
    fontSize: 11,
    letterSpacing: 1
  },
  title: {
    color: colors.white,
    fontWeight: "900",
    fontSize: 25,
    marginTop: 8,
    lineHeight: 30
  },
  description: {
    color: "#EFE9FF",
    marginTop: 10,
    lineHeight: 20
  },
  heroImage: {
    width: 145,
    height: 265,
    alignSelf: "flex-end",
    marginRight: -18
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "900",
    color: colors.text,
    marginBottom: 12
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 22
  },
  infoCard: {
    width: "48%",
    backgroundColor: colors.surface,
    padding: 14,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border
  },
  infoEmoji: {
    fontSize: 24
  },
  infoTitle: {
    marginTop: 8,
    fontWeight: "900",
    color: colors.text
  },
  infoText: {
    marginTop: 3,
    color: colors.textMuted,
    fontSize: 12
  },
  callout: {
    backgroundColor: "#E8F6EC",
    borderRadius: 20,
    padding: 18,
    marginBottom: 14
  },
  calloutSecondary: {
    backgroundColor: colors.surfaceSoft,
    borderRadius: 20,
    padding: 18
  },
  calloutTitle: {
    color: colors.text,
    fontSize: 19,
    fontWeight: "900"
  },
  calloutText: {
    color: colors.textMuted,
    lineHeight: 20,
    marginTop: 6,
    marginBottom: 14
  }
});
