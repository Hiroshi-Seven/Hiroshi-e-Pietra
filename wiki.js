export function filterCharacters(characters, query, distanceFilter) {
  const normalizedQuery = query.trim().toLowerCase();

  return characters.filter((character) => {
    const matchesQuery =
      !normalizedQuery ||
      character.name.toLowerCase().includes(normalizedQuery) ||
      character.japaneseName.toLowerCase().includes(normalizedQuery);

    const matchesDistance =
      distanceFilter === "Todas" ||
      character.distance.toLowerCase().includes(distanceFilter.toLowerCase());

    return matchesQuery && matchesDistance;
  });
}
