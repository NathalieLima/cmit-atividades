import AsyncStorage from "@react-native-async-storage/async-storage";
import { userInfo } from "os";
import { ReactNode, createContext, useEffect, useState } from "react";
import { Alert } from "react-native";
import { UserDatasProps, TaskListProps, TaskProps } from "./interfaces";
import { InitialBoot } from "../functions/Inicializate";

interface UsersDataContextProps
{
    allUsersData: UserDatasProps[] | undefined,
    createUserData: (userName: string) => void,
    getUserDataByName: (userName: string) => UserDatasProps,
    updateUserInAllUsersData: (user: UserDatasProps) => void,
    clearDatas: () => void,
}

interface UsersDataProviderProps {
    children: ReactNode;
}



export const AllUsersDataContext = createContext<UsersDataContextProps>({
    allUsersData: undefined,
    createUserData: () => {},
    getUserDataByName: () => InitialBoot<UserDatasProps>(),
    updateUserInAllUsersData: () => {},
    clearDatas: () => {},
});

function AllUsersDataProvider({ children }: UsersDataProviderProps) 
{
    const [allUsersData, setUsersData] = useState<UserDatasProps[]>([] as UserDatasProps[]);

    const contextValue: UsersDataContextProps = {
      allUsersData,
      getUserDataByName,
      createUserData,
      clearDatas,
      updateUserInAllUsersData
    };

    async function storeAllUsersData() {
      try {
        await AsyncStorage.setItem("@usersDatas", JSON.stringify(allUsersData));
      } catch (e) {
        Alert.alert("Opa!", "Não foi possível salvar os dados dos usuários");
      }
    }

    async function loadAllUsersData() {
        try {
          const allUsersDataStorage = await AsyncStorage.getItem("@usersDatas");

          if (allUsersDataStorage) {
            setUsersData(JSON.parse(allUsersDataStorage));
          }
        } catch (e) {
          Alert.alert("Opa!", "Não foi possível carregar os dados de usuários");
        }
    }
  
    // Armazenar objeto de dados em razão da criação de conta
    async function createUserData(userName: string)
    {
      // Criar dados do usuário, inicialmente sem tasklist
      let userDataObject: UserDatasProps = {
        userName: userName,
        userXP: 0,
        tasksToday: 0,
        tasklist: undefined,
        tasklists: undefined,
      };

      // Acrescentar dados iniciais deste usuário à lista com os demais
      console.log('antigos usuários', allUsersData)
      await setUsersData(prevUsersDatas => [...prevUsersDatas, userDataObject]);
      console.log('novos usuários', allUsersData)
    }

    async function updateUserInAllUsersData(user: UserDatasProps)
    {
      // Puxar usuário e seu respectivo índice
      const userDataStorage = getUserDataByName(user.userName);
      const indexUser = allUsersData.indexOf(userDataStorage);

      // Puxar todos os dados e alterar o deste usuário
      let allDatas = allUsersData;
      allDatas[indexUser] = user;

      // Salvar atualizações
      await setUsersData(allDatas);
      console.log('testeeeee logout')
    }

    // Retornar dados de um usuário específico
    function getUserDataByName(userName: string): UserDatasProps 
    {
      // Pegar os dados do usuário
      return allUsersData.filter(item => item.userName === userName)[0];
    }

    function clearDatas()
    {
      // storeCurrentUser();
      // setUsersDatas([]);
      // storeAllUsersData();
    }

    useEffect(() => {
      loadAllUsersData();
    }, []);
  
    useEffect(() => {
      storeAllUsersData();
      console.log('usuários DATA cadastrados',allUsersData.map(item => item.userName))
    }, [allUsersData]);

  
    return (
      <AllUsersDataContext.Provider
        value={contextValue}
      >
        {children}
      </AllUsersDataContext.Provider>
    );
  }
  
  export default AllUsersDataProvider;

