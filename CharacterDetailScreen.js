import React from "react";
import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import PrimaryButton from "../components/PrimaryButton";
import { colors } from "../theme/colors";

export default function CharacterDetailScreen({ route, navigation }) {
  const { character } = route.params;

  async function openOfficialPage() {
    await Linking.openURL(character.officialUrl);
  }

  return (
    <SafeAreaView edges={["left", "right", "bottom"]} style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.imageSection}>
          <Image
            source={{ uri: character.imageUrl }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.name}>{character.name}</Text>
        <Text style={styles.jpName}>{character.japaneseName}</Text>

        <Text style={styles.bio}>{character.shortBio}</Text>

        <Text style={styles.sectionTitle}>Ficha da Wiki</Text>

        <View style={styles.stats}>
          <Stat label="🎂 Aniversário" value={character.birthday} />
          <Stat label="🎓 Idade" value={character.age} />
          <Stat label="📏 Altura" value={character.height} />
          <Stat label="⚖️ Peso" value={character.weight} />
          <Stat label="🏁 Distância" value={character.distance} />
          <Stat label="🛣️ Faixa em km" value={character.distanceKm} />
          <Stat label="🏇 Posição/estilo" value={character.runningStyle} />
          <Stat label="🎙️ CV" value={character.voiceActor} />
        </View>

        <View style={styles.note}>
          <Text style={styles.noteTitle}>Nota sobre idade e corrida</Text>
          <Text style={styles.noteText}>
            A idade não é divulgada oficialmente nas fichas usadas como fonte.
            As faixas em quilômetros e os estilos foram simplificados para fins
            didáticos deste projeto.
          </Text>
        </View>

        <PrimaryButton
          title="Ver página oficial"
          variant="outline"
          onPress={openOfficialPage}
        />

        <View style={{ height: 12 }} />

        <PrimaryButton
          title="Fazer o quiz"
          onPress={() => navigation.navigate("Main", { screen: "QuizLevels" })}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

function Stat({ label, value }) {
  return (
    <View style={styles.statRow}>
      <Text style={styles.statLabel}>{label}</Text>
      <Text style={styles.statValue}>{value}</Text>
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
  imageSection: {
    height: 340,
    backgroundColor: colors.surfaceSoft,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "flex-end",
    overflow: "hidden"
  },
  image: {
    width: "95%",
    height: 330
  },
  name: {
    marginTop: 18,
    fontSize: 30,
    fontWeight: "900",
    color: colors.text
  },
  jpName: {
    color: colors.primary,
    fontWeight: "700",
    marginTop: 2
  },
  bio: {
    color: colors.textMuted,
    lineHeight: 22,
    marginTop: 12
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "900",
    color: colors.text,
    marginTop: 24,
    marginBottom: 10
  },
  stats: {
    backgroundColor: colors.surface,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: "hidden"
  },
  statRow: {
    paddingHorizontal: 16,
    paddingVertical: 13,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border
  },
  statLabel: {
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: "800"
  },
  statValue: {
    color: colors.text,
    fontSize: 15,
    fontWeight: "800",
    marginTop: 3
  },
  note: {
    marginVertical: 16,
    backgroundColor: "#FFF8E5",
    borderRadius: 16,
    padding: 15
  },
  noteTitle: {
    fontWeight: "900",
    color: "#7B5A07"
  },
  noteText: {
    color: "#6F5D2A",
    lineHeight: 19,
    marginTop: 4,
    fontSize: 12
  }
});
