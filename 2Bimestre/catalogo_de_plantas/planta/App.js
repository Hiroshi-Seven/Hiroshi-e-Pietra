import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.fundo}>
    <View>

      <Text style={{color:'white', fontWeight:'900'}}>conmias, Bem vindo ao SITE!!!!!</Text>

    </View>

      <View>
        <Button onPress={() => {setIsHungry(false);}} title={'Camomila '}>
          
        </Button>

        <Button onPress={() => {setIsHungry(false);}} title={'Maconha'}>
          
        </Button>

        <Button onPress={() => {setIsHungry(false);}} title={'erva daninha'}>
          
        </Button>

         <Button onPress={() => {setIsHungry(false);}} title={'samambaia'}>
          
        </Button>


      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 5,
    backgroundColor: '#8dffdd',
    height: '100%',
    width: '100%',
    fontFamily: 'arial',
  },
});