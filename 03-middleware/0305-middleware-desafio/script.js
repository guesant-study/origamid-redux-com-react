import { tokenFetch } from "./store/token.js";
import { userFetch } from "./store/user.js";
import store from "./store/configureStore.js";

const login = async (user) => {
  let state = store.getState();
  if (state.token.data === null) {
    await store.dispatch(tokenFetch(user));
  }
  state = store.getState();
  await store.dispatch(userFetch(state.token.data));
};

login({ username: "dog", password: "dog" });
