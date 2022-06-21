import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import cores from './cores'

export default function MeuInput({texto,setTexto,tipo, valor}) {
  return (
    <TextInput style={styles.textInput} onChangeText={setTexto} value={valor} placeholder={texto} placeholderTextColor={cores.preto} keyboardType={tipo}/>
  );
}

const styles = StyleSheet.create({
  textInput:{
    width: '80%',
    height: 50,
    backgroundColor: cores.branco,
    marginBottom: 5
  },
});
