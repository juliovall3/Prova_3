import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Text, View, StyleSheet, Animated } from 'react-native';
import Drawer from './drawer'
import Extrato from './telas/extrato'

const Tab = createBottomTabNavigator();

export default function Rotas() {

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({color, size}) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = 'home'
              }else if( route.name === 'Extrato'){
                iconName = 'extrato'
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}>
          <Tab.Screen name="Home" component={Drawer} options={{headerShown: false,}}/>
          <Tab.Screen name="Extrato" component={Extrato} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#0F171D',
  },
})