import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

function Chatbot() {
  return (
    <View style={styles.container}>
        <Text style={styles.subtitle}>Chatbot</Text>
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
 

  subtitle: {
    fontSize: 24,
    padding: 24,
    fontWeight: 'bold',
    color:'white',

    
  },
 
});

export default Chatbot;