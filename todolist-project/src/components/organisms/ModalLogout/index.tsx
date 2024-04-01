import React from 'react';
// import { Container } from './styles';
import { StyleSheet, Modal, View, Alert, Text, Pressable } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

interface ModalLogoutProps
{
  modalVisible: boolean,
  setModalVisible: (value: boolean) => void,
  handleLogoutApp: () => void,
}

export default function ModalLogout( {modalVisible, setModalVisible, handleLogoutApp}: ModalLogoutProps )
{
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
                name="close" size={20} color="#900" style={{color: 'black', alignSelf: 'flex-end'}}
            />
            <Text style={styles.modalText}>Deseja sair?</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={handleLogoutApp}>
              <Text style={styles.textStyle}>Sair do aplicativo</Text>
            </Pressable>
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
      backgroundColor: '#f32121',
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