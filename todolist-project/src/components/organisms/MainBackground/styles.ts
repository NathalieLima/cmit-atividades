import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

interface Props {
    backgroundColor?: string
}

export const LinearContainer = styled(LinearGradient)<Props>`
    background-color: ${ ({backgroundColor}) => backgroundColor };
`;