import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

const POSTS = [
  {
    id: "1",
    title: "Ліс",
    image: "../assets/post-mauntains.jpg",
    comments: "8",
    likes: "153",
    region: "Ivano-Frankivs'k Region",
    state: "Ukraine",
  },
  {
    id: "2",
    title: "Захід сонця над Чорним морем",
    image: "../assets/post-sunset.jpg",
    comments: "3",
    likes: "200",
    region: "Kherson region",
    state: "Ukraine",
  },
  {
    id: "3",
    title: "Маленький будиночок у Венеції",
    image: "../assets/post-house.jpg",
    comments: "50",
    likes: "200",
    region: "Venecia",
    state: "Italy",
  },
];

export default PostsList = () => {
  const [posts, setPosts] = useState(POSTS);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image
              source={require("../assets/post-mauntains.jpg")}
              style={styles.image}
            />
            <Text style={styles.title}>{item.title}</Text>
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
                  {item.region}, {item.state}
                </Text>
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />

      {/* <View style={{ ...styles.item, marginBottom: 25 }}>
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
            <View style={styles.infoSet}>
              <Ionicons
                style={{ marginRight: 9 }}
                name="md-chatbubble-outline"
                size={22}
                color="#BDBDBD"
              />
              <Text style={styles.comments}>8</Text>
            </View>
            <View style={styles.infoSet}>
              <SimpleLineIcons
                style={{ marginRight: 7 }}
                name="location-pin"
                size={22}
                color="#BDBDBD"
              />
              <Text style={styles.location}>Kherson Region, Ukraine</Text>
            </View>
          </View>
        </View>
      </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    marginTop: 32,
  },
  item: { height: 305, marginBottom: 25 },
  image: { width: "100%", height: 240, borderRadius: 8 },
  // postThumb: { height: 55 },
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
