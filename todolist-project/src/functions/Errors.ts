import { Alert } from "react-native";

export class ErrorUserCreate extends Error 
{
    title: string = '';

    constructor(mensagem: string) {
      super(mensagem);
      this.title = 'Erro ao criar usuário';
      this.name = 'ErrorUserCreate'; 
    }
  }

export function ErrorAlert(error: Error | any)
{
    if (error instanceof ErrorUserCreate) {
        return Alert.alert(error.title, error.message); 
        } else {
        return Alert.alert('ERRO', error.message); 
    }
}