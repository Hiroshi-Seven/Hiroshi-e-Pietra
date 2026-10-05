import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import PrimaryButton from "../components/PrimaryButton";
import { colors } from "../theme/colors";
import { calculatePercentage, resultMessage } from "../utils/quiz";

export default function QuizResultScreen({ route, navigation }) {
  const { level, score, total } = route.params;
  const percentage = calculatePercentage(score, total);

  return (
    <SafeAreaView edges={["left", "right", "bottom"]} style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.medal}>
          <Text style={styles.medalEmoji}>
            {percentage >= 80 ? "🏆" : percentage >= 60 ? "🥈" : "📖"}
          </Text>
        </View>

        <Text style={styles.title}>Quiz concluído!</Text>
        <Text style={styles.level}>
          {level.emoji} Nível {level.label}
        </Text>

        <View style={styles.scoreCard}>
          <Text style={styles.score}>
            {score}/{total}
          </Text>
          <Text style={styles.percentage}>{percentage}% de acertos</Text>
        </View>

        <Text style={styles.message}>{resultMessage(percentage)}</Text>

        <View style={styles.buttons}>
          <PrimaryButton
            title="Tentar novamente"
            onPress={() => navigation.replace("Quiz", { level })}
          />

          <View style={{ height: 10 }} />

          <PrimaryButton
            title="Escolher outro nível"
            variant="outline"
            onPress={() =>
              navigation.navigate("Main", { screen: "QuizLevels" })
            }
          />

          <View style={{ height: 10 }} />

          <PrimaryButton
            title="Voltar para a Wiki"
            variant="outline"
            onPress={() => navigation.navigate("Main", { screen: "Wiki" })}
          />
        </View>
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
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center"
  },
  medal: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.surfaceSoft,
    alignItems: "center",
    justifyContent: "center"
  },
  medalEmoji: {
    fontSize: 54
  },
  title: {
    marginTop: 20,
    color: colors.text,
    fontSize: 28,
    fontWeight: "900"
  },
  level: {
    color: colors.textMuted,
    marginTop: 6,
    fontWeight: "700"
  },
  scoreCard: {
    width: "100%",
    backgroundColor: colors.surface,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 24,
    alignItems: "center",
    marginTop: 24
  },
  score: {
    color: colors.primary,
    fontSize: 44,
    fontWeight: "900"
  },
  percentage: {
    color: colors.textMuted,
    marginTop: 4
  },
  message: {
    color: colors.text,
    fontWeight: "800",
    textAlign: "center",
    marginTop: 18,
    lineHeight: 22
  },
  buttons: {
    width: "100%",
    marginTop: 28
  }
});
