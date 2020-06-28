import React from 'react';
import {View, Text} from 'react-native';

const fonte = {style: {fontSize: 30}};

export const Filho = props => {
  return (
    <Text {...fonte}>
      Filho: {props.nome} {props.sobrenome}
    </Text>
  );
};

export const Pai = props => {
  return (
    <Text {...fonte}>
      Pai: {props.nome} {props.sobrenome}
    </Text>
  );
};

export const Avo = props => {
  return (
    <Text {...fonte}>
      Avô: {props.nome} {props.sobrenome}
      <Pai nome="André" sobrenome={props.sobrenome}>
        <Filho nome="Ana" />
        <Filho nome="Gui" />
        <Filho nome="Davi" />
      </Pai>
      <Pai {...props} nome="Pedro">
        <Filho nome="Rebeca" />
        <Filho nome="Renato" />
      </Pai>
    </Text>
  );
};

export default Avo;
