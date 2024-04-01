import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

import { Container, TaskAmount, TaskListTitle, ViewButtons, ViewIcon, ViewText } from './styles';
import { ButtonAddTask } from '../../atoms/ButtonAddTask';
import { Pressable } from 'react-native';
import { colors } from '../../../palette';

interface TaskListProps
{
  title: string,
  tasksAmount: number,
  iconName: string,
  setModalVisible: (value: boolean) => void,
}

export function TaskList( {title, tasksAmount, iconName, setModalVisible}: TaskListProps ) 
{
  const primaryColor = colors.primary;

  function renderIcon()
  {
    console.log('entrei')
    try {
      return (<Icon name={iconName} size={30} color={"#900"} />)
    }
    catch (e)
    {
      return <Icon name={'users'} size={30} color={"#900"} />;
    }
  }


  return (
    <Container>
      <ViewIcon>
        {renderIcon()}
      </ViewIcon>

      <ViewText>
        <TaskListTitle>{title}</TaskListTitle>
        <TaskAmount>{tasksAmount} Task{tasksAmount > 1 ? 's' : ''}</TaskAmount>
      </ViewText>

      <ViewButtons>
        {/* <ButtonAddTask/>
        <Icon name="ellipsis-v" size={40} color="#900" /> */}
        <Pressable onPress={() => setModalVisible(true)}>
          <Icon name="trash" size={30} color="#900" />
        </Pressable>
        
      </ViewButtons>
      
    </Container>
  );
}