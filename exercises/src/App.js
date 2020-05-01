import React from 'react';
import {View, StyleSheet} from 'react-native';
//import Simples from './componentes/simples';
//import ParImpar from './componentes/ParImpar';
//import {Inverter, MegaSena} from './componentes/Multi';
import DrawerComponent from './menu';

export default class App extends React.Component {
  render() {
    return <DrawerComponent />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  f20: {
    fontSize: 40,
  },
});
