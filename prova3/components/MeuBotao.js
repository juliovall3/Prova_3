import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import cores from './cores'

export default function MeuBotao({texto,funcao, cor}) {
  return (
    <TouchableOpacity onPress={funcao} style={{
      backgroundColor: cor, 
      width: '50%', 
      alignItems: 'center', 
      height:40, 
      justifyContent: 'center', 
      marginBottom: 10}}>

      <Text style={{color: cores.branco}}>{texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  
});
