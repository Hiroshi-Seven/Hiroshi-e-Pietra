import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [operacao, setOperacao] = useState('+');
  const [resultado, setResultado] = useState('');

  const realizarCalculo = (n1, n2, op, setRes) => {
    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);
    if (isNaN(num1) || isNaN(num2)) {
      setRes('Digite números válidos');
      return;
    }
    if (op === '+') setRes(num1 + num2);
    if (op === '-') setRes(num1 - num2);
    if (op === '*') setRes(num1 * num2);
    if (op === '/') setRes(num2 !== 0 ? num1 / num2 : 'Erro (divisão por 0)');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora</Text>
      
      <TextInput 
        style={styles.input} 
        placeholder="Digite o primeiro número" 
        keyboardType="numeric" 
        value={numero1} 
        onChangeText={setNumero1} 
      />
      
      <TextInput 
        style={styles.input} 
        placeholder="Digite o segundo número" 
        keyboardType="numeric" 
        value={numero2} 
        onChangeText={setNumero2} 
      />
      
      <View style={styles.operacoes}>
        <TouchableOpacity style={styles.botao} onPress={() => setOperacao('+')}>
          <Text style={styles.textoBotao}>+</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.botao} onPress={() => setOperacao('-')}>
          <Text style={styles.textoBotao}>-</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.botao} onPress={() => setOperacao('*')}>
          <Text style={styles.textoBotao}>×</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.botao} onPress={() => setOperacao('/')}>
          <Text style={styles.textoBotao}>÷</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={styles.operacaoSelecionada}>Operação: {operacao}</Text>
      
      <TouchableOpacity 
        style={styles.botaoCalcular} 
        onPress={() => realizarCalculo(numero1, numero2, operacao, setResultado)}
      >
        <Text style={styles.textoCalcular}>Calcular</Text>
      </TouchableOpacity>
      
      <Text style={styles.resultado}>Resultado: {resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  titulo: { fontSize: 24, textAlign: 'center', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#fffd9e', padding: 10, marginBottom: 10, borderRadius: 5 },
  operacoes: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 },
  botao: { padding: 10, backgroundColor: '#be9ac9', borderRadius: 5, width: 50, alignItems: 'center' },
  textoBotao: { fontSize: 18 },
  operacaoSelecionada: { textAlign: 'center', marginVertical: 10 },
  botaoCalcular: { backgroundColor: '#5a3939', padding: 15, alignItems: 'center', borderRadius: 5 },
  textoCalcular: { color: '#fff', fontSize: 16 },
  resultado: { textAlign: 'center', marginTop: 20, fontSize: 18, fontWeight: 'bold' }
});
