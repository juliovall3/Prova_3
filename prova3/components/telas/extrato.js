import React, {useRef,useEffect} from 'react';
import { Text, View, StyleSheet, Image, Animated } from 'react-native';
import cores from '../cores'
import tamanhos from '../tamanhos'

import { Card } from 'react-native-paper';

export default function Extrato() {

  var apareceSaldo = useRef(new Animated.Value(0)).current
  

  function aparece(){
    Animated.timing(apareceSaldo,{
      toValue: 1,
      duration: 3000
    }).start();
    } 
    
  useEffect(function(){
    aparece()
  },[])

  return (
    <View style={styles.container1}>
      <Animated.View style={{opacity: apareceSaldo}}>
        <Image style={styles.img} source={require('../../assets/br.com.kivson.ssaldo.png')} />
      </Animated.View>
      <Text style={styles.text}>Seu saldo:</Text>
      <Card>R$******</Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    alignItems:'center',
    backgroundColor: cores.background,
  },
  img: {
    width: 300,
    height: 300,
  },
  text:{
    fontSize: tamanhos.grande,
    color: cores.branco
  }
});