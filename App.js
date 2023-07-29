import { StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import RotasStack from './src/rotas';

const Theme = {
  dark: true,
  ...DefaultTheme,
  colors: {

    background: '#181818',
    primeira: '#181818',
    segunda: '#0071bc',
    terceira: '#f77c1e'
  },
  app: {
    icone: 22,
    tema: '#181818',
    texto: '#fff',
  },
  admin: {
    tema: '#fff',
    texto: "#000",
    botao: '#a82424',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={Theme}>


      <StatusBar
        backgroundColor={Theme.app.tema}
        translucent={false} />
      <RotasStack />


    </NavigationContainer>
  );
}