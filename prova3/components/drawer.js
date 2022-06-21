import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './telas/home.js'
import Entrada from './telas/entrada.js'
import Saida from './telas/saida'

const Drawer = createDrawerNavigator();

export default function Drawe() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Entrada" component={Entrada} />
        <Drawer.Screen name="Saida" component={Saida} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}