import React, { useContext } from 'react';
import { Image } from 'react-native';
import { Container, ExperienceAmount, UserBorder } from './styles';
import UserImage from './user-image.png'
import { CurrentUserDataContext } from '../../../contexts/CurrentUserDataContext';

// import Icon from 'react-native-vector-icons/FontAwesome';

export function UserIcon() {

  const currentUserData = useContext(CurrentUserDataContext);

  return (
      <Container>
        <UserBorder>
          <Image source={UserImage} style={{maxWidth: '100%', maxHeight: '100%',}}></Image>
        </UserBorder>
        
        <ExperienceAmount>{currentUserData.currentUserData.userXP} XP</ExperienceAmount>
      </Container>
  );
}