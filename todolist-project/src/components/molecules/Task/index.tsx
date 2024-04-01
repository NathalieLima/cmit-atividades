import React, { useContext, useState } from 'react';
import { Container, 
    ExperienceView, 
    TaskName, 
    TaskNameContainer,
    ExperienceText,
    TaskInfosView } from './styles';

import { View, Text } from 'react-native';

import Checkbox from 'expo-checkbox';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../../palette';
import { TaskProps } from '../../../contexts/interfaces';
import { CurrentUserDataContext } from '../../../contexts/CurrentUserDataContext';

export function Task(props: TaskProps) 
{
    const currentDataContext = useContext(CurrentUserDataContext);

    const primaryColor = colors.primary;
    const [isChecked, setChecked] = useState(false);

    function handleDoneTask(value: boolean)
    {
        setChecked(value);
        let userData = currentDataContext.currentUserData;
        let task: TaskProps | void = currentDataContext.getTaskByName(props.title);

        if (task) {
            task.done = isChecked;
            currentDataContext.updateTaskInTasklist(task);
        }
    }

  return (
    <Container>
        <TaskInfosView>
            <View>
                <Checkbox
                    value={isChecked}
                    onValueChange={(value) => handleDoneTask(value)}
                    color={isChecked ? primaryColor : 'black'}
                />
            </View>

            <View>
                <Icon name={props.iconName} size={20} color={primaryColor} />
            </View>
            
            <TaskNameContainer>
                
                <TaskName style={{textDecorationLine: (isChecked ? 'line-through' : 'none')}}>{props.title}</TaskName>
            </TaskNameContainer>
        </TaskInfosView>
        
        <ExperienceView>
            <ExperienceText>{props.amountXP}</ExperienceText>
            <ExperienceText>XP</ExperienceText>
        </ExperienceView>
    </Container>
  );
}