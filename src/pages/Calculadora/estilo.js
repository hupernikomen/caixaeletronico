import { StyleSheet } from "react-native/"

export default estilo = StyleSheet.create({
  display: {
    borderRadius: 6,
    paddingHorizontal: 15,
    justifyContent: 'center',
    flex: 1.5
  },

  container_calculadora: {
    flexDirection: 'row',
    flex: 4
  },
  info_display: {
    alignItems: 'flex-end',
    height: 35
  },
  total: {
    color: '#222',
    alignSelf: 'flex-end',
    fontSize: 60,
    lineHeight: 60,
    height:60,
    marginTop:5,
    fontFamily:'Roboto-Medium'
  },

  text_botoes: {
    color: '#222',
  },

  botao_numero: {
    borderWidth: .5,
    borderRadius: 8,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao_config: {
    backgroundColor: '#fff',
    borderWidth: .5,
    borderRadius: 8,
    borderColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    gap: 15
  },
  linha_numeros: {
    flexDirection: 'row',
    flex: 1
  },
  linha_config: {
    flexDirection: 'row',
    flex: .5,

  },
  numero: {
    color: '#222',
    fontSize: 30,
    fontFamily:'Roboto-Regular'
  }
})