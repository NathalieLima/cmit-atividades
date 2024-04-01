import React from 'react';
import { PressableStyle, TextStyle } from './styles';

interface ModalButtonProps 
{
    text: string,
    type: string,
    onPress: () => void,
}

export function ModalButton({text, type, onPress}: ModalButtonProps) 
{
  const color = type === 'cancel' ? 'red' : 'green';

  return (
    <PressableStyle onPress={onPress} customColor={color}>
        <TextStyle>{text}</TextStyle>
    </PressableStyle>
  );
}