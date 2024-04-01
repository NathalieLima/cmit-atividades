import styled from 'styled-components/native';

interface StyledTextProps {
    customColor: string,
    onPress: () => void,
  }

export const PressableStyle = styled.Pressable<StyledTextProps>`
  border: 3px solid black;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 120px;
  background-color: ${ ({customColor}) => customColor };
  
`;

  /* ${ ({backgroundColor}) => backgroundColor } */

export const TextStyle = styled.Text`
    font-weight: 600;
    font-size: 17px;
`;
