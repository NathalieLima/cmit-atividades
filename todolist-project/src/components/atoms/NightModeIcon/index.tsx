import React, { useContext } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { CurrentUserDataContext } from '../../../contexts/CurrentUserDataContext';
import MyImage from './modo-noturno.png';

export function NightModeIcon() 
{
  const {isNightMode, changeNightMode} = useContext(CurrentUserDataContext);

  return (
    <TouchableOpacity onPress={changeNightMode}>
      <Image 
        source={MyImage} alt='Ícone para mudança de modo noturno'
        style={{height: 60, width: 60,}}
      />
    </TouchableOpacity>
  );
}