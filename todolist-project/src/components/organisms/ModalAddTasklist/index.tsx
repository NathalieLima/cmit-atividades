import React, { useContext, useState } from 'react';
import { CenteredView, ModalView, 
  ButtonsView, 
  Title,
  TasklistInput,
  Select, 
  TitleView} from './styles';
import { StyleSheet, Alert, Modal, TextInput, Text, View, Pressable } from 'react-native';
import { ModalButton } from '../../atoms/ModalButton';
import { TaskListProps } from '../../../contexts/interfaces';
import { CurrentUserDataContext } from '../../../contexts/CurrentUserDataContext';


interface ModalAddTaskProps
{
  modalVisible: boolean,
  setModalVisible: (value: boolean) => void,
}

export default function ModalAddTasklist( {modalVisible, setModalVisible}: ModalAddTaskProps ) 
{
  const currentDataContext = useContext(CurrentUserDataContext);

  const [tasklistTitle, setTasklistTitle] = useState('');
  const [tasklistIconName, setTasklistIconName] = useState('');

  function handleAddTasklist()
  {
    setModalVisible(true);

    let currentData = currentDataContext.currentUserData;
    let tasklist: TaskListProps = {
      iconName: tasklistIconName,
      tasks: [],
      tasksAmount: 0,
      title: tasklistTitle
    }

    if (currentData.tasklists) {
      currentData.tasklists?.push(tasklist);
    } else {
      currentData.tasklists = [tasklist];
    }

    currentDataContext.saveCurrentUserData(currentData);
    setModalVisible(!modalVisible);
    clearDatas();
  }

  function clearDatas()
  {
    setTasklistTitle('');
    setTasklistIconName('');
  }

  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <CenteredView onPress={() => setModalVisible(false)}>
          <ModalView>
            <TitleView>
              <Title>CADASTRAR LISTA</Title>
            </TitleView>

            <Text>Título:</Text>
            <TasklistInput value={tasklistTitle} onChangeText={setTasklistTitle}/>

            <Text>Ícone:</Text>
            <Select
                 onValueChange={(value) => setTasklistIconName(value)}
                 items={[
                     { label: "Calendário", value: "calendar" },
                     { label: "Câmera Retrô", value: "camera-retro" },
                     { label: "Sorriso", value: "face-laugh" },
                     { label: "Lista", value: "list" },
                     { label: "Tag", value: "tag" },
                     { label: "Urgente", value: "exclamation" },
                 ]}
             />
             
            <ButtonsView>
              <ModalButton text='Cancelar' type='cancel' onPress={() => setModalVisible(!modalVisible)}/>
              <ModalButton text='Criar' type='create' onPress={() => handleAddTasklist()}/>
            </ButtonsView>
          </ModalView>
        </CenteredView>
      </Modal>


  );
}
