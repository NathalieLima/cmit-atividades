
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import InitialScreen from './src/screens/InitialScreen';
import CreateUserScreen from './src/screens/CreateUserScreen';
import TaskScreen from './src/screens/TaskScreen';

import AuthProvider from './src/contexts/AuthenticationContext';
import AllUsersDataProvider from './src/contexts/AllUsersDataContext';
import CurrentUserProvider from './src/contexts/CurrentUserDataContext';

export type RootStackParamList = {
  Home: undefined,
  CreateUser: undefined,
  Login: undefined;
  Initial: undefined;
  Task: undefined,
};
const RootStack = createStackNavigator<RootStackParamList>();

export default function App() 
{
  return (
    <AuthProvider>
      <AllUsersDataProvider>
        <CurrentUserProvider>
          <NavigationContainer>
            <RootStack.Navigator initialRouteName='Login'>
            <RootStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
              <RootStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
              <RootStack.Screen name="CreateUser" component={CreateUserScreen} options={{ headerShown: false }} />
              <RootStack.Screen name="Initial" component={InitialScreen} options={{ headerShown: false }} />
              <RootStack.Screen name="Task" component={TaskScreen} options={{ headerShown: false }} />
            </RootStack.Navigator>
          </NavigationContainer>
        </CurrentUserProvider>
      </AllUsersDataProvider>
    </AuthProvider>
    
  );
}

// Conferir se campos foram preenchidos
// 2. Ver se senha = confirmar
// Ver se existe usuário igual
// 4. Adicionar em usuários autenticados o name, pass e isAutenti
// 5. Adicionar em usersData sem tasklist sem nada
// (isAuth inutil?)

// <LOGIN></LOGIN>

// 0. Campos preenchidos
// 1. Verificar se existe
// 2. Pegar dados desse usuário e setar em @userData e userData pra prover (ver como é feito nos demais)

// <HOME></HOME>

// 1. Se clicar em TaskList, add ela em tasklist
// 2. Se logout, zerar dados em userData

{/* <HOME></HOME>

- Mudar foto de perfil
- Abrir menu e permitir sair do App
- : para excluir Tasklist

<TASK></TASK>

- Botão pra add Task
  - abre Modal  
  - usuario escreve infos
  - clica pra salvar
    - pega dados, adiciona em currentuser
    - precisa salvar em @allusers
    - fecha modal
- Marcar task
  - mesma coisa que acima 


abrir smp no login*/}