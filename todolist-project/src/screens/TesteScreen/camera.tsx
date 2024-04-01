import React, { useState } from 'react';
import { View, Image, Button } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const SeuComponente = () => {
  const [imagemSelecionada, setImagemSelecionada] = useState(null);

  const selecionarImagem = () => {
    ImagePicker.showImagePicker({ title: 'Selecione uma foto' }, (response) => {
      if (response.didCancel) {
        console.log('Usuário cancelou a seleção de imagem');
      } else if (response.error) {
        console.error('Erro ao selecionar imagem:', response.error);
      } else {
        setImagemSelecionada(response.uri);
      }
    });
  };

  return (
    <View>
      {imagemSelecionada && <Image source={{ uri: imagemSelecionada }} style={{ width: 200, height: 200 }} />}
      <Button title="Selecionar Foto" onPress={selecionarImagem} />
    </View>
  );
};

export default SeuComponente;
