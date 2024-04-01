import React, { useContext, useEffect, useState } from 'react';
import {
  Pressable,
  Text
} from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RootStackParamList } from '../../../App';
import { ButtonAddTask } from '../../components/atoms/ButtonAddTask';
import { NightModeIcon } from '../../components/atoms/NightModeIcon';
import { ReturnIcon } from '../../components/atoms/ReturnIcon';
import SearchBar from '../../components/molecules/SearchBar';
import { Task } from '../../components/molecules/Task';
import ModalAddTask from '../../components/organisms/ModalAddTask';
import { CurrentUserDataContext } from '../../contexts/CurrentUserDataContext';
import { TaskProps } from '../../contexts/interfaces';
import { InitialBoot } from '../../functions/Inicializate';
import {
  Container,
  HeaderView,
  NightModeView,
  ReturnView,
  TaskAddView,
  TasklistView,
  TasksView,
  TextTitle,
  TitleView
} from './styles';

type TaskScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "Task">;
};

export default function TaskScreen({ navigation }: TaskScreenProps) 
{
  const currentDataContext = useContext(CurrentUserDataContext);
  
  const [modalVisible, setModalVisible] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [taskObject, setTaskObject] = useState<TaskProps>({
    amountXP: 0,
    done: false,
    iconName: '',
    title: '',
    id: currentDataContext.currentUserData.tasklist?.tasksAmount || 0,
  });

  function renderTasks() 
  {
    if (currentDataContext.currentUserData.tasklist) 
    {
      let tasks = currentDataContext.currentUserData.tasklist.tasks;
      let filteredTasks = currentDataContext.currentUserData.tasklist.tasks
      .filter(item => item.title.includes(searchValue));
      let data = searchValue !== '' ? filteredTasks : tasks;

      if (data)
      {
        return data.map( (item, index) => {
          return (
            <Task
              id={index}
              amountXP={item.amountXP}
              done={item.done}
              iconName={item.iconName}
              title={item.title}
              key={index}
            />
          )
        }) 
      }
      else
      {
        console.log('ola')
        return <Text>Não há registros correspondentes.</Text>
      }


        
    } 
    else 
    console.log('teste')
    { //ver pra cair aqui quando não tiver resultado correspondente
      return <Text style={{fontSize: 100}}>Nenhuma tarefa cadastrada.</Text>;
    }
  }

  function handleAddTask()
  {
    let user = currentDataContext.currentUserData;

    user.tasklist?.tasks.push(taskObject);
    currentDataContext.saveCurrentUserData(user);
    setModalVisible(false);

    let newClearTask = InitialBoot<TaskProps>();
    setTaskObject(newClearTask);
  }

  function returnNavigate()
  {
    navigation.goBack();
  }

  useEffect(() => {
    renderTasks()
  }, [searchValue])

  return (
    <Container>
      <ModalAddTask 
        handleAddTask={handleAddTask} 
        modalVisible={modalVisible} 
        setModalVisible={setModalVisible}
        taskObject={taskObject}
        setTaskObject={setTaskObject}
      />

      <HeaderView>
        <NightModeView>
          <ReturnIcon returnNavigate={returnNavigate}/>
          <NightModeIcon/>
        </NightModeView>

        <TasklistView>
          <Icon name={currentDataContext.currentUserData.tasklist?.iconName} size={35} color="#900" />
          
          <TitleView>
            <TextTitle>{currentDataContext.currentUserData.tasklist?.title}</TextTitle>
            <Text>{currentDataContext.currentUserData.tasklist?.tasks.length} Task{currentDataContext.currentUserData.tasklist?.tasks.length ? 's' : ''}</Text>
          </TitleView>

          <Pressable onPress={() => setModalVisible(true)}>
            <ButtonAddTask/>
          </Pressable>
        </TasklistView>

        <SearchBar 
          placeholder='Procure...' 
          value={searchValue}
          onChangeText={setSearchValue}
        />
        
      </HeaderView>

      

      <TasksView
        contentContainerStyle={{gap: 15, flex: 1}} 
        showsVerticalScrollIndicator={false}
      >
        {renderTasks()}
      </TasksView>
        
    </Container>
  );
}

