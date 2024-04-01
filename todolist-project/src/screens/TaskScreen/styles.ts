import styled from 'styled-components/native';
import MainBackground from '../../components/organisms/MainBackground';

export const Container = styled(MainBackground)`
  flex: 1;
  gap: 30px;
  padding: 90px 30px;
`;

export const HeaderView = styled.View`
  justify-content: space-between;
  gap: 25px;
`;



export const NightModeView = styled.View`
  /* align-items: flex-end; */
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ReturnView = styled.View`
  align-items: start;
`;

export const TasklistView = styled.View`
    flex-direction: row;
    gap: 20px;
    align-items: center;
    justify-content: space-around;
`;

export const TitleView = styled.View`
  margin-right: 30px;
`

export const TextTitle = styled.Text`
  font-size: 32px;
  font-weight: 700;
`;

export const ModalTest = styled.Modal`
  background-color: white;
  height: 200px;
  width: 200px;
`;

export const TaskAddView = styled.View`
  border: 2px solid red;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  background-color: white;
  align-items: center;
`;



export const TaskLabel = styled.Text`
  font-weight: 400;
  font-size: 20px;
`;

export const ButtonsView = styled.View`
  flex-direction: row;
  gap: 20px;
`;

export const TasksView = styled.ScrollView`
`;