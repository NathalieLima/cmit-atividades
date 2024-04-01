import React, { useContext, useState } from 'react';
import { Button, Pressable, Text } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';
import { MenuIcon } from '../../components/atoms/MenuIcon';
import { NightModeIcon } from '../../components/atoms/NightModeIcon';
import { UserIcon } from '../../components/atoms/UserIcon';
import { TaskList } from '../../components/molecules/TaskList';
import ModalAddTasklist from '../../components/organisms/ModalAddTasklist';
import ModalDeleteTasklist from '../../components/organisms/ModalDeleteTasklist';
import ModalLogout from '../../components/organisms/ModalLogout';
import { AllUsersDataContext } from '../../contexts/AllUsersDataContext';
import { CurrentUserDataContext } from '../../contexts/CurrentUserDataContext';
import { TaskListProps } from '../../contexts/interfaces';
import {
  BackgroundScreen,
  StrongText,
  TasklistsView,
  UserContainer,
  ViewMenu,
  ViewRight, ViewText
} from './styles';

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "CreateUser">;
};

export default function HomeScreen({ navigation }: HomeScreenProps) 
{
  const allUsersDataContext = useContext(AllUsersDataContext);
  const currentDataContext = useContext(CurrentUserDataContext);

  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [tasklistTitle, setTasklistTitle] = useState('');
  const [tasklistIconName, setTasklistIconName] = useState('users');

  function navigateToTaskScreen()
  {
    navigation.navigate('Task');
  }

  function handleTasklistDetails(tasklist: TaskListProps)
  {
    let user = currentDataContext.currentUserData;

    user.tasklist = tasklist;
    currentDataContext.saveCurrentUserData(user);
    navigateToTaskScreen();
  }

  function handleAddTasklist()
  {
    setModalVisible(true);
  }

  function handleDeleteTasklist()
  {
    setModalVisible3(true);
    currentDataContext.deleteTasklist(tasklistTitle);
  }

  function handleLogoutApp()
  {
    setModalVisible(!modalVisible);
    allUsersDataContext.updateUserInAllUsersData(currentDataContext.currentUserData); 
    console.log('DADOS DE USUARIOS REGISTRADOS',allUsersDataContext.allUsersData) 
    currentDataContext.saveLogoutApp();
    navigation.navigate('Login');
  }

  function renderTaskLists()
  {
    let tasklists = currentDataContext.currentUserData.tasklists;

    if (tasklists) 
    {
      return tasklists?.map( (item, index) => {
        return (
          <Pressable key={index} onPress={() => handleTasklistDetails(item)}>
            <TaskList
              setModalVisible={setModalVisible3}
              iconName={item.iconName}
              tasksAmount={item.tasksAmount}
              title={item.title}
              key={index}
            />
          </Pressable>
        );
      } );
    }
    else 
    {
      return <Text>Nenhuma lista de tarefas cadastrada.</Text>;
    }
  }

  function getTasksToDo() {
    let amount = 0;

    currentDataContext.currentUserData.tasklists?.map(item => {
      amount += item.tasks.length;
    });

    return amount;
  }

  return (
    <BackgroundScreen>
      <ModalLogout modalVisible={modalVisible2} setModalVisible={setModalVisible2} handleLogoutApp={handleLogoutApp} />

      <ModalAddTasklist modalVisible={modalVisible} setModalVisible={setModalVisible}/>

      <ModalDeleteTasklist modalVisible={modalVisible3} setModalVisible={setModalVisible3} handleDeleteTasklist={handleDeleteTasklist}/>

      <UserContainer>
        <ViewMenu>
          <Pressable onPress={() => setModalVisible2(true)}>
            <MenuIcon/>
          </Pressable>
        </ViewMenu>
        
        <ViewText>
          <StrongText>Olá,</StrongText>
          <StrongText>{currentDataContext.currentUserData.userName}</StrongText>
          <Text>Você tem {getTasksToDo()} para fazer</Text>
        </ViewText>

        <ViewRight>
          <NightModeIcon/>
          <UserIcon/>
        </ViewRight>
      </UserContainer>

      <Button title='Adicionar tasklist' onPress={handleAddTasklist}></Button>

      <TasklistsView 
        contentContainerStyle={{gap: 15,}} 
        showsVerticalScrollIndicator={false}
      >
        {renderTaskLists()}      
      </TasklistsView>
    </BackgroundScreen>
  );
}

