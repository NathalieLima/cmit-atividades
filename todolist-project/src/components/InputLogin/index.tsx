import React from 'react';
import { View, Text, TextInputProps } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { Container, TextInput } from './styles';
import { colors } from '../../palette';

const primaryColor = colors.primary;

interface InputLoginProps extends TextInputProps {
  name_icon: string,
  placeholder: string,
}

export function InputLogin({name_icon, placeholder, ...textInputProps}: InputLoginProps) {
  return (
    <Container>
      <Icon name={name_icon} size={20} color={primaryColor} />
      <TextInput placeholder={placeholder} {...textInputProps}/>
    </Container>
  );
}