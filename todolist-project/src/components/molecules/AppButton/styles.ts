import styled from "styled-components/native";

export const TouchableButton = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    border-radius: 20px;
    border: 2px solid purple;
    background-color: white;
    align-items: center;
    padding: 10px;
    justify-content: center;
`;

export const TextButton = styled.Text`
    font-size: 20px;
    font-weight: bold;
    text-transform: capitalize;
`;