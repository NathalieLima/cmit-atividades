import styled from 'styled-components/native';

// reutilizar propriedades, como aplicar a mesma cor a todos

export const Container = styled.View`
  background-color: white;
  gap: 10px;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  box-shadow: 10px 5px 5px black;
  padding: 20px;
  border: 1px solid black;
  border-radius: 10px;
  
`;

export const ViewIcon = styled.View`
  width: 15%;
`;

export const ViewText = styled.View`
  flex: 4;
`;

export const ViewButtons = styled.View`
  flex: 1;
  flex-direction: row;
  gap: 25px;
  justify-content: center;
  align-items: center;

`;

export const TaskListTitle = styled.Text`
  font-size: 25px;
  font-weight: 500;
`;

export const TaskAmount = styled.Text`

`;