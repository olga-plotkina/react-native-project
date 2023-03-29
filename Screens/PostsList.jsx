import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

export default PostsList = () => {
  return (
    <View style={styles.container}>
      <View style={{ ...styles.item, marginBottom: 25 }}>
        <Image
          source={require("../assets/post-mauntains.jpg")}
          style={styles.image}
        />
        <Text style={styles.title}>Ліс</Text>
        <View style={styles.itemFooter}>
          <View style={styles.infoSet}>
            <Ionicons
              style={{ marginRight: 9 }}
              name="md-chatbubble-outline"
              size={22}
              color="#BDBDBD"
            />
            <Text style={styles.comments}>0</Text>
          </View>
          <View style={styles.infoSet}>
            <SimpleLineIcons
              style={{ marginRight: 7 }}
              name="location-pin"
              size={22}
              color="#BDBDBD"
            />
            <Text style={styles.location}>
              Ivano-Frankivs'k Region, Ukraine
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.item}>
        <Image
          source={require("../assets/post-sunset.jpg")}
          style={styles.image}
        />
        <View style={styles.postThumb}>
          <Text style={styles.title}>Захід сонця</Text>
          <View style={styles.itemFooter}>
            <Text style={styles.comments}>2</Text>
            <Text style={styles.location}>Kherson Region, Ukraine</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    marginTop: 32,
  },
  item: { height: 305 },
  image: { width: "100%", height: 240, borderRadius: 8 },
  postThumb: { height: 55 },
  title: {
    marginTop: 8,
    fontFamily: "Roboto-Medium",
    color: "#212121",
    textAlign: "left",
    fontSize: 16,
  },
  itemFooter: {
    width: 343,
    marginTop: 9,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoSet: { flexDirection: "row", alignItems: "center" },
  comments: {
    fontFamily: "Roboto-Medium",
    color: "#BDBDBD",
    fontSize: 16,
  },
  location: {
    fontFamily: "Roboto-Medium",
    color: "#212121",
    fontSize: 16,
  },
});
