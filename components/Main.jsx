import React, { useEffect, useState } from "react";
import {} from "react-native";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "../router";
import { authStateChangeUser } from "../redux/auth/authOperations";

import app from "../firebase/config";

const MainComponent = () => {
  const [user, setUser] = useState(null);

  const state = useSelector((state) => state);
  console.log(state);

  app.auth().onAuthStateChanged((user) => setUser(user));

  const routing = useRoute(user);

  useEffect(() => {}, [authStateChangeUser]);

  return <NavigationContainer>{routing}</NavigationContainer>;
};

export default MainComponent;
