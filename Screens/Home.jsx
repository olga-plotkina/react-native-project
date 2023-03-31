import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { SimpleLineIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

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

export default HomeScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState(POSTS);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params.state]);
    }
  }, [route.params]);
  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <Image source={require("../assets/userpic.jpg")} style={styles.image} />
        <View style={styles.userInformation}>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
        </View>
      </View>
      <SafeAreaView style={styles.postsList}>
        <FlatList
          data={posts}
          renderItem={({ item }) => (
            <View style={styles.postItem}>
              <Image
                source={require("../assets/post-mauntains.jpg")}
                style={styles.postImage}
              />
              <Text style={styles.postTitle}>{item.title}</Text>
              <View style={styles.itemFooter}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.postInfoSet}
                  onPress={() => {
                    navigation.navigate("Comments");
                  }}
                >
                  <Ionicons
                    style={{ marginRight: 9 }}
                    name="md-chatbubble-outline"
                    size={22}
                    color="#BDBDBD"
                  />
                  <Text style={styles.comments}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.postInfoSet}
                  onPress={() => {
                    navigation.navigate("Map");
                  }}
                >
                  <SimpleLineIcons
                    style={{ marginRight: 7 }}
                    name="location-pin"
                    size={22}
                    color="#BDBDBD"
                  />
                  <Text style={styles.location}>
                    {item.region}, {item.state}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingLeft: 16,
    paddingRight: 16,
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
  postsList: { flex: 1, marginTop: 32 },
  postItem: { height: 305, marginBottom: 25 },
  postImage: { width: "100%", height: 240, borderRadius: 8 },
  // postThumb: { height: 55 },
  postTitle: {
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
  postInfoSet: { flexDirection: "row", alignItems: "center" },
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
