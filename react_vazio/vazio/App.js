import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, scrollview, TextInput } from 'react-native';

export default function App() {
  return (
    <scrollview style={styles.fundo} >
    <View>
      <Text>Catalogo de plantas</Text>
    </View>
    <View>
      
    </scrollview>
    </view>
    </scrollview>
  );
}

const styles = StyleSheet.create({
  fonte: {
    flex: 1,
    margintop:80,
    backgroundColor: '#fff',
    alignItems: 'center',

  }
});
