import { StyleSheet } from "react-native/"

export default estilo = StyleSheet.create({
  display: {
    backgroundColor: '#222',
    margin: 6,
    borderRadius: 6,
    padding: 10,
    justifyContent: 'center',
    flex:1
  },
  container_botoes_superiores: {
    flexDirection: 'row',
    justifyContent:'space-around',
    flex:.5
  },
  container_calculadora: {
    flexDirection:'row',
    flex:4
  },
  info_display: {
    alignItems: 'flex-end',
  },
  total: {
    color: '#fff',
    alignSelf: 'flex-end',
    fontSize: 60
  },

  botao_superior: {
    flex:.5,
    alignItems:'center',
    paddingTop:10,
    justifyContent:'flex-start', 
  },
  text_botoes: {
    color:'#fff',
  },

  botao_numero: {
    borderWidth:.5,
    borderColor:'#111',
    backgroundColor:'#222',
    alignItems:'center',
    justifyContent:'center',
  },
  botao_config: {
    borderWidth:.5,
    borderColor:'#111',
    alignItems:'center',
    justifyContent:'center',
    flex:1
  },
  txt_config: {
    fontSize:16,
    color:'#fff',
  },
  linha_numeros: {
    flexDirection:'row',
    flex:1
  },
  linha_config: {
    flexDirection:'row',
    flex:.5
    
  },
  numero: {
    color:'#fff',
    fontSize:50
  }
})