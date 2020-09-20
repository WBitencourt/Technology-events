import React from 'react';
import {View, Text} from 'react-native';
export default (props) => (
  // eslint-disable-next-line react-native/no-inline-styles
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text style={{fontSize: 50}}>{props.children}</Text>
  </View>
);
