import { useNavigation, useRoute } from "@react-navigation/native";
import { useCallback } from "react";
import { Job } from "../../@types/job";
import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";
import { INavigationProps } from "../RootStackParams";
import {
  Content,
  Description,
  Header,
  Splitter,
  Title,
  Wrapper,
} from "./styles";
import { Linking } from "react-native";

export default function Detail() {
  const route = useRoute();
  const job = route.params as Job;

  const { goBack } = useNavigation<INavigationProps>();

  const handleGoBack = useCallback(() => {
    goBack();
  }, []);

  const openWhatsAppWeb = () => {
    // URL do WhatsApp Web
    const url = 'https://web.whatsapp.com/';

    // Verifica se o Linking é suportado pelo dispositivo
    Linking.canOpenURL(url)
      .then((supported) => {
        if (!supported) {
          console.error("Não é possível abrir o WhatsApp Web.");
        } else {
          // Abre o WhatsApp Web no navegador padrão
          return Linking.openURL(url);
        }
      })
      .catch((err) => console.error('Erro ao tentar abrir o WhatsApp Web:', err));
  };

  return (
    <Wrapper>
      <Header>
        <Button
          noSpacing
          title="< voltar"
          variant="secondary"
          onPress={handleGoBack}
        />
        <Logo />
      </Header>

      <Splitter />

      <Content>
        <Title>{job.titulo}</Title>
        <Description>{job.descricao}</Description>
        <Button title="Entrar em contato" onPress={openWhatsAppWeb} />
      </Content>
    </Wrapper>
  );
}
