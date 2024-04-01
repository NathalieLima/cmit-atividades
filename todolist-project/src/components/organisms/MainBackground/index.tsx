import React, { ReactNode, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { LinearContainer } from './styles';
import { CurrentUserDataContext } from '../../../contexts/CurrentUserDataContext';

interface MainBackgroundProps {
    children: ReactNode; // Adiciona a propriedade children
}

export default function MainBackground(props: MainBackgroundProps) 
{
  const { isNightMode } = useContext(CurrentUserDataContext);
    let light_colors: string[] = ['#F6F1FF', '#B692F8'];
    let dark_colors: string[] = ['#3855a0', '#0d032a'];
    // let dark_colors: string[] = ['#7238A0', '#10032A'];

    return (
      <LinearContainer 
        backgroundColor={ (isNightMode ? 'fff' : 'purple') }
        colors={ (isNightMode ? dark_colors : light_colors) }
        {...props}
      >
        {props.children}
    </LinearContainer>
  );
}