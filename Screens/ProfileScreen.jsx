import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backImage}
        source={require("../assets/background.jpg")}
      >
        <View style={styles.profile}>
          <Image
            source={require("../assets/userpic.jpg")}
            style={styles.profileImage}
          />
          <Text style={styles.title}>Natali Romanova</Text>
          <View style={styles.postsList}>
            <View style={styles.postItem}>
              <Image
                source={require("../assets/post-mauntains.jpg")}
                style={styles.postImage}
              />
              <Text style={styles.postTitle}>Ліс</Text>
              <View style={styles.itemFooter}>
                <Text style={styles.postComments}>8</Text>
                <AntDesign name="like2" size={24} color="black" />
                <Text style={styles.postLocation}>
                  Ivano-Frankivs'k Region, Ukraine
                </Text>
              </View>
            </View>
            {/* <View style={styles.postItem}>
              <Image
                source={require("../assets/post-sunset.jpg")}
                style={styles.postImage}
              />
              <Text style={styles.postTitle}>Захід сонця над Чорним морем</Text>
              <View style={styles.itemFooter}>
                <Text style={styles.postComments}>3</Text>
                <Text style={styles.postLocation}>Kherson Region, Ukraine</Text>
              </View>
            </View> */}
            {/* <View style={styles.postItem}>
              <Image
                source={require("../assets/post-house.jpg")}
                style={styles.postImage}
              />
              <Text style={styles.postTitle}>Старий будиночок в Венеції</Text>
              <View style={styles.itemFooter}>
                <Text style={styles.postComments}>50</Text>
                <Text style={styles.postLocation}>Italy</Text>
              </View>
            </View> */}
          </View>
          <View style={styles.footer}></View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  backImage: {
    flex: 1,
    resizeMode: "cover",
  },
  profile: {
    marginTop: 147,
    position: "relative",
    flex: 1,
    alignItems: "center",
    paddingTop: 92,
    paddingBottom: 46,
    paddingHorizontal: 16,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    fontFamily: "Roboto-Medium",
    color: "#212121",
    textAlign: "center",
    fontSize: 30,
  },
  profileImage: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  postsList: {
    flex: 1,
    backgroundColor: "#FFF",
    marginTop: 32,
  },
  postItem: { flex: 1 },
  postImage: { width: 343, height: 240, borderRadius: 8 },
  postTitle: {
    marginTop: 8,
    fontFamily: "Roboto-Medium",
    color: "#212121",
    textAlign: "left",
    fontSize: 16,
  },
  itemFooter: {
    width: 343,
    marginTop: 11,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  postComments: {
    fontFamily: "Roboto-Medium",
    color: "#BDBDBD",
    fontSize: 16,
  },
  postLocation: {
    fontFamily: "Roboto-Medium",
    color: "#212121",
    fontSize: 16,
  },
  footer: { width: 375, height: 83, backgroundColor: "#FFF" },
});
