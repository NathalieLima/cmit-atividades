import React, { useEffect, useState } from 'react';
// import { Container } from './styles';
import { StyleSheet, Modal, View, Text, TextInput, Alert, Pressable } from 'react-native';
import { ModalButton } from '../../atoms/ModalButton';
import { TaskProps } from '../../../contexts/interfaces';

import Icon from 'react-native-vector-icons/FontAwesome';

interface ModalAddTaskProps
{
  modalVisible: boolean,
  taskObject: TaskProps,
  setModalVisible: (value: boolean) => void,
  setTaskObject: (task: TaskProps) => void,
  handleAddTask: () => void,
}

export default function ModalAddTask( {taskObject, modalVisible, setTaskObject, setModalVisible, handleAddTask}: ModalAddTaskProps ) 
{
    
    const [amountXP, setAmountXP] = useState<number>(0);
    const [taskName, setTaskName] = useState('');
    

    function handleNewTask()
    {
        let taskObjectInput: TaskProps = taskObject;
        taskObject.title = taskName;
        taskObject.amountXP = amountXP;

        setTaskObject(taskObjectInput);
        handleAddTask();
        clearDatas();
    }

    function clearDatas()
  {
    setTaskName('');
    setAmountXP(0);
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
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Icon 
                        onPress={() => setModalVisible(!modalVisible)}
                        name="close" size={20} color="black" style={{alignSelf: 'flex-end'}}
                    />

                    <Text>CADASTRAR TASK</Text>

                    <Text>Título:</Text>
                    <TextInput 
                      value={taskName}
                      onChangeText={(text) => {
                        setTaskName(text);
                    }}
                    ></TextInput>

                    <Text>Data:</Text>
                    <TextInput></TextInput>

                    <Text>Quantidade de XP:</Text>
                    <TextInput
                      value={amountXP.toString()}
                    onChangeText={(text) => {
                        let textParse: number = parseInt(text);
                        setAmountXP(textParse);
                    }}
                    />

                    <View>
                    <ModalButton text='Cancelar' type='cancel' onPress={() => setModalVisible(false)}/>
                    <ModalButton text='Criar' type='create' onPress={handleNewTask}/>
                    </View>
                </View>
            </View>
        </Modal>


    );
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });