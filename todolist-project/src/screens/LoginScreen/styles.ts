import styled from 'styled-components/native';
import MainBackground from '../../components/organisms/MainBackground';
import { AppLogo } from '../../components/atoms/AppLogo';


export const StyledMainBackground = styled(MainBackground)`
  flex: 1;
  gap: 30px;
  justify-content: center;
  align-items: center;
  height: 400px;
  padding: 40px;
`;

export const TouchableIcon = styled.TouchableOpacity`
  align-items: flex-end;
  width: 100%;
  margin-bottom: 40px;
`;

export const AppLogoView = styled.View`
  margin-bottom: 30px;
`

export const Container = styled.View`
  flex: 1;
`;

export const InputsView = styled.View`
  gap: 30px;
  width: 100%;
`;

export const ShowPasswordView = styled.View`
  flex-direction: row;
  gap: 10px;
  align-self: flex-start;
`;

export const OptionsView = styled.View`
  flex-direction: row;
  gap: 50px;
  justify-content: center;
`;

