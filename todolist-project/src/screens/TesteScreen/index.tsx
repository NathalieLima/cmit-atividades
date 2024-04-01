import React from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from './styles';


const saveData = async () => {
    try {
      await AsyncStorage.setItem('chave', 'valor');
      console.log('Dados salvos com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar dados:', error);
    }
  };

  const readData = async () => {
    try {
      const value = await AsyncStorage.getItem('chave');
      if (value !== null) {
        console.log('Valor recuperado:', value);
      } else {
        console.log('Nenhum valor encontrado para a chave fornecida.');
      }
    } catch (error) {
      console.error('Erro ao recuperar dados:', error);
    }
  };

  const removeData = async () => {
    try {
      await AsyncStorage.removeItem('chave');
      console.log('Dados removidos com sucesso!');
    } catch (error) {
      console.error('Erro ao remover dados:', error);
    }
  };
  
  

export function TesteScreen() {
  return (
    <View style={styles.container}>

    </View>
  );
}