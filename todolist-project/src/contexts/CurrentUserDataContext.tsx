import AsyncStorage from "@react-native-async-storage/async-storage";
import { ReactNode, createContext, useEffect, useState } from "react";
import { Alert } from "react-native";
import { UserDatasProps, TaskListProps, TaskProps } from "./interfaces";
import { InitialBoot } from "../functions/Inicializate";

interface CurrentUserContextProps
{
    isNightMode: boolean,
    currentUserData: UserDatasProps,
    changeNightMode: () => void,
    clearDatas: () => void,
    saveLogoutApp: () => void,
    saveCurrentUserData: (user: UserDatasProps) => void,
    deleteTasklist: (tasklistName: string) => void,
    getTaskByName: (taskName: string) => void | TaskProps,
    updateTaskInTasklist: (task: TaskProps) => void
    // updateUserXP: () => number,
    // função pra atualizar tasksTODAY
    // função pra att USERXP
}

interface CurrentUserProviderProps {
    children: ReactNode;
}

export const CurrentUserDataContext = createContext<CurrentUserContextProps>({
    isNightMode: false,
    currentUserData: InitialBoot<UserDatasProps>(),
    changeNightMode: () => {},
    clearDatas: () => {},
    saveLogoutApp: () => {},
    saveCurrentUserData: () => {},
    deleteTasklist: () => {},
    getTaskByName: () => {},
    updateTaskInTasklist: () => {},
    // updateUserXP: () => 0,
});

function CurrentUserProvider({ children }: CurrentUserProviderProps) 
{
    const [isNightMode, setIsNightMode] = useState<boolean>(false);
    const [currentUserData, setCurrentUserData] = useState<UserDatasProps>({} as UserDatasProps);

    const contextValue: CurrentUserContextProps = {
      isNightMode,
      currentUserData,
      changeNightMode,
      saveLogoutApp,
      saveCurrentUserData,
      deleteTasklist,
      getTaskByName,
      updateTaskInTasklist,
      // updateUserXP,
      clearDatas
    };

    function changeNightMode(): void
    {
      console.log('entrei aqui')
      setIsNightMode(!isNightMode);
    }

    async function storeIsNightMode()
    {
      console.log('Mudança de modo noturno')
    }

    async function storeCurrentUser() {
      try {
        await AsyncStorage.setItem("@currentUserData", JSON.stringify(currentUserData));
      } 
      catch (e) {
        Alert.alert("Opa!", "Não foi possível salvar os dados deste usuário");
      }
    }

    async function loadCurrentUser() {
        try {
          const userDataStorage = await AsyncStorage.getItem("@currentUserData");

          if (userDataStorage) {
            setCurrentUserData(JSON.parse(userDataStorage));
          }
        } 
        catch (e) {
          Alert.alert("Opa!", "Não foi possível carregar os dados deste usuário");
        }
    }

    // Salvar atualização de dados do usuário
    function saveCurrentUserData(user: UserDatasProps)
    {
      console.log('USUARIO', user)
      setCurrentUserData(user);
    }

    function deleteTasklist(tasklistName: string)
    {
      let currentUser = currentUserData;
      let updatedTasklists = currentUserData.tasklists?.filter(item => item.title != tasklistName);
      
      currentUser.tasklists = updatedTasklists;
      saveCurrentUserData(currentUser);
    }

    function getTaskByName(taskName: string): void | TaskProps
    {
      if (currentUserData.tasklist)
      {
        return currentUserData.tasklist.tasks.filter(item => item.title === taskName)[0];
      }
    }

    function updateTaskInTasklist(task: TaskProps): void
    {
      if (currentUserData.tasklist)
      {
        let oldTask = getTaskByName(task.title);
        let taskIndex = currentUserData.tasklist.tasks.indexOf(task);

        currentUserData.tasklist.tasks[taskIndex] = task;
      }
    }

    function updateTasksAmount() 
    {
      let user = currentUserData;

      if ( user.tasklist ) 
      {
        user.tasklist.tasksAmount = user.tasklist?.tasks.length;
        setCurrentUserData(user);
      }

      console.log('entrei para mudar tasks amount')
    }

    function updateUserXP(): number
    {
      const allTasklists = currentUserData.tasklists;

      if (allTasklists && allTasklists.filter(tasklist => tasklist.tasks !== undefined))
      {
        allTasklists.map(tasklist => {
          let tasksDone = tasklist.tasks.filter(task => task.done);
          let amountXPTasksDone = tasksDone.map(task => task.amountXP).reduce( (accumulator, currentValue) => accumulator + currentValue, 0)
          
          return amountXPTasksDone;
        })
      }

      return 0;
    }
    
    function saveLogoutApp()
    {
      setCurrentUserData(InitialBoot<UserDatasProps>());
    }

    function clearDatas()
    {
      // storeCurrentUser();
      // setUsersDatas([]);
      // storeAllUsersDatas();
    }

    useEffect(() => {
      loadCurrentUser();
    }, []);

    useEffect(() => {
      loadCurrentUser();
    }, []);
  
    useEffect(() => {
      storeCurrentUser();
    }, [currentUserData]);

    useEffect(() => {
      storeIsNightMode();
    }, [isNightMode]);

    useEffect(() => {
      console.log('teste add task')

      updateUserXP();
      updateTasksAmount();
      storeCurrentUser();
    }, [currentUserData.tasklist]);

  
    return (
      <CurrentUserDataContext.Provider
        value={contextValue}
      >
        {children}
      </CurrentUserDataContext.Provider>
    );
  }
  
  export default CurrentUserProvider;



  // async function storeTasks(tasks: TaskProps[]) {
    //   try {
    //     await AsyncStorage.setItem("@tasks", JSON.stringify(tasks));
    //   } catch (e) {
    //     Alert.alert("Opa!", "Não foi possível salvar as tarefas");
    //   }
    // }
  
    // async function loadTasks() {
    //   try {
    //     const tasks = await AsyncStorage.getItem("@tasks");
    //     if (tasks) {
    //       setTasks(JSON.parse(tasks));
    //     }
    //   } catch (e) {
    //     Alert.alert("Opa!", "Não foi possível carregar as tarefas");
    //   }
    // }

    // function createTask(title: string, iconName: string, amountXP: number) {
    //   const newTask = {
    //     id: count,
    //     title,
    //     done: false,
    //     iconName,
    //     amountXP,
    //   };
    //   setCount(count + 1);
    //   setTasks([...tasks, newTask]);
    // }
  
    // function selectTask(task: TaskProps) {
    //   setTask(task);
    // }
  
    // function clearTask() {
    //   setTask({} as TaskProps);
    // }
  
    // useEffect(() => {
    //   loadTasks();
    // }, []);
  
    // useEffect(() => {
    //   storeTasks(tasks);
    // }, [tasks]);


    // const userDataStorage = allUsersDatas.filter(item => item.userName === userName)[0];