/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';

const ValidarProps = props => (
  <Text style={{fontSize: 35}}>
    {props.label}
    {props.ano + 2000}
  </Text>
);

// Se nao passar valor pro label, o mesmo por default recebe "Ano:"
ValidarProps.defaultProps = {
  label: 'Ano: ',
};

// Define que o valor numerico é requerido.
ValidarProps.propTypes = {
  ano: PropTypes.number.isRequired,
};

export default ValidarProps;
