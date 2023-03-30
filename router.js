import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Stack = createStackNavigator();
const MainTab = createBottomTabNavigator();

import LoginScreen from "./Screens/LoginScreen";
import RegistrationScreen from "./Screens/RegistrationScreen";
import ProfileScreen from "./Screens/ProfileScreen.jsx";
import PostsScreen from "./Screens/PostsScreen.jsx";
import CreatePostScreen from "./Screens/CreatePostScreen.jsx";
// import HomeScreen from "./Screens/Home.jsx";

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Posts"
          component={PostsScreen}
        />
      </Stack.Navigator>
    );
  }
  return (
    <MainTab.Navigator
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <MainTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return (
                <View
                  style={{
                    width: 70,
                    height: 40,
                    backgroundColor: "#FF6C00",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 20,
                  }}
                >
                  <Ionicons name="ios-grid-outline" size={size} color="white" />
                </View>
              );
            }
            return (
              <Ionicons name="ios-grid-outline" size={size} color={color} />
            );
          },
        }}
        name="Posts"
        component={PostsScreen}
      />
      <MainTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return (
                <View
                  style={{
                    width: 70,
                    height: 40,
                    backgroundColor: "#FF6C00",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 20,
                  }}
                >
                  <Feather name="user" size={size} color="white" />
                </View>
              );
            }
            return <Feather name="user" size={size} color={color} />;
          },
        }}
        name="Profile"
        component={ProfileScreen}
      />
      <MainTab.Screen
        options={({ route, navigation: { goBack } }) => ({
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                goBack();
              }}
            >
              <AntDesign
                style={{ marginLeft: 20 }}
                name="arrowleft"
                size={24}
                color="rgba(33, 33, 33, 0.8)"
              />
            </TouchableOpacity>
          ),
          headerTitleStyle: {
            fontFamily: "Roboto-Medium",
            fontSize: 17,
          },
          title: "Створити публікацію",
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return (
                <View
                  style={{
                    width: 70,
                    height: 40,
                    backgroundColor: "#FF6C00",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 20,
                  }}
                >
                  <Ionicons name="add-outline" size={18} color="white" />
                </View>
              );
            }
            return <Ionicons name="add-outline" size={18} color="grey" />;
          },
        })}
        name="Create"
        component={CreatePostScreen}
      />
    </MainTab.Navigator>
  );
};
