import React from 'react';
import { StyledText } from './styles';

interface OptionLoginProps {
    text: string,
  }

export function OptionLogin(props: OptionLoginProps) {
  return (
    <StyledText customColor={'fff'}>{props.text}</StyledText>
  );
}