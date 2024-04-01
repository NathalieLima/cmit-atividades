import React, { useState } from 'react';

import { AppLogoContainer, StyledMainBackground, MainContainer, AppBigLogoStyle } from './styles';
import { AppButton } from '../../components/molecules/AppButton';
import { NightModeIcon } from '../../components/atoms/NightModeIcon';

export default function InitialScreen() 
{
    return (
      <StyledMainBackground>
        <AppLogoContainer>
          <NightModeIcon/>
        </AppLogoContainer>

        <MainContainer>
          <AppBigLogoStyle/>
          
          <AppButton text="Login"/>
          <AppButton text="Inscrever-se"/>
        </MainContainer>
    </StyledMainBackground>
  );
}
