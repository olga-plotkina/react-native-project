import React from "react";
import { useDispatch } from "react-redux";
import { StyleSheet, View, ImageBackground } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
// import CreatePostScreen from "./CreatePostScreen";
// import ProfileScreen from "./ProfileScreen";
import CommentsScreen from "./CommentsScreen.jsx";
import MapScreen from "./MapScreen.jsx";
import HomeScreen from "./Home.jsx";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
// import app from "../firebase/config.js";

import { TouchableOpacity } from "react-native-gesture-handler";

import { authSignOutUser } from "../redux/auth/authOperations.js";

const NestedScreen = createStackNavigator();

export default PostsScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(authSignOutUser);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../assets/background.jpg")}
      >
        <NestedScreen.Navigator>
          <NestedScreen.Screen
            options={({ route, navigation }) => ({
              headerBackVisible: false,
              headerBackTitleVisible: false,
              headerRight: () => (
                <TouchableOpacity onPress={signOut}>
                  <MaterialIcons
                    style={{ marginRight: 10 }}
                    name="logout"
                    size={24}
                    color="#BDBDBD"
                  />
                </TouchableOpacity>
              ),
              title: "Публікації",
            })}
            name="Home"
            component={HomeScreen}
          />
          <NestedScreen.Screen
            options={{
              headerTitleStyle: {
                fontFamily: "Roboto-Medium",
                fontSize: 17,
              },
              headerBackTitleVisible: false,
              headerBackImage: () => (
                <AntDesign
                  style={{ marginLeft: 20 }}
                  name="arrowleft"
                  size={24}
                  color="rgba(33, 33, 33, 0.8)"
                />
              ),
            }}
            title="Коментарі"
            component={CommentsScreen}
            name="Comments"
          />
          <NestedScreen.Screen
            name="Map"
            component={MapScreen}
            options={{
              title: "Карта",
              headerTitleStyle: {
                fontFamily: "Roboto-Medium",
                fontSize: 17,
              },
              headerBackTitleVisible: false,
              headerBackImage: () => (
                <AntDesign
                  style={{ marginLeft: 20 }}
                  name="arrowleft"
                  size={24}
                  color="rgba(33, 33, 33, 0.8)"
                />
              ),
            }}
          />
        </NestedScreen.Navigator>
      </ImageBackground>
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
