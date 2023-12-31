import { StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import RotasStack from './src/rotas';

const Theme = {
  dark: true,
  ...DefaultTheme,
  colors: {

    background: '#f9f9f9',
    primeira: '#1d2c32',
    segunda: '#0071bc',
    terceira: '#f77c1e'
  },
  app: {
    icone: 22,
    tema: '#292a2b',
    texto: '#222',
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