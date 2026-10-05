import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import PrimaryButton from "../components/PrimaryButton";
import { quizzes } from "../data/quizzes";
import { colors } from "../theme/colors";

export default function QuizScreen({ route, navigation }) {
  const { level } = route.params;
  const questions = quizzes[level.id];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentIndex];
  const isLast = currentIndex === questions.length - 1;

  function handleNext() {
    if (selectedIndex === null) return;

    const isCorrect = selectedIndex === currentQuestion.answer;
    const nextScore = score + (isCorrect ? 1 : 0);

    if (isLast) {
      navigation.replace("QuizResult", {
        level,
        score: nextScore,
        total: questions.length
      });
      return;
    }

    setScore(nextScore);
    setSelectedIndex(null);
    setCurrentIndex((previous) => previous + 1);
  }

  return (
    <SafeAreaView edges={["left", "right", "bottom"]} style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.topRow}>
          <Text style={styles.level}>
            {level.emoji} {level.label}
          </Text>
          <Text style={styles.progress}>
            {currentIndex + 1}/{questions.length}
          </Text>
        </View>

        <View style={styles.progressTrack}>
          <View
            style={[
              styles.progressFill,
              {
                width: `${((currentIndex + 1) / questions.length) * 100}%`,
                backgroundColor: level.color
              }
            ]}
          />
        </View>

        <Text style={styles.question}>{currentQuestion.question}</Text>

        <View style={styles.options}>
          {currentQuestion.options.map((option, index) => {
            const selected = selectedIndex === index;

            return (
              <Pressable
                key={option}
                onPress={() => setSelectedIndex(index)}
                style={[
                  styles.option,
                  selected && styles.optionSelected
                ]}
              >
                <View
                  style={[
                    styles.letter,
                    selected && styles.letterSelected
                  ]}
                >
                  <Text
                    style={[
                      styles.letterText,
                      selected && styles.letterTextSelected
                    ]}
                  >
                    {String.fromCharCode(65 + index)}
                  </Text>
                </View>

                <Text
                  style={[
                    styles.optionText,
                    selected && styles.optionTextSelected
                  ]}
                >
                  {option}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <View style={styles.footer}>
          <PrimaryButton
            title={isLast ? "Finalizar quiz" : "Próxima pergunta"}
            disabled={selectedIndex === null}
            onPress={handleNext}
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
    padding: 20
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  level: {
    color: colors.text,
    fontWeight: "900",
    fontSize: 16
  },
  progress: {
    color: colors.textMuted,
    fontWeight: "800"
  },
  progressTrack: {
    height: 8,
    backgroundColor: colors.border,
    borderRadius: 99,
    overflow: "hidden",
    marginTop: 12
  },
  progressFill: {
    height: "100%",
    borderRadius: 99
  },
  question: {
    color: colors.text,
    fontSize: 25,
    lineHeight: 32,
    fontWeight: "900",
    marginTop: 34,
    marginBottom: 24
  },
  options: {
    gap: 12
  },
  option: {
    minHeight: 64,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    padding: 12,
    flexDirection: "row",
    alignItems: "center"
  },
  optionSelected: {
    borderColor: colors.primary,
    backgroundColor: colors.surfaceSoft
  },
  letter: {
    width: 38,
    height: 38,
    borderRadius: 11,
    backgroundColor: "#F1EFF4",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12
  },
  letterSelected: {
    backgroundColor: colors.primary
  },
  letterText: {
    color: colors.textMuted,
    fontWeight: "900"
  },
  letterTextSelected: {
    color: colors.white
  },
  optionText: {
    color: colors.text,
    fontWeight: "700",
    flex: 1
  },
  optionTextSelected: {
    color: colors.primaryDark
  },
  footer: {
    marginTop: "auto",
    paddingTop: 18
  }
});
