import { useState } from 'react'
import { View, Text, Pressable, Dimensions } from 'react-native';

import { useRoute, useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather'

import estilo from './estilo';

export default function Troco() {
  const [digito, setDigito] = useState('0')

  const navigation = useNavigation()

  const { width } = Dimensions.get('window')
  const route = useRoute()

  // Digitação de numero e simbolos
  function Acumulador(tecla) {

    if (tecla === '.' && digito === "") {

      let acumulo = digito + '0' + tecla
      setDigito(acumulo)
    } else {
      let acumulo = digito + tecla
      setDigito(acumulo)

    }

  }


  function Apagar() {

    if (!!digito) {
      let apagado = digito.toString().substring(0, digito.toString().length - 1)
      setDigito(apagado)
    }



  }


  function Clean() {
    setOperacao([])
    setDigito('')
    setTotal('0')
  }



  return (
    <View style={{ flex: 1 }}>

      <View style={estilo.display}>

          <Text>Recebido:</Text>
          <Text ellipsizeMode='head' numberOfLines={1} style={estilo.total}>{parseFloat(digito).toFixed(2).replace('.', ',')}</Text>

      </View>

      <View style={estilo.linha_config}>


      </View>


      <View style={estilo.container_calculadora}>
        <View style={{ flex: 3, justifyContent: 'space-between' }}>


          <View style={estilo.linha_numeros}>
            <Pressable onPress={() => Acumulador('7')} style={[estilo.botao_numero, { width: (width / 4) }]}>
              <Text style={estilo.numero}>7</Text>
            </Pressable>

            <Pressable onPress={() => Acumulador('8')} style={[estilo.botao_numero, { width: (width / 4) }]}>
              <Text style={estilo.numero}>8</Text>
            </Pressable>

            <Pressable onPress={() => Acumulador('9')} style={[estilo.botao_numero, { width: (width / 4) }]}>
              <Text style={estilo.numero}>9</Text>
            </Pressable>

          </View>

          <View style={estilo.linha_numeros}>
            <Pressable onPress={() => Acumulador('4')} style={[estilo.botao_numero, { width: (width / 4) }]}>
              <Text style={estilo.numero}>4</Text>
            </Pressable>

            <Pressable onPress={() => Acumulador('5')} style={[estilo.botao_numero, { width: (width / 4) }]}>
              <Text style={estilo.numero}>5</Text>
            </Pressable>

            <Pressable onPress={() => Acumulador('6')} style={[estilo.botao_numero, { width: (width / 4) }]}>
              <Text style={estilo.numero}>6</Text>
            </Pressable>

          </View>

          <View style={estilo.linha_numeros}>
            <Pressable onPress={() => Acumulador('1')} style={[estilo.botao_numero, { width: (width / 4) }]}>
              <Text style={estilo.numero}>1</Text>
            </Pressable>

            <Pressable onPress={() => Acumulador('2')} style={[estilo.botao_numero, { width: (width / 4) }]}>
              <Text style={estilo.numero}>2</Text>
            </Pressable>

            <Pressable onPress={() => Acumulador('3')} style={[estilo.botao_numero, { width: (width / 4) }]}>
              <Text style={estilo.numero}>3</Text>
            </Pressable>

          </View>

          <View style={estilo.linha_numeros}>
            <Pressable onPress={{ Clean }} style={[estilo.botao_numero, { width: (width / 4) }]}>
            </Pressable>

            <Pressable onPress={() => Acumulador('0')} style={[estilo.botao_numero, { width: (width / 4) }]}>
              <Text style={estilo.numero}>0</Text>
            </Pressable>

            <Pressable onPress={() => Acumulador('.')} style={[estilo.botao_numero, { width: (width / 4) }]}>
              <Text style={estilo.numero}>,</Text>
            </Pressable>

          </View>
        </View>

        <View style={{ flex: 1 }}>

          <Pressable onPress={Apagar} style={[estilo.botao_numero, { width: (width / 4), flex: 1 }]}>
            <Feather name={'delete'} color={'#222'} size={22} />
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Calculadora', digito)} style={[estilo.botao_numero, { width: (width / 4), flex: 3 }]}>
            <Feather name={'chevrons-left'} color={'#222'} size={28} />
            
          </Pressable>
        </View>

      </View>
    </View>
  );
}