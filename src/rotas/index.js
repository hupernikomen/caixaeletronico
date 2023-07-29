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
          headerShown:false
        }}
      />
      <Stack.Screen
        name='Historico'
        component={Historico}

      />

    </Stack.Navigator>
  )

}