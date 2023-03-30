import React from "react";
import { StyleSheet, View, ImageBackground, Keyboard } from "react-native";

export default RegistrationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../assets/background.jpg")}
      ></ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
});
