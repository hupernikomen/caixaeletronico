import { useState, useEffect, useMemo } from 'react';
import { View, Text, Pressable, Dimensions, ScrollView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import estilo from './estilo';

export default function Calculadora() {

  const { width } = Dimensions.get('window')

  const navigation = useNavigation()

  const [digito, setDigito] = useState('')
  const [operacao, setOperacao] = useState([])

  const [somar, setSomar] = useState(false)

  const total = useMemo(() => {
    var sum = operacao?.reduce((accumulator, value) => { return accumulator + value }, 0);
    return(sum + digito)
  },[digito, operacao])

  useEffect(() => {
    setSomar(false)
  }, [digito])

  function Acumulador(num) {
    let acumulo = digito + String(num)
    setDigito(parseFloat(acumulo))
  }



  function Ponto() {
    let num = digito + "."
    setDigito(String(num))
  }



  function Soma() {

    setSomar(true)

    if (digito == "") return

    const ult = digito.toString().slice(-1);

    if (ult == '.') {
      semPonto = digito.toString().substring(0, digito.toString().length - 1)
      setOperacao(op => [...op, parseInt(semPonto)])

    } else {
      setOperacao(op => [...op, digito])
    }

    setDigito('')

  }



  function Apagar() {

    if (!!digito) {
      let apagado = digito.toString().substring(0, digito.toString().length - 1)
      setDigito(apagado)
    }

    let arrnova = [...operacao, digito].filter((item) => item != "")
    arrnova.pop()
    setOperacao(arrnova)

  }


  function Clean() {
    setOperacao([])
  }



  return (
    <View style={{
      flex: 1,
    }}>
      <View style={estilo.display}>
        <View style={estilo.info_display}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ alignItems: 'center' }}
            ItemSeparatorComponent={<Text style={{ alignSelf: 'center', color: '#fff', paddingHorizontal: 5 }}>+</Text>}
            data={operacao}
            renderItem={({ item }) => <Text style={{ color: '#fff', fontSize: 22 }}>{item}</Text>}
            ListFooterComponent={(!!digito && operacao.length !== 0 || !somar) ?
              <View style={{ flexDirection: 'row' }}>
                {operacao.length !== 0 && <Text style={{ alignSelf: 'center', color: '#fff', paddingHorizontal: 5 }}>+</Text>}
                <Text style={{ color: '#fff', fontSize: 22 }}>{digito}</Text>
              </View> :
              <Text style={{ alignSelf: 'center', color: '#fff', paddingHorizontal: 5 }}>+</Text>

            }
          />

        </View>

        <Text style={estilo.total}>{total}</Text>
      </View>

      <View>

        <View style={estilo.container_botoes_superiores}>
          <Pressable onPress={() => navigation.navigate('Troco')} style={estilo.botao_superior}><Text style={estilo.text_botoes}>Troco</Text></Pressable>
          <Pressable onPress={() => navigation.navigate('Historico')} style={estilo.botao_superior}><Text style={estilo.text_botoes}>Historico</Text></Pressable>
        </View>

      </View>

      <View style={estilo.container_botoes}>
        <View style={{ flex: 3, justifyContent: 'space-between' }}>

          <View style={estilo.linha_config}>
            <Pressable onPress={() => Acumulador(7)} style={[estilo.botao_numero, { width: (width / 4) - 6, aspectRatio: 1, }]}><Text style={estilo.numero}>*</Text></Pressable>
            <Pressable onPress={() => Acumulador(8)} style={[estilo.botao_numero, { width: (width / 4) - 6, aspectRatio: 1, }]}><Text style={estilo.numero}>*</Text></Pressable>
            <Pressable style={[estilo.botao_numero, { width: (width / 4) - 6, aspectRatio: 1, }]}><Text style={estilo.numero}>*</Text></Pressable>
          </View>

          <View style={{ gap: 6 }}>


            <View style={estilo.linha_numeros}>
              <Pressable onPress={() => Acumulador(7)} style={[estilo.botao_numero, { width: (width / 4) - 6, aspectRatio: 1, }]}><Text style={estilo.numero}>7</Text></Pressable>
              <Pressable onPress={() => Acumulador(8)} style={[estilo.botao_numero, { width: (width / 4) - 6, aspectRatio: 1, }]}><Text style={estilo.numero}>8</Text></Pressable>
              <Pressable onPress={() => Acumulador(9)} style={[estilo.botao_numero, { width: (width / 4) - 6, aspectRatio: 1, }]}><Text style={estilo.numero}>9</Text></Pressable>
            </View>
            <View style={estilo.linha_numeros}>
              <Pressable onPress={() => Acumulador(4)} style={[estilo.botao_numero, { width: (width / 4) - 6, aspectRatio: 1, }]}><Text style={estilo.numero}>4</Text></Pressable>
              <Pressable onPress={() => Acumulador(5)} style={[estilo.botao_numero, { width: (width / 4) - 6, aspectRatio: 1, }]}><Text style={estilo.numero}>5</Text></Pressable>
              <Pressable onPress={() => Acumulador(6)} style={[estilo.botao_numero, { width: (width / 4) - 6, aspectRatio: 1, }]}><Text style={estilo.numero}>6</Text></Pressable>
            </View>
            <View style={estilo.linha_numeros}>
              <Pressable onPress={() => Acumulador(1)} style={[estilo.botao_numero, { width: (width / 4) - 6, aspectRatio: 1, }]}><Text style={estilo.numero}>1</Text></Pressable>
              <Pressable onPress={() => Acumulador(2)} style={[estilo.botao_numero, { width: (width / 4) - 6, aspectRatio: 1, }]}><Text style={estilo.numero}>2</Text></Pressable>
              <Pressable onPress={() => Acumulador(3)} style={[estilo.botao_numero, { width: (width / 4) - 6, aspectRatio: 1, }]}><Text style={estilo.numero}>3</Text></Pressable>
            </View>
            <View style={estilo.linha_numeros}>
              <Pressable onPress={Ponto} style={[estilo.botao_numero, { width: (width / 4) - 6, aspectRatio: 1, }]}><Text style={estilo.numero}>.</Text></Pressable>
              <Pressable onPress={() => Acumulador(0)} style={[estilo.botao_numero, { width: (width / 4) - 6, aspectRatio: 1, }]}><Text style={estilo.numero}>0</Text></Pressable>
              <Pressable onPress={Clean} style={[estilo.botao_numero, { width: (width / 4) - 6, aspectRatio: 1, }]}><Text style={estilo.numero}>C</Text></Pressable>
            </View>
          </View>
        </View>

        <View style={{ flex: 1, gap: 6 }}>

          <Pressable onPress={Apagar} style={[estilo.botao_numero, { width: (width / 4) - 6, }]}><Text style={estilo.numero}>u</Text></Pressable>
          <Pressable style={[estilo.botao_numero, { width: (width / 4) - 6, }]}><Text style={estilo.numero}>*</Text></Pressable>
          <Pressable style={[estilo.botao_numero, { width: (width / 4) - 6, }]}><Text style={estilo.numero}>*</Text></Pressable>
          <Pressable onPress={Soma} style={[estilo.botao_numero, { width: (width / 4) - 6, flex: 2 }]}><Text style={estilo.numero}>+</Text></Pressable>
        </View>
      </View>
    </View>
  );
}