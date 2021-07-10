import React from 'react';
import {SafeAreaView} from 'react-native';
import TextoCentral from './components/TextoCentral';
import TelaA from './views/TelaA';
import TelaB from './views/TelaB';
import TelaC from './views/TelaC';

export default props => (
  // eslint-disable-next-line react-native/no-inline-styles
  <SafeAreaView style={{flex: 1}}>
    <TelaA />
    <TelaB />
    <TelaC />
  </SafeAreaView>
);
