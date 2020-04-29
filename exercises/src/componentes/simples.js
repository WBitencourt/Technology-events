import React from 'react';
import {Text} from 'react-native';
import Padrao from '../estilo/Padrao';

// Retornando um componente com function
// export default function(props) {
//  return <Text>{props.texto}</Text>;
// }

// Retornando um componente usando arrow function
export default props => (
  <Text key={1} style={[Padrao.ex]}>
    Arrow: {props.texto}
  </Text>
);

//Retornando mais de um componente usando array
// export default props => [
//   <Text key={1}>Arrow 1: {props.texto}</Text>,
//   <Text key={2}>Arrow 2: {props.texto}</Text>,
// ];

// Retornar mais de um componente usando View
// export default props => (
//   <View>
//     <Text>Arrow 1: {props.texto}</Text>
//     <Text>Arrow 2: {props.texto}</Text>
//   </View>
// );
