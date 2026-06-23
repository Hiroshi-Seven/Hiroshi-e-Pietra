import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Image
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg'
        }}
        style={styles.imagem}
      />

      <Text style={styles.titulo}>Cristiano Ronaldo</Text>

      <Text style={styles.texto}>País: Portugal</Text>
      <Text style={styles.texto}>Posição: Atacante</Text>
      <Text style={styles.texto}>Camisa: Nº 7</Text>
      <Text style={styles.texto}>Nascimento: 05/02/1985</Text>

      <Text style={styles.subtitulo}>Copas do Mundo</Text>

      <Text style={styles.texto}>
        Cristiano Ronaldo participou de várias edições da Copa do Mundo e é um dos maiores jogadores da história de Portugal.
      </Text>

      <Text style={styles.subtitulo}>Curiosidade</Text>

      <Text style={styles.texto}>
        Cristiano Ronaldo é conhecido mundialmente como CR7 e é um dos maiores artilheiros do futebol.
      </Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },

  imagem: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 15,
  },

  subtitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: 'red',
  },

  texto: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
});