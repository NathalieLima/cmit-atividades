import React from 'react';
import { View, TextInput } from 'react-native';
import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBarContainer = styled(View)`
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 5px;
  margin: 10px;
  flex-direction: row;
  gap: 15px;
  align-items: center;
`;

const SearchInput = styled(TextInput)`
  height: 40px;
  color: #333;
`;

interface SearchBarProps
{
  placeholder: string, 
  onChangeText: (text: string) => void, 
  value: string,
}

const SearchBar = ({ placeholder, onChangeText, value }: SearchBarProps) => {
  return (
    <SearchBarContainer>
      <Icon name="search" size={22} color="black" />
      <SearchInput
        placeholder={placeholder}
        placeholderTextColor="#999"
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
