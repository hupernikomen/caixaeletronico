import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Calculadora from '../pages/Calculadora';
import Troco from '../pages/Troco';
import Historico from '../pages/Historico';

const Stack = createNativeStackNavigator()

export default function RotasStack() {

  return (
    <Stack.Navigator
      initialRouteName={'Calculadora'}
      screenOptions={{
        orientation: 'portrait'
      }} >

      <Stack.Screen
        name='Calculadora'
        component={Calculadora}
        options={{
          headerShown:false
        }}
        />
      <Stack.Screen
        name='Troco'
        component={Troco}
        options={{
          title:'Informe o Valor Recebido...',
          headerShadowVisible:false,
          headerStyle:{
            backgroundColor:'#f9f9f9'
          }
        }}
      />
      <Stack.Screen
        name='Historico'
        component={Historico}

      />

    </Stack.Navigator>
  )

}