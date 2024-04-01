import React, { useContext, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { Container } from './styles';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';

import { AllUsersDataContext } from '../../contexts/AllUsersDataContext';
import { AuthContext } from '../../contexts/AuthenticationContext';
import { ErrorAlert } from '../../functions/Errors';

type CreateUserScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, "CreateUser">;
  };

export default function CreateUserScreen({ navigation }: CreateUserScreenProps) 
{
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userConfirmPassword, setUserConfirmPassword] = useState('');

    const authContext = useContext(AuthContext);
    const allUsersDataContext = useContext(AllUsersDataContext);

    function navigateToLoginScreen()
    {
      navigation.navigate("Login");
    }

    async function handleCreateUser() {
        try 
        {
          // Ver se senhas batem, se existe usuário igual, setar usuário e ir para Login
          await authContext.createUserAuth(userName, userPassword, userConfirmPassword); // Adicionado em @usersAuth
          await allUsersDataContext.createUserData(userName); // Adicionado em @usersData
          navigateToLoginScreen();
          clearDatas();
        } 
        catch (e) 
        {
          ErrorAlert(e);
        }
    }

    function render() 
    {
      if (authContext.usersAuth) {
        return authContext.usersAuth.map((user, index) => {
          return (
            <View key={index}>
              <Text>{user.name}</Text>
              <Text>{user.password}</Text>
            </View>
          );
        });
      } else {
        return <Text>Nenhum usuário encontrado.</Text>;
      }
    }

    function clearDatas()
    {
      setUserName('');
      setUserPassword('');
      setUserConfirmPassword('');
    }
      

    return (
    <Container>
        <Text>Nome:</Text>
        <TextInput value={userName} onChangeText={setUserName} />

        <Text>Senha:</Text>
        <TextInput value={userPassword} onChangeText={setUserPassword} />

        <Text>Confirmar senha:</Text>
        <TextInput value={userConfirmPassword} onChangeText={setUserConfirmPassword} />

        <Button title="CRIAR CONTA" onPress={handleCreateUser} />
        <Button title="Voltar para o início" onPress={navigateToLoginScreen} />

        {render()}

    </Container>
    );
}