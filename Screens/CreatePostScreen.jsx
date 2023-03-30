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
import { Camera } from "expo-camera";
import * as Location from "expo-location";
import { FontAwesome } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const initialState = {
  image: "",
  title: "",
  location: "",
};

export default CreatePostScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState("");

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
    navigation.navigate("Posts", { image });
  };

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    const location = await Location.getCurrentPositionAsync();
    console.log(location);
    setImage(photo.uri);
  };

  const sendPost = () => {
    console.log(navigation);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <View style={styles.form}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={styles.addPhotoPlace}>
              <Camera style={styles.addPhotoRectangle} ref={setCamera}>
                {image && (
                  <View style={styles.takenPhoto}>
                    <Image
                      style={{
                        height: 240,
                        width: 200,
                        borderRadius: 8,
                      }}
                      source={{ uri: image }}
                    />
                  </View>
                )}
                <TouchableOpacity
                  onPress={takePhoto}
                  style={styles.addPhotoBtn}
                  activeOpacity={0.8}
                >
                  <FontAwesome name="camera" size={20} color="#BDBDBD" />
                </TouchableOpacity>
              </Camera>
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
        <View style={styles.footer}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              width: 70,
              height: 40,
              backgroundColor: "#F6F6F6",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 20,
            }}
          >
            <AntDesign name="delete" size={21} color="#BDBDBD" />
          </TouchableOpacity>
        </View>
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
    justifyContent: "space-between",
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
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 240,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
  },
  takenPhoto: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: 240,
    borderRadius: 8,
    borderColor: "white",
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
  footer: { marginBottom: 22, backgroundColor: "#FFF", alignItems: "center" },
});
