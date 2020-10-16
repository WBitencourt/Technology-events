/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {View, Button} from 'react-native';
import TextoCentral from '../components/TextoCentral';

export default (props) => {
  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
        <Button
          title="Abrir"
          onPress={() => {
            props.navigation.openDrawer();
            setTimeout(() => {
              props.navigation.closeDrawer();
            }, 3000);
          }}
        />
      </View>
      <View style={{flex: 1}}>
        <TextoCentral corFundo="#33fa72" corTexto="#000">
          Tela D
        </TextoCentral>
      </View>
    </View>
  );
};
