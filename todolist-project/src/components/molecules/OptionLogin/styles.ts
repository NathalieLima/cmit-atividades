import styled, { css } from 'styled-components/native';
import { colors } from '../../../palette';

interface StyledTextProps {
    customColor: string,
  }

  let teste1: string;
teste1 = colors.primary;
  
  export const StyledText = styled.Text<StyledTextProps>`
    color: ${teste1};
    font-weight: bold;
    font-size: 18px;
  `;