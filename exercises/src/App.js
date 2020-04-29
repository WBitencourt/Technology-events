import React from 'react';
import {View, StyleSheet} from 'react-native';
import Simples from './componentes/simples';
import ParImpar from './componentes/ParImpar';
import {Inverter, MegaSena} from './componentes/Multi';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Simples texto="Flexível" />
        <ParImpar numero={17} />
        <Inverter texto="React Nativo!" />
        <MegaSena numeros={6} />
      </View>
    );
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
