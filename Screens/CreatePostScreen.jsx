import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

const initialState = {
  image: "",
  title: "",
  location: "",
};

const inputLocationPlaceholder = () => {
  return <SimpleLineIcons name="location-pin" size={24} color="#BDBDBD" />;
};
export default CreatePostScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Створити публікацію</Text>
        </View>
        <View style={styles.form}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={styles.addPhotoPlace}>
              <View style={styles.addPhotoRectangle}>
                <TouchableOpacity
                  style={styles.addPhotoBtn}
                  activeOpacity={0.8}
                >
                  <FontAwesome name="camera" size={20} color="#BDBDBD" />
                </TouchableOpacity>
              </View>
              <Text style={styles.addPhotoText}>Завантажте фото</Text>
            </View>
            <TextInput
              placeholder="Назва"
              value={state.title}
              style={{ ...styles.input, marginTop: 32 }}
              onFocus={() => setIsShowKeyboard(true)}
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, title: value }))
              }
            />
            <View style={styles.locationInput}>
              <SimpleLineIcons
                style={styles.locationIcon}
                name="location-pin"
                size={20}
                color="#BDBDBD"
              />
              <TextInput
                placeholder="Місцевість..."
                value={state.location}
                style={{ ...styles.input, marginLeft: 28, marginTop: 16 }}
                onFocus={() => setIsShowKeyboard(true)}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, location: value }))
                }
              />
            </View>
          </KeyboardAvoidingView>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.btn}
            onPress={keyboardHide}
          >
            <Text style={styles.btnText}> Опублікувати </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}></View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingLeft: 16,
    paddingRight: 16,
  },
  header: {
    width: 365,
    height: 88,
    paddingTop: 55,
    paddingBottom: 11,
  },
  title: {
    fontFamily: "Roboto-Medium",
    color: "#212121",
    textAlign: "center",
    fontSize: 17,
  },
  form: { marginTop: 32 },
  addPhotoPlace: {},
  addPhotoRectangle: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 240,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
  },
  addPhotoBtn: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: "50%",
    backgroundColor: "#FFF",
  },
  addPhotoText: {
    marginTop: 8,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#BDBDBD",
  },
  input: {
    fontFamily: "Roboto-Regular",
    width: 343,
    height: 50,
    paddingTop: 16,
    paddingBottom: 15,
    borderBottomColor: "#E8E8E8",
    color: "#212121",
    fontSize: 16,
    borderRadius: 8,
  },
  locationInput: { position: "relative" },
  locationIcon: { position: "absolute", top: 30 },
  btn: {
    marginTop: 32,
    height: 51,
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: { fontFamily: "Roboto-Regular", fontSize: 16 },
  footer: { width: 375, height: 83, backgroundColor: "#FFF" },
});
