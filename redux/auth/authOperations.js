import app from "../../firebase/config.js";
import { authSlice } from "./authReducer";

const { updateUserProfile, authStateChange, authSignOut } = authSlice.actions;

export const authSignUpUser =
  ({ login, email, password }) =>
  async (dispatch, getState) => {
    try {
      await app.auth().createUserWithEmailAndPassword(email, password);

      await app.auth().currentUser.updateProfile({
        displayName: login,
      });
      const user = await app.auth().currentUser;

      console.log("current user", user);
      dispatch(
        updateUserProfile({
          userId: user.uid,
          login: user.displayName,
        })
      );
      console.log("state", authSlice);
    } catch (error) {
      console.log("error", error);
      console.log("error.message", error.message);
    }
  };

export const authSignInUser =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      const user = await app.auth().signInWithEmailAndPassword(email, password);
      console.log("user login", user);
    } catch (error) {
      console.log("error", error);
      console.log("error.message", error.message);
    }
  };

export const authSignOutUser = async (dispatch, getState) => {
  await app.auth().signOut();

  dispatch(authSignOut());
};

export const authStateChangeUser = async (dispatch, getState) => {
  await app.auth().onAuthStateChanged((user) => {
    if (user) {
      dispatch(
        updateUserProfile({
          userId: user.uid,
          login: user.displayName,
        })
      );
      dispatch(
        authStateChange({
          stateChange: true,
        })
      );
    }
  });
};
