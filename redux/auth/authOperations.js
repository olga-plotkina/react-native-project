import app from "../../firebase/config";
import { authSlice } from "./authReducer";

export const authSignInUser =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      const { user } = await app
        .auth()
        .signInWithEmailAndPassword(email, password);
      console.log("user came", user);
      dispatch(authSlice.updateUserProfile({ userId: user.uid }));
    } catch (error) {
      console.log("error", error);
      console.log("error.message", error.message);
    }
  };
export const authSignUpUser =
  ({ login, email, password }) =>
  async (dispatch, getState) => {
    try {
      const user = await app
        .auth()
        .createUserWithEmailAndPassword(email, password);
      console.log("actions", authSlice.actions);
      dispatch(authSlice.actions.updateUserProfile({ userId: user.user.uid }));
    } catch (error) {
      console.log("error", error);
      console.log("error.message", error.message);
    }
  };
export const authSignOutUser = async (dispatch, getState) => {};
