import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import PostsList from "./PostsList";

export default PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Публікації</Text>
      </View>
      <View style={styles.user}>
        <Image source={require("../assets/userpic.jpg")} style={styles.image} />
        <View style={styles.userInformation}>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
        </View>
      </View>
      <PostsList />
      <View style={styles.footer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingLeft: 16,
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
  user: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 32,
    backgroundColor: "#FFF",
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: "cover",
  },
  userInformation: { marginLeft: 8 },
  userName: { fontFamily: "Roboto-Bold" },
  userEmail: {},
  footer: { width: 375, height: 83, backgroundColor: "#FFF" },
});
