import React from 'react';
import { TouchableOpacity, View, Text, TouchableOpacityProps } from 'react-native';

import { TouchableButton, TextButton } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  text: string,
}

export function AppButton({text, ...touchableOpacityProps}: ButtonProps) {
  return (
    <TouchableButton {...touchableOpacityProps}>
        <TextButton>{text}</TextButton>
    </TouchableButton>
  );
}