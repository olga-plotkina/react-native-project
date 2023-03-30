import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
// import CreatePostScreen from "./CreatePostScreen";
// import ProfileScreen from "./ProfileScreen";
import CommentsScreen from "./CommentsScreen.jsx";
import MapScreen from "./MapScreen.jsx";
import HomeScreen from "./Home.jsx";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { TouchableOpacity } from "react-native-gesture-handler";

const NestedScreen = createStackNavigator();

export default PostsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../assets/background.jpg")}
      >
        <NestedScreen.Navigator>
          <NestedScreen.Screen
            options={({ route, navigation }) => ({
              headerRight: () => (
                <TouchableOpacity
                // onPress={() => {
                //   navigation.reset({ index: 0, routes: [{ name: "Login" }] });
                // }}
                >
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
