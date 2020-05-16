import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Simples from './componentes/simples';
import ParImpar from './componentes/ParImpar';
import Contador from './componentes/Contador';
import {Inverter, MegaSena} from './componentes/Multi';

function Article() {
  return (
    <View>
      <ParImpar numero={0} />
    </View>
  );
}

function ButtonCount() {
  return (
    <View>
      <Contador numero={8} />
    </View>
  );
}

function Feed() {
  return (
    <View>
      <Simples texto="Flexível" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function Menu() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Article" component={Article} />
        <Drawer.Screen name="Button Count" component={ButtonCount} />
        <Drawer.Screen name="Feed" component={Feed} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
