import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.divtesto}>
      <View style={styles.header}>
        <Text style={styles.subtitle}>Para tocar o inacessível chão
                                    é necessario a imensurável compreensão.</Text>
      </View>
        <Image style={{
         position:"absolute",
         marginTop:130,
         marginLeft:20,
          }}
          source={require('../assets/images/Group 37.png')}></Image>
          <Image style={{
         position:'absolute',
         marginTop: 650,
         marginLeft: 90
         
    
          }}
          source={require('../assets/images/Ellipse 62.png')}></Image>

          <Image style={{
         position:'absolute',
         marginTop: 210,
         marginLeft: 145
        }}
          source={require('../assets/images/shine-sansevieria-plant-in-orange-pot 1.png')}></Image>
      </View>

    
     
      <View style={styles.botaos}>
      <TouchableOpacity style={[styles.botao, styles.shadowBotao]}>
        <Text style={styles.botaotext}>MarketPlace</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.botao, styles.shadowBotao]}>
        <Text style={styles.botaotext}>ChatBot</Text>
      </TouchableOpacity>
        </View>
      </View>

);


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    alignItems: "center",
    marginTop: 10,
    padding: 24,
   
  },
  main: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: "auto",
  },
  divtesto: {
    height:652,
    backgroundColor:'#A1C130',
    borderRadius: 24,
  },

  subtitle: {
    fontSize: 24,
    padding: 24,
    fontWeight: 'bold',
    color:'white',

    
  },
  header: {
    flex:1,

  },
  botaos:{
    flex:1,
    flexDirection:"row",
    alignItems: "center",
  
  },

  botao:{
    width:150,
    marginHorizontal:42,
    height:73,
    flex:1,
    flexDirection:"row",
    borderRadius: 24,
    backgroundColor: "#DC9100",
    alignItems: "center",
    justifyContent: "center"
    
    
  },
  shadowBotao: {
    shadowColor: '#171717',
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  botaotext:{
    fontWeight: 'bold',
    color:'white',
    fontSize: 18,
  }
});
