import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Button,
} from "react-native";

const initialState = {
  email: "",
  password: "",
};

export default LoginScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <ImageBackground
          style={styles.image}
          source={require("../assets/background.jpg")}
        >
          <View
            style={{
              ...styles.login,
              marginTop: isShowKeyboard ? 273 : 323,
            }}
          >
            <Text style={styles.title}>Увійти</Text>

            <View style={styles.form}>
              <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
              >
                <TextInput
                  placeholder="Адреса електронної пошти"
                  value={state.email}
                  style={styles.input}
                  onFocus={() => setIsShowKeyboard(true)}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                />
                <TextInput
                  secureTextEntry={true}
                  value={state.password}
                  placeholder="Пароль"
                  style={styles.input}
                  onFocus={() => setIsShowKeyboard(true)}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
                />
              </KeyboardAvoidingView>

              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btn}
                onPress={keyboardHide}
              >
                <Text style={styles.btnText}> Увійти </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("Registration")}
            >
              <Text style={styles.questionText}>
                Нема акаунта? Зареєструватися
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
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
  login: {
    flex: 1,
    alignItems: "center",
    paddingTop: 32,
    paddingBottom: 144,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    fontFamily: "Roboto-Medium",
    marginBottom: 17,
    color: "#212121",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  form: { paddingHorizontal: 16, marginBottom: 16 },
  input: {
    fontFamily: "Roboto-Regular",
    marginTop: 16,
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 15,
    paddingRight: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    color: "#212121",
    fontSize: 16,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    width: 343,
    height: 50,
  },
  btn: {
    marginTop: 43,
    height: 51,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#FFFFFF",
  },
  questionText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#1B4371",
  },
});
