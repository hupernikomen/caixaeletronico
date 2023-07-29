import { StyleSheet } from "react-native/"

export default estilo = StyleSheet.create({
  display: {
    backgroundColor: '#303030',
    margin: 6,
    height: 120,
    borderRadius: 6,
    paddingHorizontal: 10,
    justifyContent: 'center',
    flex:1
  },
  container_botoes_superiores: {
    flexDirection: 'row',
    justifyContent:'space-around'
  },
  container_botoes: {
    flexDirection:'row',
    flex:5,
    padding:6,
    gap:6
  },
  info_display: {
    alignItems: 'flex-end',
  },
  total: {
    color: '#fff',
    alignSelf: 'flex-end',
    fontSize: 55
  },

  botao_superior: {
    flex:3,
    alignItems:'center',
    justifyContent:'center', 
    height:50
  },
  text_botoes: {
    color:'#fff'
  },

  botao_numero: {
    borderWidth:.5,
    borderColor:'#303030',
    alignItems:'center',
    justifyContent:'center',
    flex:1
  },
  linha_numeros: {
    flexDirection:'row',
    gap:6
  },
  linha_config: {
    flexDirection:'row',
    gap:6
    
  },
  numero: {
    color:'#fff',
    fontSize:50
  }
})