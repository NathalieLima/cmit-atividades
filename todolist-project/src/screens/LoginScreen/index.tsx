import React, { useContext, useState } from 'react';
import { Alert, Text, TouchableOpacity } from 'react-native';

import Checkbox from 'expo-checkbox';

import { InputLogin } from '../../components/InputLogin';
import { AppLogo } from '../../components/atoms/AppLogo';
import { NightModeIcon } from '../../components/atoms/NightModeIcon';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from "../../../App";
import { AppButton } from '../../components/molecules/AppButton';
import { OptionLogin } from '../../components/molecules/OptionLogin';
import { AllUsersDataContext } from '../../contexts/AllUsersDataContext';
import { AuthContext, UserProps } from '../../contexts/AuthenticationContext';
import { CurrentUserDataContext } from '../../contexts/CurrentUserDataContext';
import {
  AppLogoView,
  InputsView,
  OptionsView, ShowPasswordView,
  StyledMainBackground,
  TouchableIcon
} from './styles';


type LoginScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, "Login">;
  };

export default function LoginScreen({ navigation }: LoginScreenProps) {

    const authContext = useContext(AuthContext);
    const allUsersDataContext = useContext(AllUsersDataContext);
    const currentUserData = useContext(CurrentUserDataContext);

    // if ( allUsersDataContext.currentUserData.userName !== '' ) {
    //     // navigateToTaskScreen();
    //     navigateToHomeScreen();
    // }
    
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isNightMode, setIsNightMode] = useState(false);
    const [isChecked, setChecked] = useState(false);

    const navigateToHomeScreen = () => {
        navigation.navigate("Home");
        clearDatas();
    };

    const navigateToCreateUserScreen = () => {
        navigation.navigate("CreateUser"); 
        clearDatas();
    };

    function clearDatas()
    {
        setName('');
        setPassword('');
    }

    function handleAuthentication() 
    {
        let user: UserProps = {name, password};

        if (name === '' || password === '')
        {
            Alert.alert('Opa!', 'Campos vazios');
        }
        else if ( authContext.isAuthenticatedUser(user) )
        {
            // Pegar usuário cujo nome seja correspondente
            let userData = allUsersDataContext.getUserDataByName(user.name)
            
            // Salvar como usuário atual
            currentUserData.saveCurrentUserData(userData);
            navigateToHomeScreen();
        } 
        else 
        {
            Alert.alert('Opa!', 'Este usuário não existe');
        }
    }

    // function testeInitial()
    // {
    //     if (currentUserData.currentUserData.userName) {
    //         navigateToHomeScreen();
    //         console.log('entrei em navigate')
    //     }
    // }

    // useEffect(testeInitial, []);

    return (
        <StyledMainBackground>
            <TouchableIcon onPress={ () => {
                setIsNightMode(!isNightMode); 
                console.log(isNightMode)
            } }>
                <NightModeIcon/>
            </TouchableIcon>

            <AppLogoView>
                <AppLogo/>
            </AppLogoView>

            <InputsView>
                <InputLogin 
                    name_icon='user' 
                    placeholder='Insira seu login' 
                    value={name}
                    onChangeText={setName}
                />
                <InputLogin 
                    name_icon='lock' 
                    placeholder='Insira sua senha' 
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!isChecked}
                />
            </InputsView>    

            <ShowPasswordView>
                <Checkbox
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? '#4630EB' : undefined}
                />
                <Text>Exibir senha</Text>
            </ShowPasswordView>

            <AppButton 
                text='Login'
                onPress={handleAuthentication}
            />

            <OptionsView>
                <OptionLogin 
                    text='Esqueci a senha'
                />
                <TouchableOpacity onPress={navigateToCreateUserScreen}>
                    <OptionLogin 
                        text='Criar conta'
                    />
                </TouchableOpacity>
                
            </OptionsView>

        </StyledMainBackground>
    );
}