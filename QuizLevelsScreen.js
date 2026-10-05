import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { quizLevels } from "../data/quizzes";
import { colors } from "../theme/colors";

export default function QuizLevelsScreen({ navigation }) {
  return (
    <SafeAreaView edges={["left", "right"]} style={styles.safeArea}>
      <FlatList
        data={quizLevels}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.container}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.heading}>Escolha a dificuldade</Text>
            <Text style={styles.subheading}>
              Cada nível possui 5 perguntas e mostra a pontuação ao final.
            </Text>
          </View>
        }
        renderItem={({ item, index }) => (
          <Pressable
            onPress={() => navigation.navigate("Quiz", { level: item })}
            style={({ pressed }) => [
              styles.card,
              { borderLeftColor: item.color },
              pressed && { opacity: 0.86 }
            ]}
          >
            <Text style={styles.emoji}>{item.emoji}</Text>

            <View style={styles.cardText}>
              <Text style={styles.level}>
                Nível {index + 1} · {item.label}
              </Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>

            <Text style={styles.arrow}>›</Text>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background
  },
  container: {
    padding: 18,
    paddingBottom: 30
  },
  header: {
    marginBottom: 16
  },
  heading: {
    fontSize: 26,
    fontWeight: "900",
    color: colors.text
  },
  subheading: {
    color: colors.textMuted,
    marginTop: 6,
    lineHeight: 20
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 18,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: colors.border,
    borderLeftWidth: 6,
    flexDirection: "row",
    alignItems: "center"
  },
  emoji: {
    fontSize: 34,
    marginRight: 14
  },
  cardText: {
    flex: 1
  },
  level: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "900"
  },
  description: {
    color: colors.textMuted,
    marginTop: 3
  },
  arrow: {
    color: colors.primary,
    fontSize: 34,
    fontWeight: "300"
  }
});
