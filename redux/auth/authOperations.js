import app from "../../firebase/config.js";
import { authSlice } from "./authReducer";

export const authSignUpUser =
  ({ login, email, password }) =>
  async (dispatch, getState) => {
    try {
      await app.auth().createUserWithEmailAndPassword(email, password);

      const { user } = await app.auth.currentUser;

      console.log("user signup", user);

      dispatch(authSlice.updateUserProfile({ userId: user.uid }));
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

export const authSignOutUser = async (dispatch, getState) => {};

export const authStateChangeUser = async (dispatch, getState) => {};
