import styled from 'styled-components/native';
import { colors } from '../../palette';

let primaryColor: string = colors.primary;

export const Container = styled.View`
    flex-direction: row;
    gap: 10px;
    align-items: center;
`;

export const TextInput = styled.TextInput`
    flex: 1;
    /* border-width: 1px 0px;a */
    border-bottom-width: 1px;
    font-style: italic;
    color: ${primaryColor};
    padding: 5px 10px;
    font-size: 20px;
`;