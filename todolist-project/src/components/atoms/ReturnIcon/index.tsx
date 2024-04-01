import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
// import ReturnImage from '../../assets/images/return.png';


import ReturnImage from './voltar.png';

interface ReturnIconProps {
  returnNavigate: () => void,
};


export function ReturnIcon({ returnNavigate }: ReturnIconProps)  
{
  return (
    
    <TouchableOpacity onPress={returnNavigate}>
      <Image 
        source={ReturnImage}
        style={{width: 46, height: 46,}}
      />
    </TouchableOpacity>
    
  );
}