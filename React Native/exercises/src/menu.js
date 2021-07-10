import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Simples from './componentes/simples';
import ParImpar from './componentes/ParImpar';
import Contador from './componentes/Contador';
import ValidarProps from './componentes/ValidarProps';
// import {Inverter, MegaSena} from './componentes/Multi';
import Evento from './componentes/Evento';
import Avo from './componentes/ComunicacaoDireta';
import ListaFlex from './componentes/ListaFlex';
import Flex from './componentes/Flex';

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
      <ValidarProps label="Teste: " ano={19} />
    </View>
  );
}

function testeEvento() {
  return (
    <View>
      <Evento />
    </View>
  );
}

function fAvo() {
  return (
    <View>
      <Avo nome="João" sobrenome="Silva" />
    </View>
  );
}

function fListaFlex() {
  return (
    <View>
      <ListaFlex />
    </View>
  );
}

function fFlex() {
  return (
    <View>
      <Flex />
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
        <Drawer.Screen name="Evento" component={testeEvento} />
        <Drawer.Screen name="Avô" component={fAvo} />
        <Drawer.Screen name="Lista Flex" component={fListaFlex} />
        <Drawer.Screen name="Flex" component={fFlex} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
