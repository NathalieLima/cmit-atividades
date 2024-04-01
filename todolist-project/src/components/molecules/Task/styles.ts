import styled from 'styled-components/native';
import { colors } from '../../../palette'

const primaryColor = colors.primary;

export const Container = styled.View`
  background-color: white;
  border-radius: 10px 5px 5px 10px ;
  flex-direction: row;
  gap: 30px;
  height: 60px;
  /* padding: 10px; */
  border: 1px solid black;
`;

export const TaskName = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: ${primaryColor};
`;

export const TaskNameContainer = styled.View`
  width: 70%;
`;

export const TaskInfosView = styled.View`
  width: 75%;
  gap: 15px;
  flex-direction: row;
  justify-content: center;
  padding-left: 12px;
  align-items: center;
`;

export const ExperienceView = styled.View`
  border-radius: 0px 3px 3px 0px;
  font-weight: 900;
  flex: 1;
  background-color: ${primaryColor};
  justify-content: center;
  align-items: center;
`;

export const ExperienceText = styled.Text`
    color: red;
    font-weight: bold;
`;