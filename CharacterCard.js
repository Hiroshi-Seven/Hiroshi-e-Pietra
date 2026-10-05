import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { colors } from "../theme/colors";

export default function CharacterCard({ character, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        pressed && { transform: [{ scale: 0.985 }], opacity: 0.9 }
      ]}
    >
      <View style={styles.imageBox}>
        <Image
          source={{ uri: character.imageUrl }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.name}>{character.name}</Text>
        <Text style={styles.jpName}>{character.japaneseName}</Text>

        <View style={styles.tagRow}>
          <Text style={styles.tag}>{character.distance}</Text>
          <Text style={styles.km}>{character.distanceKm}</Text>
        </View>

        <Text style={styles.meta}>📏 {character.height}</Text>
        <Text style={styles.meta}>🏇 {character.runningStyle}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: "hidden",
    flexDirection: "row",
    minHeight: 174
  },
  imageBox: {
    width: 120,
    backgroundColor: colors.surfaceSoft,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  image: {
    width: 115,
    height: 165
  },
  content: {
    flex: 1,
    padding: 14,
    justifyContent: "center"
  },
  name: {
    fontSize: 20,
    fontWeight: "900",
    color: colors.text
  },
  jpName: {
    marginTop: 2,
    color: colors.textMuted,
    fontSize: 12
  },
  tagRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginVertical: 10
  },
  tag: {
    backgroundColor: colors.primary,
    color: colors.white,
    paddingHorizontal: 9,
    paddingVertical: 4,
    borderRadius: 999,
    fontSize: 12,
    fontWeight: "800"
  },
  km: {
    backgroundColor: "#E8F6EC",
    color: colors.success,
    paddingHorizontal: 9,
    paddingVertical: 4,
    borderRadius: 999,
    fontSize: 12,
    fontWeight: "800"
  },
  meta: {
    color: colors.textMuted,
    fontSize: 12,
    marginTop: 3
  }
});
