import AsyncStorage from "@react-native-async-storage/async-storage";
import { ReactNode, createContext, useEffect, useState } from "react";
import { Alert } from "react-native";
import { ErrorUserCreate } from "../functions/Errors";

export interface UserProps
{
    name: string,
    password: string,
}

interface AuthContextProps
{
    usersAuth: UserProps[],
    isAuthenticatedUser: (user: UserProps) => boolean,
    createUserAuth: (userPassword: string, userConfirmPassword: string, userName: string) => void,
    clearDatas: () => void,
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextProps>({
  usersAuth: [],
  isAuthenticatedUser: () => false,
  createUserAuth: () => {},
  clearDatas: () => {},
});

function AuthProvider({ children }: AuthProviderProps) 
{
    const [usersAuth, setUsersAuth] = useState<UserProps[]>([] as UserProps[]);

    const contextValue = {
      usersAuth, 
      isAuthenticatedUser,  
      createUserAuth, 
      clearDatas
    }

    async function storeUsersAuth() 
    {
        try 
        {
          await AsyncStorage.setItem("@usersAuth", JSON.stringify(usersAuth));
        } 
        catch (e) 
        {
          Alert.alert("Opa!", "Não foi possível salvar o usuário");
        }
    }

    async function loadUsersAuth() 
    {
      try {
        const usersStored = await AsyncStorage.getItem("@usersAuth");
    
        if (usersStored) {
          setUsersAuth(JSON.parse(usersStored));
        } else {
          // Se não houver usuários armazenados, defina como uma array vazia
          // setUsersAuth([]);
          
        }
      } catch (e) {
        Alert.alert("Opa!", "Não foi possível carregar os usuários");
      }
    }

    function createUserAuth(userName: string, userPassword: string, userConfirmPassword: string): void 
    {
      if (!userName || !userPassword || !userConfirmPassword)
      {
        throw new ErrorUserCreate("Campos vazios");
      }
      // Verificar se senhas são iguais
      else if (userPassword !== userConfirmPassword) 
      {
        throw new ErrorUserCreate("Senhas diferem");
      } 
      // Verificar se já não existe um usuário com mesmo nome
      else if (usersAuth.map(item => item.name).includes(userName))
      {
        throw new ErrorUserCreate("Já existe um usuário com este nome");
      }
      else 
      {
        let newUser: UserProps = {
          name: userName,
          password: userPassword,
        };

        // Adicionar usuário à lista com todas as credenciais
        setUsersAuth(prevUsers => [...prevUsers, newUser]);
      }
    }

    // Durante o login, verificar se as inseridas credenciais estão registradas
    function isAuthenticatedUser(user: UserProps): boolean
    {
      const isAuthenticatedUser = usersAuth.filter(item => item.name === user.name && item.password === user.password);
      
      return isAuthenticatedUser.length > 0;
    }

    function clearDatas()
    {
      setUsersAuth([]);
      storeUsersAuth();
    }

    useEffect(() => {
      loadUsersAuth()
    }, []);
  
    useEffect(() => {
      storeUsersAuth();
      console.log('usuarios auth cadastrados', usersAuth)
    }, [usersAuth]);

    return (
      <AuthContext.Provider
        value={contextValue}
      >
        {children}
      </AuthContext.Provider>
    );
}
  
export default AuthProvider;