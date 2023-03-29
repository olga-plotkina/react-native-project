import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  FlatList,
  SafeAreaView,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
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

export default ProfileScreen = () => {
  const [posts, setPosts] = useState(POSTS);

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
                    <View style={{ flexDirection: "row" }}>
                      <View style={styles.infoSet}>
                        <Ionicons
                          style={{ marginRight: 7 }}
                          name="chatbubble-sharp"
                          size={22}
                          color="#FF6C00"
                        />
                        <Text style={styles.comments}>{item.comments}</Text>
                      </View>
                      <View style={{ ...styles.infoSet, marginLeft: 10 }}>
                        <EvilIcons
                          style={{ marginRight: 4 }}
                          name="like"
                          size={30}
                          color="#FF6C00"
                        />

                        <Text style={styles.comments}>{item.likes}</Text>
                      </View>
                    </View>
                    <View style={styles.infoSet}>
                      <SimpleLineIcons
                        style={{ marginRight: 5 }}
                        name="location-pin"
                        size={22}
                        color="#BDBDBD"
                      />
                      <Text style={styles.location}>{item.state}</Text>
                    </View>
                  </View>
                </View>
              )}
              keyExtractor={(item) => item.id}
            />
          </SafeAreaView>
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
  postItem: { height: 305, marginBottom: 25 },
  postImage: { width: "100%", height: 240, borderRadius: 8 },
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
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoSet: { flexDirection: "row", alignItems: "center" },
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
