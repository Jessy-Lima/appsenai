import { StyleSheet, Text, View, Button, Alert } from "react-native";

export default function HomeScreen() {
  return (

    <View style={styles.container} >

      <Text style={styles.title}>Meu Primeiro app no Celular</Text>

      <Text> React Native </Text>

      <View>
        <Text style={styles.buttonArea}></Text>
        <Button
        title = "Clique Aqui"
        onPress={() => Alert.alert("Parabéns", "O botão funcionou!")}
        />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff"
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000000"
  },

  buttonArea: {
    marginTop: 20, 
    width: 20,
    color: "#FFB6C1"
  }

});