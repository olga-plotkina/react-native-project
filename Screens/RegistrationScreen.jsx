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
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

import { authSignUpUser } from "../redux/auth/authOperations";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export default RegistrationScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  const dispatch = useDispatch();

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    setState(initialState);
  };

  const handleSubmit = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    dispatch(authSignUpUser(state));
    setState(initialState);
    navigation.navigate("Posts");
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
              ...styles.registration,
              marginTop: isShowKeyboard ? 147 : 263,
            }}
          >
            <View style={styles.addPhotoSquare}>
              <AntDesign
                style={styles.addPhotoCrossIcon}
                name="pluscircleo"
                size={22}
                color="#FF6C00"
              />
            </View>
            <Text style={styles.title}>Реєстрація</Text>
            <View style={styles.form}>
              <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
              >
                <TextInput
                  placeholder="Логін"
                  value={state.login}
                  style={styles.input}
                  onFocus={() => setIsShowKeyboard(true)}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, login: value }))
                  }
                />
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
                onPress={handleSubmit}
              >
                <Text style={styles.btnText}> Зареєструватися </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.questionText}>Вже є акаунт? Увійти</Text>
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
  registration: {
    position: "relative",
    flex: 1,
    alignItems: "center",
    paddingTop: 92,
    paddingBottom: 78,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  addPhotoSquare: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  addPhotoCrossIcon: { position: "absolute", top: 80, left: 107 },
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
