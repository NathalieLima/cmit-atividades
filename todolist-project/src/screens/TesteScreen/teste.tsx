import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Alert, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppT = () => {
  const [inputValue, setInputValue] = useState('');
  const [savedData, setSavedData] = useState('');

  const saveData = async () => {
    try {
      await AsyncStorage.setItem('chave', inputValue);
      Alert.alert('Sucesso', 'Dados salvos com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar dados:', error);
    }
  };

  const readData = async () => {
    try {
      const value = await AsyncStorage.getItem('chave');
      if (value !== null) {
        setSavedData(value);
      } else {
        console.log('Nenhum valor encontrado para a chave fornecida.');
      }
    } catch (error) {
      console.error('Erro ao recuperar dados:', error);
    }
  };

  useEffect(() => {
    saveData;
  }, [inputValue]);

  // Use useEffect para ler os dados ao carregar o componente
  useEffect(() => {
    readData();
  }, []); // O array vazio [] garante que o useEffect é executado apenas uma vez, equivalente ao componentDidMount.

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10 }}
        placeholder="Digite algo"
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
      />
      <Button title="Salvar Dados" onPress={saveData} />
      
      <Text style={{ marginTop: 20 }}>Dados Salvos: {savedData}</Text>
    </View>
  );
};

export default AppT;
