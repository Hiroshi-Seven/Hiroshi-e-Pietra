import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';

import styles from '../Estilo';
import { verificarLogin } from '../Funcoe';


export default function Login({ entrar }) {

 
  const [senha, setSenha] = useState('');


  function fazerLogin() {

    if (verificarLogin(senha)) {

      entrar();

    } else {

      Alert.alert(
        'Certo',
        'Nome incorreto!'
      );

    }

  }


  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>
        
      </Text>

      <Text style={styles.subtitulo}>
        fnaf
      </Text>



        <Text style={styles.label}>
          Senha
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#777777"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />


        <TouchableOpacity
          style={styles.botao}
          onPress={fazerLogin}
        >

          <Text style={styles.textoBotao}>
            ENTRAR NA BASE
          </Text>

        </TouchableOpacity>

      </View>

  );

}