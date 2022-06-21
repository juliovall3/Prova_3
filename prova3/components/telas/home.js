import React, {useRef,useEffect} from 'react';
import { Text, View, StyleSheet, Image, Animated } from 'react-native';
import cores from '../cores'
import tamanhos from '../tamanhos'


export default function Home() {
  var apareceLogo = useRef(new Animated.Value(0)).current
  

  function aparece(){
    Animated.timing(apareceLogo,{
      toValue: 1,
      duration: 3000
    }).start();
    } 
    
  useEffect(function(){
    aparece()
  },[])

  return (
    <View style={styles.container1}>
      <Animated.View style={{opacity: apareceLogo}}>
        <Image style={styles.img} source={require('../../assets/icone-pagamento-300x300.png')} />
      </Animated.View>
      <Text style={styles.text}>Bem Vindo!!!</Text>
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
