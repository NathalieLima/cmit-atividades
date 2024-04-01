import styled from 'styled-components/native';
import MainBackground from '../MainBackground';
import RNPickerSelect from "react-native-picker-select";

interface Props{
  onPress: () => void,
}

export const CenteredView = styled.View<Props>`
  background-color: #CDCDCD9F;
  justify-content: center;
  margin-top: 22px;
  flex: 1;
  padding: 10px;
`;

export const ModalView = styled(MainBackground)`
  margin: 20px;
  /* background-color: white; */
  border-radius: 20px;
  /* padding: 35px; */
  height: 40%;
  border: 4px solid black;
  justify-content: center;
  gap: 20px;
`;

export const ButtonsView = styled.View`
  flex-direction: row;
  gap: 20px;
  justify-content: center;
`;

export const TitleView = styled.View`
  border-bottom-width: 3px;
  /* padding: 25px; */
  justify-content: center;
  text-align: center;
  padding: 20px;
`;

export const Title = styled.Text`
  /* margin-top: 20px; */
  font-weight: bold;
  font-size: 24px;
  border: 1px solid black;
  text-align: center;
`;

export const TasklistInput = styled.TextInput`
  border-bottom-width: 1px;
`;

export const Select = styled(RNPickerSelect)`
  border: 1px solid black;
  background-color: white;
`;