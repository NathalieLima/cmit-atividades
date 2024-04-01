import styled from 'styled-components/native';
import MainBackground from '../../components/organisms/MainBackground';

export const BackgroundScreen = styled(MainBackground)`
  flex: 1;
  justify-content: center;
  padding: 80px 40px;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const UserContainer = styled.View`
  flex-direction: row;
  height: 30%;
`;

export const ViewMenu = styled.View`
  margin-top: 70px;
`;

export const ViewText = styled.View`
  margin-top: 80px;
  margin-left: 20px;
  flex: 1;
`;

export const ViewRight = styled.View`
  gap: 40px;
`;

export const Teste = styled.View`
  flex: 1;
`;

export const StrongText = styled.Text`
  font-size: 30px;
  font-weight: 500;
`;

export const TasklistsView = styled.ScrollView`
  flex: 1;
  margin-top: 20px;
  gap: 30px;
  /* align-items: center; */
`;