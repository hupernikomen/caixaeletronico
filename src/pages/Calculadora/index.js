import { useState, useEffect } from 'react';
import { View, Text, Pressable, Dimensions, TextInput, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather'
import estilo from './estilo';

export default function Calculadora() {

  const { width } = Dimensions.get('window')

  const [digito, setDigito] = useState('')
  const [operacao, setOperacao] = useState([])

  const [continuaSomando, setContinuaSomando] = useState(false)
  const [total, setTotal] = useState('0')

  const navigation = useNavigation()

  const route = useRoute()

  useEffect(Total, [digito, operacao])

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



  function Soma() {
    if (digito == '' || parseFloat(digito) == 0) return

    const ult = digito.slice(-1);

    setContinuaSomando(true)

    if (ult == '.') {

      semPonto = digito.substring(0, digito.toString().length - 1)
      setOperacao(op => [...op, semPonto])

      var arraySemVazios = operacao.filter(function (i) {
        return i;
      });

      setOperacao(arraySemVazios)

    } else {
      setOperacao(op => [...op, digito])

    }

    setDigito('')

  }



  function Total() {
    setContinuaSomando(false)

    if (digito === '.') return

    let novaop = operacao.map(item => {
      return parseFloat(item)
    })

    let total = novaop?.reduce((accumulator, value) => {
      return parseFloat(accumulator) + parseFloat(value)
    }, 0)

    setTotal(digito == '' ? total : total + parseFloat(digito))
  }



  function Apagar() {

    if (!!digito) {
      let apagado = digito.substring(0, digito.toString().length - 1)
      setDigito(apagado)
    }

    let arrnova = [...operacao, digito].filter((item) => item != "")
    arrnova.pop()
    setOperacao(arrnova)

  }


  function Clean() {
    setOperacao([])
    setDigito('')
    setTotal('0')
  }



  return (
    <View style={{ flex: 1 }}>

      <View style={{ flex: .6, paddingHorizontal: 15, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ color: '#222' }}></Text>

        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 30 }}>

          <Feather name={'lock'} color={'#222'} size={20} />
          <Feather name={'file'} color={'#222'} size={20} />
        </View>
      </View>


      <View style={estilo.display}>
        <View style={estilo.info_display}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={<Text style={{ alignSelf: 'center', color: '#222', paddingHorizontal: 5, lineHeight: 35 }}>+</Text>}
            data={operacao}
            renderItem={({ item }) => <Text style={{ color: '#222', fontSize: 18, lineHeight: 35,fontFamily:'Roboto-Regular' }}>{parseFloat(item).toFixed(2).replace('.', ',')}</Text>}
            ListFooterComponent={(!!digito && operacao || !continuaSomando) ?
              <View style={{ flexDirection: 'row' }}>
                {operacao.length !== 0 && <Text style={{ alignSelf: 'center', color: '#222', paddingHorizontal: 5, lineHeight: 35 }}>+</Text>}
                <Text style={{ color: '#222', fontSize: 24,fontFamily:'Roboto-Medium' }}>{digito}</Text>
              </View> :
              <Text style={{ alignSelf: 'center', color: '#222', paddingHorizontal: 5 }}>+</Text>

            }
          />


        </View>

        <Text ellipsizeMode='head' numberOfLines={1} style={estilo.total}>{parseFloat(total).toFixed(2).replace('.', ',')}</Text>
        <Text style={{ alignSelf: 'flex-end', fontSize: 18 }}>{route.params && "Troco: " + parseFloat(route.params - total).toFixed(2)}</Text>
      </View>


      <View style={estilo.linha_config}>

        <Pressable onPress={Clean} style={[estilo.botao_config, { width: (width / 4) }]}>
          <Feather name={'power'} color={'#222'} size={22} />
        </Pressable>

        <Pressable onPress={() => {

          total > 0 && navigation.navigate('Troco', total)
          setContinuaSomando(false)
          Soma()
        }} style={[estilo.botao_config, { width: (width / 4) }]}>
          <Feather name={'repeat'} color={total > 0 ? '#222222' : '#22222220'} size={22} />
        </Pressable>


        <Pressable onPress={Clean} style={[estilo.botao_numero, { width: (width / 4), flex: 1 }]}>
          <Feather name='chevrons-right' size={28} color={total > 0 ? '#558000' : '#55800020'} />
        </Pressable>


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
              {/* <Feather name={'lock-outline'} color={'#222'} size={28} /> */}
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
          <Pressable onPress={Soma} style={[estilo.botao_numero, { width: (width / 4), flex: 3 }]}><Text style={estilo.numero}>+/=</Text></Pressable>
        </View>

      </View>

    </View>
  );
}