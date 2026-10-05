import React, { useMemo, useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CharacterCard from "../components/CharacterCard";
import { characters, distanceFilters } from "../data/characters";
import { colors } from "../theme/colors";
import { filterCharacters } from "../utils/wiki";

export default function WikiScreen({ navigation }) {
  const [query, setQuery] = useState("");
  const [distanceFilter, setDistanceFilter] = useState("Todas");

  const visibleCharacters = useMemo(
    () => filterCharacters(characters, query, distanceFilter),
    [query, distanceFilter]
  );

  return (
    <SafeAreaView edges={["left", "right"]} style={styles.safeArea}>
      <FlatList
        data={visibleCharacters}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            <Text style={styles.heading}>Wiki de personagens</Text>
            <Text style={styles.subheading}>
              Toque em uma personagem para abrir a ficha completa.
            </Text>

            <TextInput
              value={query}
              onChangeText={setQuery}
              placeholder="Buscar por nome..."
              placeholderTextColor="#958E9F"
              style={styles.search}
            />

            <FlatList
              horizontal
              data={distanceFilters}
              keyExtractor={(item) => item}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.filters}
              renderItem={({ item }) => {
                const active = item === distanceFilter;
                return (
                  <Pressable
                    onPress={() => setDistanceFilter(item)}
                    style={[styles.filter, active && styles.filterActive]}
                  >
                    <Text
                      style={[
                        styles.filterText,
                        active && styles.filterTextActive
                      ]}
                    >
                      {item}
                    </Text>
                  </Pressable>
                );
              }}
            />

            <Text style={styles.counter}>
              {visibleCharacters.length} personagem(ns)
            </Text>
          </View>
        }
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyTitle}>Nenhum resultado</Text>
            <Text style={styles.emptyText}>
              Tente outro nome ou remova o filtro.
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <CharacterCard
            character={item}
            onPress={() =>
              navigation.navigate("CharacterDetail", { character: item })
            }
          />
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
  list: {
    padding: 18,
    paddingBottom: 30
  },
  heading: {
    fontSize: 26,
    fontWeight: "900",
    color: colors.text
  },
  subheading: {
    color: colors.textMuted,
    marginTop: 6,
    marginBottom: 16
  },
  search: {
    height: 50,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    paddingHorizontal: 15,
    color: colors.text
  },
  filters: {
    gap: 8,
    paddingVertical: 12
  },
  filter: {
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 8
  },
  filterActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary
  },
  filterText: {
    color: colors.textMuted,
    fontWeight: "800"
  },
  filterTextActive: {
    color: colors.white
  },
  counter: {
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: "700",
    marginBottom: 10
  },
  empty: {
    alignItems: "center",
    paddingVertical: 50
  },
  emptyTitle: {
    fontWeight: "900",
    fontSize: 18,
    color: colors.text
  },
  emptyText: {
    color: colors.textMuted,
    marginTop: 4
  }
});
