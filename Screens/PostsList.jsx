import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default PostsList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Image
          source={require("../assets/post-mauntains.jpg")}
          style={styles.image}
        />
        <Text style={styles.title}>Ліс</Text>
        <View style={styles.itemFooter}>
          <Text style={styles.comments}>0</Text>
          <Text style={styles.location}>Ivano-Frankivs'k Region, Ukraine</Text>
        </View>
      </View>
      <View style={styles.item}>
        <Image
          source={require("../assets/post-sunset.jpg")}
          style={styles.image}
        />
        <Text style={styles.title}>Захід сонця</Text>
        <View style={styles.itemFooter}>
          <Text style={styles.comments}>2</Text>
          <Text style={styles.location}>Kherson Region, Ukraine</Text>
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
  item: { flex: 1 },
  image: { width: 343, height: 240, borderRadius: 8 },
  title: {
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
