import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Simples from './componentes/simples';
import ParImpar from './componentes/ParImpar';
import Contador from './componentes/Contador';
import ValidarProps from './componentes/ValidarProps';
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
      <Contador />
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

function validatePropers() {
  return (
    <View>
      {/* Opcional o parametro "label" caso nao passe o mesmo poor padrao assume "Ano: " */}
      <ValidarProps ano={19} />
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
        <Drawer.Screen name="Validar Propriedade" component={validatePropers} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
