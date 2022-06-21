import React, {useState, useEffect,useRef} from 'react';
import { Text, View, StyleSheet, TextInput, Alert, Animated } from 'react-native';
import cores from '../cores';
import MeuBotao from '../MeuBotao.js';
import MeuInput from '../MeuInputDeText'


export default function Entrada() {
  const [origem,setOrigem] = useState('')
  const [data,setData] = useState('')
  const [valor,setValor] = useState('')
  const [saldo,setSaldo] = useState('')

  const validar = () => {
    if (origem == ''){
      return alert('Favor preencher todos os campos corretamente')
    } else if(data == ''){
      return alert('Favor preencher todos os campos corretamente')
    } else if(valor == ''){
      return alert('Favor preencher todos os campos corretamente')
    } else{
        Alert.alert(
        origem,
        `Data: ${data}, Valor: ${valor}, Saldo: ${saldo + valor}`,
    )
    }

  }
  function resetar(){
    setOrigem('')
    setData('')
    setValor('')
    setSaldo('')
  }
  var apareceTudo = useRef(new Animated.Value(0)).current

  function aparece(){
    Animated.timing(apareceTudo,{
      toValue: 1,
      duration: 3000
    }).start();
  } 
  useEffect(function(){
    aparece()
  },[])

  return (
    <Animated.View style={{flex: 1,justifyContent: 'center',alignItems: 'center',backgroundColor: cores.background, opacity: apareceTudo}}>
      
      <MeuInput texto='Origem' setTexto={setOrigem} valor={origem} />
      <MeuInput texto='Data' setTexto={setData} valor={data} tipo='numeric' />
      <MeuInput texto='Entrada' setTexto={setValor} valor={valor} tipo='numeric' />
      
      <MeuBotao texto='Adicionar Entrada' cor={cores.verde} funcao={validar}/>
      <MeuBotao texto='Resetar' cor={cores.preto} funcao={resetar}/>

    </Animated.View>
  );
}
