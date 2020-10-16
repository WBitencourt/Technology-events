/* eslint-disable radix */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Button} from 'react-native';

export default (props) => (
  <View style={{flex: 1}}>
    <View style={{flex: 1}}>{props.children}</View>
    <View>
      {props.voltar ? (
        <Button
          title="Voltar"
          onPress={() => {
            props.navigation.goBack(props.voltar);
          }}
        />
      ) : (
        false
      )}
      {props.avancar ? (
        <Button
          title="Avançar"
          onPress={() => {
            //props.navigation.navigate(props.avancar); //Adiciona a tela apenas uma vez, nao deixando a mesma se repetir.
            //props.navigation.push(props.avancar); //Adiciona a tela mais de uma vez, permitindo a mesma se repetir.

            //Permite passar parametro para tela.
            props.navigation.push(props.avancar, props.avancarParams);
          }}
        />
      ) : (
        false
      )}
    </View>
  </View>
);
